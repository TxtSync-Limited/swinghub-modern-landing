import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "Pyjama Party",
    date: "Feb 14",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
    color: "bg-pink-500"
  },
  {
    title: "Winter Ball",
    date: "Dec 31",
    location: "Aspen, CO", 
    image: "https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=400&h=300&fit=crop",
    color: "bg-blue-500"
  },
  {
    title: "Hollywood Nights",
    date: "Mar 8",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    color: "bg-yellow-500"
  },
  {
    title: "Rock of Ages",
    date: "Apr 15",
    location: "Nashville, TN",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    color: "bg-purple-500"
  },
  {
    title: "Summer Solstice",
    date: "Jun 21",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop",
    color: "bg-orange-500"
  },
  {
    title: "Masquerade",
    date: "Oct 31",
    location: "New Orleans, LA",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
    color: "bg-indigo-500"
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Events… Where the Lifestyle Comes to Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join exclusive events, meet amazing people, and create unforgettable memories
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Date Badge */}
                <Badge className={`absolute top-4 right-4 ${event.color} text-white px-3 py-1 rounded-full font-medium shadow-card`}>
                  {event.date}
                </Badge>
                
                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <button className="text-primary hover:text-primary/80 font-medium text-sm transition-smooth">
                    Learn More →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;