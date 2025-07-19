import { Card } from "@/components/ui/card";
import { Video, Users, MapPin, MessageCircle, Shield, Calendar } from "lucide-react";
import mobileAppProfiles from "@/assets/mobile-app-profiles.png";

const features = [
  {
    icon: Video,
    title: "Live Video Chat",
    description: "Connect face-to-face with verified members in secure video calls"
  },
  {
    icon: Users,
    title: "Smart Matching",
    description: "Advanced algorithms to find compatible partners based on your preferences"
  },
  {
    icon: MapPin,
    title: "Events Nearby",
    description: "Discover and join lifestyle events and meetups in your area"
  },
  {
    icon: MessageCircle,
    title: "Private Messaging",
    description: "Secure, encrypted messaging with photo and media sharing"
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "ID verification system ensures authentic, real profiles only"
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Create and organize your own events with built-in RSVP management"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Powerful features designed for you
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to explore, connect, and thrive in the modern lifestyle community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-xl"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Mobile App Visual */}
          <div className="relative flex justify-center">
            <Card className="relative w-80 h-[640px] bg-gradient-card shadow-premium rounded-3xl p-4 border-2 border-white/50">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                <img 
                  src={mobileAppProfiles} 
                  alt="SwingHub app features interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            
            {/* Floating feature highlights */}
            <div className="absolute -top-4 -right-8 bg-primary text-primary-foreground px-3 py-2 rounded-full text-sm font-medium shadow-premium">
              Live Chat
            </div>
            <div className="absolute bottom-20 -left-8 bg-primary-glow text-white px-3 py-2 rounded-full text-sm font-medium shadow-premium">
              Verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;