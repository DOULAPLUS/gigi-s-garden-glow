import { Church, Heart, Users, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const areas = [
  { icon: <Church className="h-8 w-8" />, title: "Church Partnerships", desc: "We partner with local congregations to provide fresh food, wellness education, and healing events." },
  { icon: <HandHeart className="h-8 w-8" />, title: "Feeding Programs", desc: "Weekly produce distributions and meal support for families in need." },
  { icon: <Heart className="h-8 w-8" />, title: "Healing Circles", desc: "Group sessions for prayer, meditation, sound healing, and communal restoration." },
  { icon: <Users className="h-8 w-8" />, title: "Volunteer Opportunities", desc: "Join us in the garden, the kitchen, or the community — there's always room for willing hands." },
];

const Ministry = () => (
  <div className="py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ministry & Community Outreach</h1>
        <p className="text-lg font-subheading text-muted-foreground max-w-2xl mx-auto">
          We serve through food, faith, and fellowship — partnering with churches, feeding programs, and healing circles.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {areas.map(a => (
          <div key={a.title} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-all">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">{a.icon}</div>
            <h3 className="font-heading text-xl font-semibold mb-2">{a.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button variant="hero" size="lg">Get Involved</Button>
      </div>
    </div>
  </div>
);

export default Ministry;
