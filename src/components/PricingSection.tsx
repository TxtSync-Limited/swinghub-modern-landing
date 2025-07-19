import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const freeFeatures = [
    "Browse profiles",
    "Basic matching",
    "Send likes",
    "Join public events",
    "Community access"
  ];

  const premiumFeatures = [
    "Unlimited messaging",
    "Advanced filters",
    "Video calls",
    "Priority support",
    "Exclusive events",
    "Read receipts",
    "Boost visibility",
    "Premium badges"
  ];

  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Free to Explore. Support to Elevate.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your journey for free, then unlock premium features to enhance your experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="p-8 bg-gradient-card shadow-card border-2 border-border rounded-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Free</h3>
                <div className="text-3xl font-bold text-foreground">
                  $0
                  <span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
                <p className="text-muted-foreground mt-2">Perfect for getting started</p>
              </div>

              <ul className="space-y-3">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-3 font-semibold transition-smooth">
                Get Started Free
              </Button>
            </div>
          </Card>

          {/* Premium Plan */}
          <Card className="p-8 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-premium rounded-2xl relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full font-medium">
              <Star className="w-4 h-4 mr-1" />
              Most Popular
            </Badge>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-3xl font-bold">
                  $9.99
                  <span className="text-lg font-normal opacity-90">/month</span>
                </div>
                <p className="opacity-90 mt-2">Everything you need to thrive</p>
              </div>

              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-white text-primary hover:bg-gray-100 py-3 font-semibold shadow-card hover-glow">
                Start Premium Trial
              </Button>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            30-day money-back guarantee • Cancel anytime • No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;