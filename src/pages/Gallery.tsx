const Gallery = () => (
  <div className="py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
        <p className="text-lg font-subheading text-muted-foreground">Life at the farm — in soil, in spirit, in community.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="aspect-square bg-muted rounded-2xl flex items-center justify-center hover:scale-[1.02] transition-transform cursor-pointer">
            <span className="text-3xl">
              {["🌱", "🥬", "🌻", "🍋", "🌿", "🍅", "🧴", "🪴", "🥕", "🌾", "💐", "🫙"][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
