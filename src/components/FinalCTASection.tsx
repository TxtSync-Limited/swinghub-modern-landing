import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FinalCTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text and Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-text-primary leading-tight">
                Ready to get started?
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Sign up for a free trial today and see how our platform can transform your financial management. No credit card required.
              </p>
            </div>

            {/* Email Form */}
            <div className="max-w-md">
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
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-[550px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-blue-50 to-purple-100 p-6 flex flex-col">
                    {/* Phone UI Content */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-lg font-semibold text-gray-800">Dashboard</div>
                      <div className="w-6 h-6 bg-primary rounded-full"></div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Summary Cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">Income</div>
                          <div className="text-lg font-bold text-green-600">$8,250</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">Expenses</div>
                          <div className="text-lg font-bold text-red-600">$3,180</div>
                        </div>
                      </div>

                      {/* Chart Placeholder */}
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-sm font-medium text-gray-700 mb-3">Spending Trends</div>
                        <div className="h-32 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-lg flex items-end justify-around p-2">
                          {[40, 65, 45, 80, 55, 70, 60].map((height, i) => (
                            <div 
                              key={i} 
                              className="w-3 bg-primary rounded-t" 
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-primary text-white rounded-lg p-3 text-sm font-medium">
                          Add Expense
                        </button>
                        <button className="bg-white border border-gray-200 rounded-lg p-3 text-sm font-medium text-gray-700">
                          View Reports
                        </button>
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

export default FinalCTASection;