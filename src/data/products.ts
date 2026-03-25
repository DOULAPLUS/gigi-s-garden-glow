export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  badge?: string;
}

export interface WellnessService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const products: Product[] = [
  { id: "1", name: "Green Vitality Juice", price: 12.99, category: "Juice Fleaux", image: "/placeholder.svg", description: "Cold-pressed kale, cucumber, celery, ginger & lemon.", badge: "Best Seller" },
  { id: "2", name: "Golden Sunrise Blend", price: 13.99, category: "Juice Fleaux", image: "/placeholder.svg", description: "Turmeric, carrot, orange, pineapple & black pepper." },
  { id: "3", name: "Berry Restoration", price: 12.99, category: "Juice Fleaux", image: "/placeholder.svg", description: "Blueberry, strawberry, beet, apple & mint." },
  { id: "4", name: "Weekly Produce Box", price: 45.00, category: "Produce Boxes", image: "/placeholder.svg", description: "Seasonal farm-fresh vegetables and herbs for your family.", badge: "Popular" },
  { id: "5", name: "Family Harvest Box", price: 65.00, category: "Produce Boxes", image: "/placeholder.svg", description: "Large seasonal box with premium greens, roots, and herbs." },
  { id: "6", name: "Calm & Restore Tea", price: 18.99, category: "Herbal Blends", image: "/placeholder.svg", description: "Chamomile, lavender, lemon balm & passionflower." },
  { id: "7", name: "Immunity Roots Blend", price: 22.99, category: "Herbal Blends", image: "/placeholder.svg", description: "Echinacea, elderberry, astragalus & ginger root.", badge: "New" },
  { id: "8", name: "Detox & Glow Tea", price: 19.99, category: "Herbal Blends", image: "/placeholder.svg", description: "Dandelion root, milk thistle, peppermint & nettle." },
  { id: "9", name: "Herbal Body Butter", price: 28.99, category: "Wellness Goods", image: "/placeholder.svg", description: "Shea butter infused with calendula, lavender & vitamin E." },
  { id: "10", name: "Aromatherapy Roll-On", price: 16.99, category: "Wellness Goods", image: "/placeholder.svg", description: "Essential oil blend for calm and focus." },
  { id: "11", name: "Red Wiggler Worms (500ct)", price: 35.00, category: "Vermiculture", image: "/placeholder.svg", description: "Live composting worms for your garden or worm bin." },
  { id: "12", name: "Worm Castings (5 lb)", price: 24.99, category: "Vermiculture", image: "/placeholder.svg", description: "Nutrient-rich organic fertilizer from our farm." },
  { id: "13", name: "Compost Tea (1 gal)", price: 18.99, category: "Vermiculture", image: "/placeholder.svg", description: "Fresh-brewed microbial tea for soil health.", badge: "Farm Fresh" },
  { id: "14", name: "Spring Wellness Bundle", price: 89.99, category: "Bundles", image: "/placeholder.svg", description: "3 juices, 1 herbal blend, 1 body butter — save 15%.", badge: "Bundle" },
  { id: "15", name: "Juice Cleanse Pack (5-Day)", price: 59.99, category: "Bundles", image: "/placeholder.svg", description: "Five days of cold-pressed nourishment." },
];

export const categories = [
  "All Products",
  "Produce Boxes",
  "Juice Fleaux",
  "Herbal Blends",
  "Wellness Goods",
  "Bundles",
  "Vermiculture",
];

export const wellnessServices: WellnessService[] = [
  { id: "w1", title: "Vital Touch Therapy", description: "Therapeutic bodywork combining massage, energy healing, and intentional touch to restore balance and ease tension.", icon: "Hand" },
  { id: "w2", title: "Sound Healing", description: "Immersive sessions using singing bowls, tuning forks, and guided meditation to promote deep relaxation.", icon: "Music" },
  { id: "w3", title: "Wellness Consultations", description: "Personalized holistic health assessments with herbal recommendations and lifestyle guidance.", icon: "Heart" },
  { id: "w4", title: "Doula-Informed Support", description: "Nurturing care rooted in birth work — supporting families through transitions with compassion.", icon: "Baby" },
  { id: "w5", title: "Movement & Breathwork", description: "Gentle somatic movement and breathwork practices to release stress and reconnect body and spirit.", icon: "Wind" },
];
