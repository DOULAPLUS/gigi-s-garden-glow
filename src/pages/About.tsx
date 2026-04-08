import { Heart, Sprout, Users, BookOpen, Leaf, ShieldCheck } from "lucide-react";

const values = [
  { icon: <Heart className="h-6 w-6" />, title: "Faith", text: "God guides every seed we plant." },
  { icon: <Users className="h-6 w-6" />, title: "Family", text: "Legacy is our foundation." },
  { icon: <Sprout className="h-6 w-6" />, title: "Stewardship", text: "We honor the land through regenerative practices." },
  { icon: <Leaf className="h-6 w-6" />, title: "Wellness", text: "Healing is holistic — body, mind, and spirit." },
  { icon: <BookOpen className="h-6 w-6" />, title: "Community", text: "We serve with compassion, integrity, and love." },
];

const detailedValues = [
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
];

const About = () => (
  <div>
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About the Wellness Farm</h1>
        <p className="text-lg font-subheading text-muted-foreground leading-relaxed mb-8">
          Gigi's Garden Groceries & Farm L3C is a faith-rooted regenerative farm, food hub, and wellness enterprise in the Delta South. Through farming, juicing, food preservation, education, and community outreach, we provide accessible, culturally rooted wellness solutions while creating economic opportunities for Black farmers, youth, and families.
        </p>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="font-subheading leading-relaxed">
            Margaret and James Evans didn't set out to build a farm — they set out to build a legacy. A place where families could be nourished, where the land could be restored, and where God's healing could be felt in every harvest, every bottle, every touch.
          </p>
          <p className="font-subheading leading-relaxed mt-4">
            Their journey began with a simple truth: Healthy soil creates healthy people. Healthy people create healthy communities.
          </p>
        </div>
      </div>
    </section>

    {/* Founder Section */}
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-primary-foreground/60 font-subheading mb-3">Our Founder</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Dr. Margaret Evans, <span className="italic">DNP</span>
        </h2>
        <div className="w-20 h-0.5 bg-accent mx-auto mb-8" />
        <p className="font-subheading text-primary-foreground/90 text-lg leading-relaxed mb-6">
          Dr. Margaret Evans is a Lifestyle and Family Nurse Practitioner with a Doctorate in Lifestyle
          Therapeutics. Driven by her faith and passion for community health, Dr. Evans founded Gigi's
          Garden Groceries and Farm L3C to bridge the gap between healthcare and wholesome nutrition.
        </p>
        <p className="font-subheading text-primary-foreground/80 text-lg leading-relaxed">
          Her vision unites clinical expertise with the healing power of the land — creating a space
          where families can access fresh, farm-grown food, learn sustainable practices, and build
          lasting wellness rooted in culture, community, and care.
        </p>
      </div>
    </section>

    <section className="section-sage py-16 md:py-20">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Margaret</h2>
            <p className="text-muted-foreground font-subheading leading-relaxed">
              Margaret is a Nurse Practitioner, doula, farmer, and wellness educator whose life's work has centered on healing. From hospital rooms to birthing suites to garden rows, she carries the same calling: to nurture, to teach, and to restore.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet James</h2>
            <p className="text-muted-foreground font-subheading leading-relaxed">
              James is the Operations & Infrastructure Manager — the one who keeps the soil turned, the systems flowing, and the farm standing strong. Where Margaret brings vision, James brings structure. He is the quiet strength behind the scenes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {values.map(v => (
            <div key={v.title} className="bg-card rounded-2xl p-6 shadow-card text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">{v.icon}</div>
              <h3 className="font-heading font-semibold mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6">
          {detailedValues.map((value) => (
            <div key={value.title} className="flex gap-5 p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground font-subheading leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg font-subheading text-primary-foreground/80 leading-relaxed">
          A thriving community where every household has access to fresh food, holistic healing, and the knowledge to grow, prosper, and live well — generation after generation.
        </p>
      </div>
    </section>
  </div>
);

export default About;
