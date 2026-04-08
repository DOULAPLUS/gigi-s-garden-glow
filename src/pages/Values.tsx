import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Sprout, Users, ShieldCheck } from "lucide-react";

const Values = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-subheading text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Our <span className="italic text-primary">Values</span>
        </h1>
        <div className="w-16 h-1 bg-accent rounded-full mb-10" />

        <p className="font-subheading text-muted-foreground text-lg leading-relaxed mb-12">
          At Gigi's Garden Groceries & Farm L3C, our values are rooted in the earth we tend and the community we serve. Every decision we make is guided by these principles.
        </p>

        <div className="grid gap-8">
          {[
            {
              icon: Sprout,
              title: "Sustainable Stewardship",
              desc: "We honor the land by growing food naturally and responsibly. Our commitment to sustainable farming practices ensures that the earth we cultivate today will nourish generations to come.",
            },
            {
              icon: Heart,
              title: "Community Nourishment",
              desc: "We believe everyone deserves access to fresh, wholesome food. Through affordable pricing and community outreach, we strive to eliminate food deserts and bring nutritious produce to underserved neighborhoods.",
            },
            {
              icon: Users,
              title: "Education & Empowerment",
              desc: "Knowledge is the seed of change. We empower individuals and families through workshops, farm tours, and hands-on learning—building a community that understands where food comes from and how to make healthier choices.",
            },
            {
              icon: ShieldCheck,
              title: "Integrity & Transparency",
              desc: "From seed to table, we operate with honesty and openness. Our customers know exactly how their food is grown, handled, and prepared because trust is the foundation of every relationship we build.",
            },
          ].map((value) => (
            <div key={value.title} className="flex gap-5 p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-2">{value.title}</h2>
                <p className="font-subheading text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
