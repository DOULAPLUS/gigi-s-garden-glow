import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/integrations/supabase/client";

interface DBProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string | null;
  description: string | null;
  badge: string | null;
  in_stock: boolean;
}

const categories = [
  "All Products",
  "Produce Boxes",
  "Juice Fleaux",
  "Herbal Blends",
  "Wellness Goods",
  "Bundles",
  "Vermiculture",
];

const Shop = () => {
  const [active, setActive] = useState("All Products");
  const [products, setProducts] = useState<DBProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .eq("in_stock", true)
      .then(({ data }) => {
        setProducts(data || []);
        setLoading(false);
      });
  }, []);

  const filtered = active === "All Products" ? products : products.filter(p => p.category === active);

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shop the Farm</h1>
          <p className="text-muted-foreground font-subheading max-w-2xl mx-auto">
            From cold-pressed juices to herbal blends, produce boxes, and vermiculture products, everything we offer is grown, crafted, or brewed with intention.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground py-12">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.name,
                  price: Number(product.price),
                  category: product.category,
                  image: product.image_url || "/placeholder.svg",
                  description: product.description || "",
                  badge: product.badge || undefined,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
