import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, ShoppingBag } from "lucide-react";

interface Order {
  id: string;
  status: string;
  total: number;
  created_at: string;
  shipping_name: string | null;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  processing: "bg-purple-100 text-purple-800",
  shipped: "bg-indigo-100 text-indigo-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("orders")
      .select("id, status, total, created_at, shipping_name")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setOrders(data || []);
        setLoading(false);
      });
  }, [user]);

  if (!user) {
    return (
      <div className="py-24 text-center">
        <div className="container max-w-md">
          <Package className="h-20 w-20 text-muted-foreground/20 mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold mb-3">Sign In to View Orders</h1>
          <Link to="/auth"><Button variant="hero" size="lg">Sign In</Button></Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="py-24 text-center text-muted-foreground">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="container max-w-md">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/20 mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold mb-3">No Orders Yet</h1>
          <p className="text-muted-foreground font-subheading mb-6">Your order history will appear here.</p>
          <Link to="/shop"><Button variant="hero" size="lg">Shop the Farm</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-10">Your Orders</h1>
        <div className="flex flex-col gap-4">
          {orders.map(order => (
            <div key={order.id} className="bg-card rounded-2xl p-6 shadow-card flex items-center justify-between">
              <div>
                <p className="font-heading font-semibold">Order #{order.id.slice(0, 8)}</p>
                <p className="text-sm text-muted-foreground">{new Date(order.created_at).toLocaleDateString()}</p>
                {order.shipping_name && <p className="text-sm text-muted-foreground mt-1">{order.shipping_name}</p>}
              </div>
              <div className="text-right flex items-center gap-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${statusColors[order.status] || "bg-muted text-foreground"}`}>
                  {order.status}
                </span>
                <span className="font-heading font-bold text-primary text-lg">${Number(order.total).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
