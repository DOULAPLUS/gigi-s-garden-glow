import { Heart, Music, Stethoscope, Baby, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: <Heart className="h-8 w-8" />, title: "Vital Touch Therapy", desc: "Therapeutic bodywork combining massage, energy healing, and intentional touch to restore balance and ease tension." },
  { icon: <Music className="h-8 w-8" />, title: "Sound Healing", desc: "Immersive sessions using singing bowls, tuning forks, and guided meditation to promote deep relaxation." },
  { icon: <Stethoscope className="h-8 w-8" />, title: "Wellness Consultations", desc: "Personalized holistic health assessments with herbal recommendations and lifestyle guidance." },
  { icon: <Baby className="h-8 w-8" />, title: "Doula-Informed Support", desc: "Nurturing care rooted in birth work — supporting families through transitions with compassion." },
  { icon: <Wind className="h-8 w-8" />, title: "Movement & Breathwork", desc: "Gentle somatic movement and breathwork practices to release stress and reconnect body and spirit." },
];

const Wellness = () => (
  <div className="py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Wellness Services</h1>
        <p className="text-lg font-subheading text-muted-foreground max-w-2xl mx-auto">
          Healing is holistic. We offer touch therapy, sound healing, consultations, and movement practices that honor the whole person.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(s => (
          <div key={s.title} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-all text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">{s.icon}</div>
            <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
            <Button variant="gold" size="sm">Book Session</Button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Wellness;
