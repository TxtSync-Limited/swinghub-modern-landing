import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = {
  monthly: {
    basic: { price: "$10", period: "/mth" },
    pro: { price: "$25", period: "/mth" },
    enterprise: { price: "$50", period: "/mth" }
  },
  annual: {
    basic: { price: "$8", period: "/mth" },
    pro: { price: "$20", period: "/mth" },
    enterprise: { price: "$40", period: "/mth" }
  }
};

const plans = [
  {
    name: "Basic",
    key: "basic",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 100 transactions per month",
      "Basic expense tracking",
      "Email support",
      "Mobile app access"
    ],
    isPopular: false
  },
  {
    name: "Pro",
    key: "pro", 
    description: "Everything you need to manage your finances",
    features: [
      "Unlimited transactions",
      "Advanced analytics & reports",
      "Priority support",
      "API access",
      "Custom categories",
      "Team collaboration"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    key: "enterprise",
    description: "Advanced features for larger organizations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security features",
      "SLA guarantee",
      "White-label options"
    ],
    isPopular: false
  }
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const currentPricing = isAnnual ? pricingPlans.annual : pricingPlans.monthly;

  return (
    <section id="pricing" className="py-24 px-6 bg-background-subtle">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-text-primary">
            Pricing Plans
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the plan that's right for you.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-text-primary' : 'text-text-tertiary'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${isAnnual ? 'text-text-primary' : 'text-text-tertiary'}`}>
                Annually
              </span>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Save 20%
              </Badge>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 rounded-2xl border-2 transition-all hover:shadow-lg ${
                plan.isPopular 
                  ? 'border-primary shadow-lg' 
                  : 'border-border bg-white'
              }`}
            >
              {plan.isPopular && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1"
                >
                  Most Popular
                </Badge>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-bold text-text-primary">
                      {currentPricing[plan.key as keyof typeof currentPricing].price}
                    </span>
                    <span className="text-text-tertiary">
                      {currentPricing[plan.key as keyof typeof currentPricing].period}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-text-tertiary">
                      Billed annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.isPopular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  Get Started
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