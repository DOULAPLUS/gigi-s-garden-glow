import { BookOpen, Leaf, UtensilsCrossed, GraduationCap, FileText } from "lucide-react";

const topics = [
  { icon: <Leaf className="h-8 w-8" />, title: "Garden Guides", desc: "Step-by-step guides for starting your own regenerative garden at home." },
  { icon: <BookOpen className="h-8 w-8" />, title: "Herbal Education", desc: "Learn about medicinal herbs, preparation methods, and traditional remedies." },
  { icon: <UtensilsCrossed className="h-8 w-8" />, title: "Recipes", desc: "Farm-to-table recipes featuring seasonal produce and healing ingredients." },
  { icon: <GraduationCap className="h-8 w-8" />, title: "Youth Workshops", desc: "Hands-on learning for young growers — planting, composting, and nature journaling." },
  { icon: <FileText className="h-8 w-8" />, title: "Printable Teaching Cards", desc: "Downloadable cards for classroom and family learning activities." },
];

const Education = () => (
  <div className="py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education Hub</h1>
        <p className="text-lg font-subheading text-muted-foreground max-w-2xl mx-auto">
          We believe in teaching what we grow. Explore guides, recipes, herbal wisdom, and youth-friendly learning tools.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map(t => (
          <div key={t.title} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-all">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">{t.icon}</div>
            <h3 className="font-heading text-xl font-semibold mb-2">{t.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Education;
