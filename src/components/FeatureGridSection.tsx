import { Card } from "@/components/ui/card";
import { Video, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import whosNearMe from "@/assets/whos-near-me.png";

const features = [
  {
    icon: Video,
    title: "Live Video Chat",
    description: "Connect face-to-face with verified members through secure video calls.",
  },
  {
    icon: MessageSquare,
    title: "Private Messaging",
    description: "Safe and discreet messaging with advanced privacy controls.",
  },
  {
    icon: MapPin,
    title: "Events Nearby",
    description: "Discover exclusive lifestyle events and parties in your area.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Powerful features designed for you
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to connect, explore, and thrive in the lifestyle community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card border border-white/50 rounded-2xl hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">
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
                </div>
              </Card>
            ))}
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Card className="w-80 h-[600px] bg-gradient-card shadow-premium rounded-3xl p-3 border-2 border-white/50">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img 
                    src={whosNearMe} 
                    alt="Who's near me feature"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;