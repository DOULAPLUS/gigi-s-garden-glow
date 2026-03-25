import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  { date: "Apr 12, 2026", title: "Spring Planting Day", desc: "Join us for a community planting event — seedlings, soil prep, and fellowship.", location: "The Farm" },
  { date: "Apr 26, 2026", title: "Sound Healing Circle", desc: "An evening of singing bowls, guided meditation, and communal restoration.", location: "Wellness Barn" },
  { date: "May 10, 2026", title: "Mother's Day Harvest Brunch", desc: "Celebrate the mothers in your life with a farm-to-table brunch and garden tour.", location: "The Farm" },
  { date: "May 24, 2026", title: "Youth Garden Workshop", desc: "Kids ages 6–14 learn about composting, planting, and nature journaling.", location: "Education Center" },
  { date: "Jun 7, 2026", title: "Summer Solstice Market", desc: "Local vendors, live music, fresh produce, and wellness demonstrations.", location: "Farm Grounds" },
];

const Events = () => (
  <div className="py-16 md:py-24">
    <div className="container max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Upcoming Events</h1>
        <p className="text-lg font-subheading text-muted-foreground">Gatherings, workshops, and celebrations at the farm.</p>
      </div>
      <div className="flex flex-col gap-6">
        {events.map(e => (
          <div key={e.title} className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-soft transition-all flex flex-col md:flex-row gap-4 md:gap-8 items-start">
            <div className="flex items-center gap-3 md:min-w-[160px]">
              <Calendar className="h-5 w-5 text-accent" />
              <span className="font-semibold text-accent">{e.date}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-xl font-semibold mb-1">{e.title}</h3>
              <p className="text-muted-foreground text-sm mb-1">{e.desc}</p>
              <p className="text-xs text-muted-foreground/70">📍 {e.location}</p>
            </div>
            <Button variant="gold" size="sm" className="self-start md:self-center">RSVP</Button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Events;
