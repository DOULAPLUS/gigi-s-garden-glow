import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="bg-card rounded-2xl shadow-card overflow-hidden group hover:shadow-soft transition-all duration-300">
      <div className="relative aspect-square bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
          <span className="text-4xl">🌿</span>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="font-heading text-lg font-semibold text-foreground leading-snug">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-heading text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
          <Button variant="gold" size="sm" onClick={() => addItem(product)} className="gap-1.5">
            <ShoppingCart className="h-3.5 w-3.5" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
