import { Wallet, TrendingUp, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Manage your finances",
    description: "Our platform provides you with all the tools you need to manage your finances effectively.",
  },
  {
    icon: TrendingUp,
    title: "Track your growth",
    description: "Monitor your business growth with detailed analytics and insights.",
  },
  {
    icon: Shield,
    title: "Secure transactions",
    description: "All your financial data is protected with bank-level security measures.",
  },
];

const FeatureGridSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-text-primary leading-tight">
                All-in-one financial hub
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our platform provides you with all the tools you need to manage your finances, track your expenses, and grow your business.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-text-primary font-medium hover:underline"
                      >
                        Learn more
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-[550px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-green-50 to-emerald-100 p-6 flex flex-col">
                    {/* Phone UI Content */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-8 h-8 bg-primary rounded-lg"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Total Balance</span>
                          <div className="w-4 h-4 bg-primary rounded-full"></div>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">$24,580</div>
                        <div className="text-sm text-green-600">+12% from last month</div>
                      </div>
                      
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                              <div className="flex-1">
                                <div className="h-3 bg-gray-200 rounded-full w-20 mb-1"></div>
                                <div className="h-2 bg-gray-100 rounded-full w-16"></div>
                              </div>
                              <div className="text-sm font-medium text-gray-800">
                                ${Math.floor(Math.random() * 1000)}
                              </div>
                            </div>
                          </div>
                        ))}
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

export default FeatureGridSection;