import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg font-subheading text-muted-foreground max-w-2xl mx-auto">
            We'd love to connect with you. Reach out for farm visits, wellness sessions, or community partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
              <input
                type="text" placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email" placeholder="Your Email"
                className="w-full px-5 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="text" placeholder="Subject"
                className="w-full px-5 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
              />
              <textarea
                placeholder="Your Message" rows={5}
                className="w-full px-5 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              />
              <Button variant="hero" size="lg" type="submit">Send Message</Button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl font-semibold mb-2">Get in Touch</h2>
            {[
              { icon: <Mail className="h-5 w-5" />, label: "Email", value: "hello@gigisgarden.com" },
              { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "(555) 123-4567" },
              { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Faith Valley, Georgia" },
              { icon: <Clock className="h-5 w-5" />, label: "Hours", value: "Mon–Sat: 8am–6pm" },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
