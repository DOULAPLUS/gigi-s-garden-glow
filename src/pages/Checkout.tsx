import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ShoppingBag, Truck, Zap, Tag } from "lucide-react";

const SHIPPING_OPTIONS = [
  { id: "standard" as const, label: "Standard Shipping", time: "5–7 business days", price: 5.99, icon: Truck },
  { id: "express" as const, label: "Express Shipping", time: "2–3 business days", price: 12.99, icon: Zap },
];

const COUPON_MAP: Record<string, { id: string; label: string }> = {
  "WELCOME10": { id: "iLNZkv8H", label: "10% Off First Order" },
  "SAVE5": { id: "irKOjaxL", label: "$5 Off" },
};

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [shipping, setShipping] = useState<"standard" | "express">("standard");
  const [discountCode, setDiscountCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ id: string; label: string } | null>(null);
  const [form, setForm] = useState({
    name: "", address: "", city: "", state: "", zip: "", notes: "",
  });

  if (!user) {
    return (
      <div className="py-24 text-center">
        <div className="container max-w-md">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/20 mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold mb-3">Sign in to Checkout</h1>
          <p className="text-muted-foreground font-subheading mb-6">You need an account to complete your order.</p>
          <Link to="/auth"><Button variant="hero" size="lg">Sign In / Sign Up</Button></Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="container max-w-md">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/20 mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold mb-3">Nothing to Checkout</h1>
          <p className="text-muted-foreground font-subheading mb-6">Add some farm-fresh goodness first.</p>
          <Link to="/shop"><Button variant="hero" size="lg">Shop the Farm</Button></Link>
        </div>
      </div>
    );
  }

  const shippingCost = SHIPPING_OPTIONS.find(s => s.id === shipping)!.price;
  const orderTotal = totalPrice + shippingCost;

  const handleApplyDiscount = () => {
    const code = discountCode.trim().toUpperCase();
    const coupon = COUPON_MAP[code];
    if (coupon) {
      setAppliedCoupon(coupon);
      toast({ title: "Discount applied! 🎉", description: coupon.label });
    } else {
      toast({ title: "Invalid code", description: "That discount code wasn't recognized.", variant: "destructive" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const cartItems = items.map(item => ({
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        product_id: item.product.id,
      }));

      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          items: cartItems,
          coupon_id: appliedCoupon?.id,
          shipping_option: shipping,
          shipping_name: form.name,
          shipping_address: form.address,
          shipping_city: form.city,
          shipping_state: form.state,
          shipping_zip: form.zip,
          notes: form.notes,
        },
      });

      if (error) throw error;
      if (data?.url) {
        clearCart();
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err: any) {
      toast({ title: "Checkout Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground mb-10">Checkout</h1>

        {/* Order Summary */}
        <div className="bg-card rounded-2xl shadow-card p-6 mb-6">
          <h2 className="font-heading text-xl font-semibold mb-4">Order Summary</h2>
          {items.map(item => (
            <div key={item.product.id} className="flex justify-between py-2 border-b border-border last:border-0">
              <span>{item.product.name} × {item.quantity}</span>
              <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Shipping Options */}
        <div className="bg-card rounded-2xl shadow-card p-6 mb-6">
          <h2 className="font-heading text-xl font-semibold mb-4">Shipping Method</h2>
          <div className="grid gap-3">
            {SHIPPING_OPTIONS.map(option => (
              <button
                key={option.id}
                type="button"
                onClick={() => setShipping(option.id)}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                  shipping === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/30"
                }`}
              >
                <option.icon className={`h-5 w-5 ${shipping === option.id ? "text-primary" : "text-muted-foreground"}`} />
                <div className="flex-1">
                  <p className="font-semibold">{option.label}</p>
                  <p className="text-sm text-muted-foreground">{option.time}</p>
                </div>
                <span className="font-heading font-bold">${option.price.toFixed(2)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Discount Code */}
        <div className="bg-card rounded-2xl shadow-card p-6 mb-6">
          <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
            <Tag className="h-5 w-5" /> Discount Code
          </h2>
          {appliedCoupon ? (
            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-xl">
              <span className="font-semibold text-primary">{appliedCoupon.label}</span>
              <Button variant="ghost" size="sm" onClick={() => setAppliedCoupon(null)}>Remove</Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Input
                placeholder="Enter discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="flex-1"
              />
              <Button variant="outline" onClick={handleApplyDiscount} disabled={!discountCode.trim()}>
                Apply
              </Button>
            </div>
          )}
        </div>

        {/* Total */}
        <div className="bg-card rounded-2xl shadow-card p-6 mb-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            {appliedCoupon && (
              <div className="flex justify-between text-primary">
                <span>{appliedCoupon.label}</span>
                <span>Applied at checkout</span>
              </div>
            )}
            <div className="flex justify-between pt-3 border-t border-border">
              <span className="font-heading text-xl font-bold">Total</span>
              <span className="font-heading text-xl font-bold text-primary">${orderTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Shipping Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-6 space-y-4">
          <h2 className="font-heading text-xl font-semibold mb-2">Shipping Information</h2>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required value={form.name} onChange={update("name")} placeholder="Margaret Evans" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" required value={form.address} onChange={update("address")} placeholder="123 Garden Lane" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" required value={form.city} onChange={update("city")} />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" required value={form.state} onChange={update("state")} />
            </div>
          </div>
          <div>
            <Label htmlFor="zip">ZIP Code</Label>
            <Input id="zip" required value={form.zip} onChange={update("zip")} />
          </div>
          <div>
            <Label htmlFor="notes">Order Notes (optional)</Label>
            <Input id="notes" value={form.notes} onChange={update("notes")} placeholder="Any special requests?" />
          </div>
          <Button variant="hero" size="lg" className="w-full" type="submit" disabled={loading}>
            {loading ? "Redirecting to payment..." : `Pay $${orderTotal.toFixed(2)} with Stripe`}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            You'll be redirected to Stripe's secure checkout to complete payment.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
