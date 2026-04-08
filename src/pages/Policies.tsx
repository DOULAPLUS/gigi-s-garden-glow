import { Link } from "react-router-dom";

const Policies = () => (
  <div className="py-16 md:py-24">
    <div className="container max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Policies</h1>

      <div className="prose prose-stone max-w-none font-subheading text-muted-foreground space-y-8 leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Shipping Policy</h2>
          <p>We ship farm-fresh products Monday through Wednesday to ensure freshness. Orders placed by Sunday evening ship the following Monday. Local pickup is available at the farm. Shipping rates vary by weight and destination.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Return Policy</h2>
          <p>Due to the perishable nature of our products, we do not accept returns on food items. If your order arrives damaged or incorrect, please contact us within 48 hours for a replacement or refund. Wellness goods may be returned unopened within 14 days.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Information We Collect</h2>
          <p>
            When you interact with Gigi's Garden Groceries & Farm L3C—whether placing an order, signing up for a workshop, or contacting us—we may collect personal information such as your name, email address, phone number, and mailing address. We only collect information that is necessary to provide our services.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill orders</li>
            <li>Communicate with you about your purchases, appointments, or inquiries</li>
            <li>Send updates about farm events, seasonal offerings, and community programs (with your consent)</li>
            <li>Improve our products and services</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our business (e.g., payment processors, delivery services), but only to the extent necessary to fulfill our obligations to you.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Your Rights</h2>
          <p>
            You may request to view, update, or delete the personal information we hold about you at any time by contacting us at{" "}
            <a href="mailto:GigisGardenFarm@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
              GigisGardenFarm@gmail.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Terms of Service</h2>
          <p>By using our website and purchasing our products, you agree to these terms. All products are for personal use. Prices are subject to change. We reserve the right to limit quantities. Wellness services are not a substitute for professional medical care.</p>
        </section>

        <p className="text-sm text-muted-foreground/70 mt-10">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link to="/values" className="text-primary hover:text-primary/80 transition-colors font-subheading text-sm underline">Our Values</Link>
        <Link to="/risk-liability" className="text-primary hover:text-primary/80 transition-colors font-subheading text-sm underline">Risk & Liability</Link>
      </div>
    </div>
  </div>
);

export default Policies;
