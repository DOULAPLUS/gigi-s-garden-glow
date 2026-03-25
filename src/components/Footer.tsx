import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="font-heading text-xl font-bold">Gigi's Garden</span>
          </div>
          <p className="text-primary-foreground/80 text-sm font-subheading leading-relaxed">
            Nourishing body, spirit, and soil — one harvest at a time.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Shop", to: "/shop" },
              { label: "About Us", to: "/about" },
              { label: "Wellness Services", to: "/wellness" },
              { label: "The Farm", to: "/farm" },
              { label: "Contact", to: "/contact" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Resources</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Education Hub", to: "/education" },
              { label: "Blog", to: "/blog" },
              { label: "Events", to: "/events" },
              { label: "Ministry & Outreach", to: "/ministry" },
              { label: "Policies", to: "/policies" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hello@gigisgarden.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Faith Valley, GA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Gigi's Garden Groceries & Wellness Farm. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
