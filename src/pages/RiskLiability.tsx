import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RiskLiability = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-subheading text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Risk & <span className="italic text-primary">Liability</span>
        </h1>
        <div className="w-16 h-1 bg-accent rounded-full mb-10" />

        <div className="prose prose-stone max-w-none font-subheading text-muted-foreground space-y-6 leading-relaxed">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Assumption of Risk</h2>
          <p>
            By visiting Gigi's Garden Groceries & Farm L3C ("the Farm"), you acknowledge that agricultural environments carry inherent risks including, but not limited to, uneven terrain, exposure to animals and insects, proximity to farming equipment, and contact with natural allergens. Visitors assume all risk associated with their visit.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-foreground">Product Disclaimer</h2>
          <p>
            All products offered by Gigi's Garden—including fresh produce, juices, preserved goods, and other farm products—are provided "as is." While we take every precaution to ensure quality and safety, we make no warranties regarding fitness for a particular purpose. Customers with food allergies or sensitivities should inquire about ingredients before purchasing.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-foreground">Limitation of Liability</h2>
          <p>
            Gigi's Garden Groceries & Farm L3C, its owner(s), employees, and volunteers shall not be held liable for any injuries, damages, losses, or claims arising from the use of our products, participation in farm activities, or visits to the property, except where required by applicable Louisiana law.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-foreground">Parental Responsibility</h2>
          <p>
            Children must be supervised by a responsible adult at all times while on farm property. Parents and guardians assume full responsibility for the safety and conduct of minors in their care.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-foreground">Indemnification</h2>
          <p>
            Visitors and customers agree to indemnify and hold harmless Gigi's Garden Groceries & Farm L3C from any claims, damages, or expenses arising from their actions or use of our products and services.
          </p>

          <p className="text-sm text-muted-foreground/70 mt-10">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskLiability;
