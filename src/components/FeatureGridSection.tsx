import { Card } from "@/components/ui/card";
import { Video, MessageSquare, MapPin, ArrowRight, Users } from "lucide-react";
import meetNowImage from "@/assets/meet-now.png";
import teleportImage from "@/assets/teleport.png";
import viewedMeImage from "@/assets/viewed-me.png";
import whosNearMeImage from "@/assets/whos-near-me-new.png";
import { Button } from "./ui/button";

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
    title: "Meet now",
    description: "Find people ready to meet up instantly for spontaneous connections.",
    image: meetNowImage,
  },
  {
    icon: MessageSquare,
    title: "Teleport",
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
            <Card key={index} className="group relative overflow-hidden bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl h-80">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              </div>
              
              {/* Glass Blur Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="bg-black/30 backdrop-blur-md border border-white/30 rounded-2xl p-6 space-y-4 transform transition-all duration-300 group-hover:bg-black/40 group-hover:border-white/40">
                  <div className="flex items-center gap-3">
                    {/* <div className="w-10 h-10 bg-primary/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/50">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div> */}
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-white text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-white font-medium hover:text-primary-glow transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Features of SwingHub
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
    </section>
  );
};

export default FeaturesSection;