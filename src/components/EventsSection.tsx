import { Card } from "@/components/ui/card";
import event1 from "@/assets/event-1.png";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";
import event4 from "@/assets/event-4.png";
import event5 from "@/assets/event-5.png";
import event6 from "@/assets/event-6.png";

const events = [
  {
    image: event1,
    title: "Lavish Event"
  },
  {
    image: event2,
    title: "Rock of Ages"
  },
  {
    image: event3,
    title: "Pyjama Party"
  },
  {
    image: event4,
    title: "Hollywood Night"
  },
  {
    image: event5,
    title: "Winter Ball"
  },
  {
    image: event6,
    title: "Mystique Event"
  }
];

const EventsSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Events... Where the Lifestyle Comes to Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exclusive parties, social gatherings, and lifestyle events happening near you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl aspect-[4/3] relative"
            >
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white">
                  {event.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;