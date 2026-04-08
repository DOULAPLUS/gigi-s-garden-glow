import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface CartItem {
  name: string;
  price: number; // in dollars
  quantity: number;
  product_id: string;
}

interface CheckoutRequest {
  items: CartItem[];
  coupon_id?: string;
  shipping_option?: "standard" | "express";
  shipping_name?: string;
  shipping_address?: string;
  shipping_city?: string;
  shipping_state?: string;
  shipping_zip?: string;
  notes?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    // Auth
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    if (!user?.email) throw new Error("User not authenticated");

    const body: CheckoutRequest = await req.json();
    if (!body.items || body.items.length === 0) {
      throw new Error("Cart is empty");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Find or skip customer
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Build line items with price_data for dynamic cart
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = body.items.map(
      (item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })
    );

    // Shipping as a line item
    const shippingCost = body.shipping_option === "express" ? 12.99 : 5.99;
    const shippingLabel = body.shipping_option === "express" ? "Express Shipping (2-3 days)" : "Standard Shipping (5-7 days)";
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: { name: shippingLabel },
        unit_amount: Math.round(shippingCost * 100),
      },
      quantity: 1,
    });

    // Build session params
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/checkout`,
      metadata: {
        user_id: user.id,
        shipping_name: body.shipping_name || "",
        shipping_address: body.shipping_address || "",
        shipping_city: body.shipping_city || "",
        shipping_state: body.shipping_state || "",
        shipping_zip: body.shipping_zip || "",
        notes: body.notes || "",
        shipping_option: body.shipping_option || "standard",
      },
    };

    // Apply coupon discount
    if (body.coupon_id) {
      sessionParams.discounts = [{ coupon: body.coupon_id }];
    } else {
      sessionParams.allow_promotion_codes = true;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
