import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Free Plan",
    price: "£0",
    period: "/month",
    description: "Perfect for curious swingers & open-minded singles.",
    features: [
      "Timeline, Discover & Your View",
      "Message other users",
      "Browse and RSVP to events",
      "Join pages & lifestyle groups",
      "Basic search tools"
    ],
    isPopular: false,
    buttonText: "Select This Plan"
  },
  {
    name: "Premium Plan",
    price: "£9.99",
    period: "/month",
    description: "For those ready to fully unlock the SwingHub lifestyle.",
    features: [
      "Everything in the Free Plan",
      "Near Me – See who's close by",
      "Looked at Me – Know who's checking you out",
      "Meet Now – Find instant meetups",
      "Teleport – Explore any city",
      "Deep Search – Filter exactly what you're into",
      "Content Blur Removal – Unlock spicy pics",
      "Nearby Radius Extender – Go beyond your town",
      "GIFs & Voicenotes – Add real personality to chats",
      "One-Time View Content – Keep things private",
      "Early Bird Event Tickets – Be first in the door",
      "Priority Support – We've got your back, fast"
    ],
    isPopular: true,
    buttonText: "Select This Plan"
  }
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Free to Explore. Support to Elevate.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At SwingHub, we believe everyone should have access to the swinging lifestyle — without paywalls in the way. That's why our core features are totally free, so you can connect, explore, and experience the community with zero pressure.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 bg-gradient-card shadow-card border border-white/50 rounded-2xl transition-all hover-lift ${
                plan.isPopular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.isPopular && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1"
                >
                  Most Popular
                </Badge>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  {plan.name === "Free Plan" && (
                    <div className="text-2xl font-bold text-primary">
                      FREE
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.isPopular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-accent hover:bg-accent/90 text-foreground border border-primary'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;