const Policies = () => (
  <div className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Policies</h1>

      {[
        { title: "Shipping Policy", content: "We ship farm-fresh products Monday through Wednesday to ensure freshness. Orders placed by Sunday evening ship the following Monday. Local pickup is available at the farm. Shipping rates vary by weight and destination." },
        { title: "Return Policy", content: "Due to the perishable nature of our products, we do not accept returns on food items. If your order arrives damaged or incorrect, please contact us within 48 hours for a replacement or refund. Wellness goods may be returned unopened within 14 days." },
        { title: "Privacy Policy", content: "We respect your privacy and are committed to protecting your personal information. We collect only the data needed to process orders and improve your experience. We never sell or share your data with third parties for marketing purposes." },
        { title: "Terms of Service", content: "By using our website and purchasing our products, you agree to these terms. All products are for personal use. Prices are subject to change. We reserve the right to limit quantities. Wellness services are not a substitute for professional medical care." },
      ].map(policy => (
        <section key={policy.title} className="mb-10">
          <h2 className="font-heading text-2xl font-semibold mb-3">{policy.title}</h2>
          <p className="text-muted-foreground leading-relaxed font-subheading">{policy.content}</p>
        </section>
      ))}
    </div>
  </div>
);

export default Policies;
