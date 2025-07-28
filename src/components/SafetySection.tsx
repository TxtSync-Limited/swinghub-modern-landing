import { Card } from "@/components/ui/card";
import { Shield, UserCheck, Lock } from "lucide-react";

const safetyFeatures = [
  {
    icon: UserCheck,
    title: "Offenders.org.uk",
    description: "We cross-reference every user's verification photo with data from Offenders.org.uk — a trusted UK resource that helps flag individuals with a history of sexual offences."
  },
  {
    icon: Shield,
    title: "Blackout",
    description: "Keep your private content truly private. Blackout is SwingHub's anti-screenshot technology that helps protect your photos from being captured or shared without permission."
  },
  {
    icon: Lock,
    title: "Reports Team", 
    description: "Our dedicated Reports Team is here to handle it fast and fairly. Just tap Report, and leave the rest up to us — we'll investigate, take action, and keep your experience safe, respectful, and drama free."
  }
];

const SafetySection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Safety First — Always
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We take your safety seriously. SwingHub is designed to be a secure space for open-minded adults — because peace of mind is sexy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-8 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl group">
              <div className="space-y-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
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

        {/* Additional Safety Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-accent-blue/50 border border-accent-blue rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by 500,000+ Members Worldwide
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a community that prioritizes respect, consent, and safety. Our dedicated support team is available 24/7 to ensure your experience is always positive and secure.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;