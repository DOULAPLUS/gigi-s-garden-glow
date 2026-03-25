import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="container max-w-md">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/20 mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold mb-3">Your Cart is Empty</h1>
          <p className="text-muted-foreground font-subheading mb-6">Add some farm-fresh goodness to get started.</p>
          <Link to="/shop"><Button variant="hero" size="lg">Shop the Farm</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-10">Your Cart</h1>
        <div className="flex flex-col gap-4 mb-8">
          {items.map(item => (
            <div key={item.product.id} className="bg-card rounded-2xl p-5 shadow-card flex items-center gap-5">
              <div className="w-20 h-20 bg-muted rounded-xl flex-shrink-0 flex items-center justify-center text-2xl">🌿</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold">{item.product.name}</h3>
                <p className="text-sm text-muted-foreground">{item.product.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-muted"><Minus className="h-3 w-3" /></button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-muted"><Plus className="h-3 w-3" /></button>
              </div>
              <div className="text-right min-w-[80px]">
                <p className="font-heading font-bold text-primary">${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
              <button onClick={() => removeItem(item.product.id)} className="text-destructive hover:text-destructive/80"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="flex justify-between items-center mb-6">
            <span className="font-heading text-2xl font-bold">Total</span>
            <span className="font-heading text-3xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex gap-3">
            <Button variant="hero" size="lg" className="flex-1">Proceed to Checkout</Button>
            <Button variant="outline" size="lg" onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
