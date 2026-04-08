import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Youtube } from "lucide-react";

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
            Groceries & Farm L3C — Nourishing body, spirit, and soil from the Delta South.
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
              { label: "Our Values", to: "/values" },
              { label: "Risk & Liability", to: "/risk-liability" },
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
              <a href="mailto:GigisGardenFarm@gmail.com" className="hover:text-primary-foreground transition-colors">GigisGardenFarm@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:2253678174" className="hover:text-primary-foreground transition-colors">(225) 367-8174</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>24477 Plank Road, Slaughter, LA 70777</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <a href="https://youtube.com/shorts/RT0QIgj1pmw?si=pRJYHEB0jesYdKAD" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Gigi's Garden Groceries & Farm L3C. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
