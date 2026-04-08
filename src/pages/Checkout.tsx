import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ShoppingBag } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          total: totalPrice,
          shipping_name: form.name,
          shipping_address: form.address,
          shipping_city: form.city,
          shipping_state: form.state,
          shipping_zip: form.zip,
          notes: form.notes || null,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.product.id,
        product_name: item.product.name,
        quantity: item.quantity,
        unit_price: item.product.price,
      }));

      const { error: itemsError } = await supabase.from("order_items").insert(orderItems);
      if (itemsError) throw itemsError;

      clearCart();
      toast({ title: "Order placed! 🌿", description: "Thank you for supporting the farm." });
      navigate("/orders");
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
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

        <div className="bg-card rounded-2xl shadow-card p-6 mb-6">
          <h2 className="font-heading text-xl font-semibold mb-4">Order Summary</h2>
          {items.map(item => (
            <div key={item.product.id} className="flex justify-between py-2 border-b border-border last:border-0">
              <span>{item.product.name} × {item.quantity}</span>
              <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between pt-4 mt-2">
            <span className="font-heading text-xl font-bold">Total</span>
            <span className="font-heading text-xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

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
            {loading ? "Placing Order..." : `Place Order — $${totalPrice.toFixed(2)}`}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
