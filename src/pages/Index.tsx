import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout, Heart, BookOpen, Droplets, Sun, Users } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, wellnessServices } from "@/data/products";
import heroImage from "@/assets/hero-farm.jpg";

const Index = () => {
  const featured = products.filter(p => p.badge).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Gigi's Garden Wellness Farm" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="text-script text-3xl md:text-4xl text-farm-gold mb-2">From Soil to Soul</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-card leading-[1.1] mb-6">
              Nourishing Families From Soil to Soul.
            </h1>
            <p className="text-lg md:text-xl text-card/80 font-subheading leading-relaxed mb-8 max-w-xl">
              Where regenerative farming, whole-body wellness, and faith-rooted community care come together to heal, uplift, and feed generations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop"><Button variant="gold" size="xl">Shop the Farm</Button></Link>
              <Link to="/wellness"><Button variant="hero-outline" size="xl" className="border-card text-card hover:bg-card hover:text-foreground">Explore Wellness</Button></Link>
              <Link to="/farm"><Button variant="hero-outline" size="xl" className="border-card text-card hover:bg-card hover:text-foreground">Visit the Garden</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-sage py-20 md:py-28">
        <div className="container text-center max-w-3xl">
          <Sprout className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg font-subheading text-foreground/80 leading-relaxed">
            Our mission is to nourish families, strengthen communities, and restore the land through faith-rooted farming, whole-body wellness, and accessible education. We cultivate food, healing practices, and learning experiences that honor God, uplift generations, and reconnect people to the soil that sustains us.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Farm-Fresh Favorites</h2>
            <p className="text-muted-foreground font-subheading max-w-xl mx-auto">From cold-pressed juices to herbal blends, everything we offer is grown, crafted, or brewed with intention.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/shop"><Button variant="hero" size="lg">View All Products</Button></Link>
          </div>
        </div>
      </section>

      {/* Wellness Preview */}
      <section className="section-sage py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Wellness Services</h2>
            <p className="text-muted-foreground font-subheading max-w-xl mx-auto">Healing is holistic. We offer touch therapy, sound healing, consultations, and movement practices that honor the whole person.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessServices.slice(0, 3).map(service => {
              const icons: Record<string, React.ReactNode> = {
                Hand: <Heart className="h-8 w-8" />,
                Music: <Sun className="h-8 w-8" />,
                Heart: <Droplets className="h-8 w-8" />,
              };
              return (
                <div key={service.id} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-300">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                    {icons[service.icon] || <Heart className="h-8 w-8" />}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/wellness"><Button variant="hero" size="lg">Explore All Services</Button></Link>
          </div>
        </div>
      </section>

      {/* Scripture Affirmation */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <p className="text-script text-4xl md:text-5xl mb-6 text-farm-gold">With Love & Intention</p>
          <blockquote className="text-2xl md:text-3xl font-heading font-semibold leading-relaxed mb-4">
            "Beloved, I pray that you may prosper in all things and be in good health."
          </blockquote>
          <cite className="text-lg font-subheading text-primary-foreground/70">— 3 John 1:2</cite>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Users className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Rooted in Community</h2>
              <p className="text-muted-foreground font-subheading leading-relaxed mb-4">
                What began as a family dream has become a living ministry — a place where soil, scripture, and sound come together to heal and uplift. Margaret and James are building more than a farm. They are building a legacy of nourishment, healing, and generational empowerment.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/about"><Button variant="hero" size="lg">Our Story</Button></Link>
                <Link to="/ministry"><Button variant="hero-outline" size="lg">Community Outreach</Button></Link>
              </div>
            </div>
            <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <BookOpen className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground font-subheading">Family & Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
