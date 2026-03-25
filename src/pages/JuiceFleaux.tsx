import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const juices = products.filter(p => p.category === "Juice Fleaux");

const JuiceFleaux = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-20 md:py-28">
      <div className="container text-center max-w-3xl">
        <p className="text-script text-3xl text-farm-gold mb-2">Cold-Pressed • Sound-Infused</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Juice Fleaux</h1>
        <p className="text-lg font-subheading text-primary-foreground/80 leading-relaxed">
          Cold-pressed blends crafted to nourish your body and uplift your spirit — each bottle infused with sound, scripture, and intention.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Cold-Pressed Purity", desc: "Hydraulic pressing preserves maximum nutrients, enzymes, and living energy." },
            { title: "Sound-Infused", desc: "Each blend is prepared with healing frequencies and spoken affirmations." },
            { title: "Farm-to-Bottle", desc: "Ingredients grown on our own farm using regenerative practices." },
          ].map(b => (
            <div key={b.title} className="text-center p-6">
              <h3 className="font-heading text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-foreground text-center mb-8">Featured Blends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {juices.map(j => <ProductCard key={j.id} product={j} />)}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop"><Button variant="hero" size="lg">View All Products</Button></Link>
        </div>
      </div>
    </section>
  </div>
);

export default JuiceFleaux;
