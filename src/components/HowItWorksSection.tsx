import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in just a few minutes and get started with our platform."
  },
  {
    number: "02", 
    title: "Connect Your Accounts",
    description: "Securely link your bank accounts and credit cards to start tracking automatically."
  },
  {
    number: "03",
    title: "Start Managing",
    description: "Use our intuitive dashboard to track expenses, set budgets, and grow your business."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-text-primary">
            How Our Platform Works
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our platform is designed to be simple and intuitive. Here's how it works:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-6xl font-bold text-gray-200 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Central Workflow Diagram */}
        <div className="flex justify-center mb-16">
          <div className="bg-background-subtle rounded-2xl p-8 max-w-2xl w-full">
            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
                <div className="text-sm font-medium text-text-primary">Account Setup</div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                </div>
                <div className="text-sm font-medium text-text-primary">Data Sync</div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <svg className="w-8 h-8 text-gray-400 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div className="text-center mt-6">
              <div className="w-16 h-16 bg-green-50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
              </div>
              <div className="text-sm font-medium text-text-primary">Financial Management</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="btn-primary">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;