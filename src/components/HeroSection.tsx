import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 px-6 overflow-hidden">
      {/* Hero Gradient Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="relative max-w-screen-xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          {/* Hero Heading */}
          <h1 className="text-6xl font-extrabold leading-none text-text-primary max-w-4xl mx-auto">
            The Ultimate Financial Hub for your business
          </h1>
          
          {/* Hero Description */}
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Manage your finances, track your expenses, and grow your business with our all-in-one financial hub.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto relative">
            <div className="flex rounded-lg border border-border-light overflow-hidden bg-white shadow-md">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 border-0 focus:ring-0 focus:border-0 bg-transparent"
              />
              <Button className="btn-primary rounded-none">
                Get Started
              </Button>
            </div>
          </div>

          {/* Social Proof */}
          <div className="space-y-4">
            <p className="text-sm text-text-tertiary">
              Trusted by leading companies
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="text-text-tertiary font-semibold text-lg">
                  Company Logo
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Central Phone Mockup */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl transform rotate-3">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-16 h-16 bg-primary rounded-xl mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Financial Dashboard</h3>
                    <p className="text-sm text-gray-600">Track your expenses and income in real-time</p>
                    <div className="space-y-3">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-primary"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-blue-400"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-5/6 h-full bg-purple-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;