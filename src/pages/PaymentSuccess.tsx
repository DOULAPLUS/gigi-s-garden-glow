import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="py-24 text-center">
      <div className="container max-w-md">
        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        <h1 className="font-heading text-3xl font-bold mb-3">Payment Successful! 🌿</h1>
        <p className="text-muted-foreground font-subheading mb-6">
          Thank you for your order! We're preparing your farm-fresh goods with love.
        </p>
        <div className="flex flex-col gap-3">
          <Link to="/orders">
            <Button variant="hero" size="lg" className="w-full">View My Orders</Button>
          </Link>
          <Link to="/shop">
            <Button variant="outline" size="lg" className="w-full">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
