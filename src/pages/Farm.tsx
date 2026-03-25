import { Sprout, Droplets, Bug, Sun, Calendar } from "lucide-react";

const sections = [
  { icon: <Sprout className="h-8 w-8" />, title: "What We Grow", text: "Seasonal greens, root vegetables, culinary herbs, medicinal plants, and companion flowers — all grown with regenerative methods." },
  { icon: <Sun className="h-8 w-8" />, title: "Companion Planting", text: "We pair plants strategically to enhance growth, repel pests, and enrich the soil naturally — the way nature intended." },
  { icon: <Droplets className="h-8 w-8" />, title: "Soil Care", text: "Healthy soil is the foundation of everything we do. We build living soil through composting, cover cropping, and minimal tillage." },
  { icon: <Bug className="h-8 w-8" />, title: "Vermiculture Program", text: "We raise red wigglers that transform kitchen scraps into nutrient-rich castings. These castings and our fresh-brewed compost tea are available for purchase." },
  { icon: <Droplets className="h-8 w-8" />, title: "Compost Tea Brewing", text: "Our actively aerated compost tea introduces beneficial microorganisms into the soil ecosystem, boosting plant immunity and vitality." },
  { icon: <Calendar className="h-8 w-8" />, title: "Seasonal Harvest Calendar", text: "Spring greens, summer fruits, fall roots, winter herbs — we grow year-round using succession planting and season extension." },
];

const Farm = () => (
  <div className="py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">The Farm</h1>
        <p className="text-lg font-subheading text-muted-foreground max-w-2xl mx-auto">
          Our land is alive with purpose — from companion planting to vermiculture, compost tea brewing, and regenerative soil care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map(s => (
          <div key={s.title} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-all">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">{s.icon}</div>
            <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Farm;
