import { Link } from "react-router-dom";

const posts = [
  { slug: "spring-garden-tips", title: "5 Spring Garden Tips for Beginners", date: "Mar 15, 2026", excerpt: "Start your growing season right with these simple, faith-rooted practices for healthy soil and abundant harvests.", category: "Garden Guides" },
  { slug: "compost-tea-benefits", title: "The Power of Compost Tea", date: "Mar 8, 2026", excerpt: "Learn how our fresh-brewed compost tea revitalizes soil biology and supercharges plant growth.", category: "Farm Science" },
  { slug: "sound-healing-journey", title: "What to Expect at a Sound Healing Session", date: "Feb 28, 2026", excerpt: "A guide to our immersive sound healing circles — from singing bowls to guided affirmations.", category: "Wellness" },
  { slug: "juice-cleanse-guide", title: "Your First Juice Cleanse: A Gentle Guide", date: "Feb 15, 2026", excerpt: "Everything you need to know about cold-pressed cleansing — body, mind, and spirit.", category: "Juice Fleaux" },
  { slug: "vermiculture-101", title: "Vermiculture 101: Getting Started with Worms", date: "Feb 1, 2026", excerpt: "Red wigglers are the unsung heroes of regenerative farming. Here's how to start your own bin.", category: "Farm Science" },
];

const Blog = () => (
  <div className="py-16 md:py-24">
    <div className="container max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-lg font-subheading text-muted-foreground">Stories, wisdom, and updates from the farm.</p>
      </div>
      <div className="flex flex-col gap-8">
        {posts.map(post => (
          <article key={post.slug} className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-soft transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
            <h2 className="font-heading text-2xl font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">{post.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
