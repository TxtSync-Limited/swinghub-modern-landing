import { Card } from "@/components/ui/card";
import { Video, MessageSquare, MapPin, ArrowRight, Users } from "lucide-react";
import meetNowImage from "@/assets/meet-now.png";
import teleportImage from "@/assets/teleport.png";
import viewedMeImage from "@/assets/viewed-me.png";
import whosNearMeImage from "@/assets/whos-near-me-new.png";

const features = [
  {
    icon: MapPin,
    title: "Who's near me",
    description: "Discover like-minded individuals in your area and see who's around you right now.",
    image: whosNearMeImage,
  },
  {
    icon: Users,
    title: "Viewed me",
    description: "See who's been checking out your profile and showing interest in you.",
    image: viewedMeImage,
  },
  {
    icon: Video,
    title: "Meet now functionality",
    description: "Find people ready to meet up instantly for spontaneous connections.",
    image: meetNowImage,
  },
  {
    icon: MessageSquare,
    title: "Teleport - discover people all over the globe",
    description: "Explore connections worldwide and connect with people anywhere on the planet.",
    image: teleportImage,
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Core Features That Put You First
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineered to encourage meaningful interaction — not distractions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center shadow-card">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;