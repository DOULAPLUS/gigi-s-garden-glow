import { Mail, Phone, MapPin, Clock, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject) {
      setForm(prev => ({ ...prev, subject }));
    }
  }, [searchParams]);

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
              { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "24477 Plank Road, Slaughter, Louisiana 70777", sub: "Conveniently located adjacent to True Care Health and Wellness Center" },
              { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "(225) 367-8174", href: "tel:2253678174" },
              { icon: <Mail className="h-5 w-5" />, label: "Email", value: "GigisGardenFarm@gmail.com", href: "mailto:GigisGardenFarm@gmail.com" },
              { icon: <Clock className="h-5 w-5" />, label: "Hours", value: "By appointment only" },
              { icon: <Youtube className="h-5 w-5" />, label: "Follow Us", value: "YouTube", href: "https://youtube.com/shorts/RT0QIgj1pmw?si=pRJYHEB0jesYdKAD", external: true },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      target={"external" in item ? "_blank" : undefined}
                      rel={"external" in item ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  )}
                  {"sub" in item && item.sub && (
                    <p className="text-muted-foreground/70 text-xs mt-1 italic">{item.sub}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden shadow-card mt-2">
              <iframe
                title="Gigi's Garden location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.0!2d-91.15!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzAwLjAiTiA5McKwMDknMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
