import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Real-time expense tracking",
  "Categorize your expenses", 
  "Generate expense reports"
];

const ExpenseTrackingSection = () => {
  return (
    <section className="py-24 px-6 bg-background-subtle">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-[550px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-purple-50 to-indigo-100 p-6 flex flex-col">
                    {/* Phone UI Content for Expense Tracking */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-lg font-semibold text-gray-800">Expenses</div>
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Expense Categories */}
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-600">This Month</span>
                          <span className="text-sm text-red-500">-$2,450</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">Food & Dining</span>
                            </div>
                            <span className="text-sm font-medium">$850</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">Transportation</span>
                            </div>
                            <span className="text-sm font-medium">$420</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">Entertainment</span>
                            </div>
                            <span className="text-sm font-medium">$280</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Recent Transactions */}
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-gray-600">Recent</div>
                        {[
                          { name: "Coffee Shop", amount: "-$4.50", time: "2 hours ago" },
                          { name: "Gas Station", amount: "-$45.00", time: "Yesterday" },
                          { name: "Grocery Store", amount: "-$78.25", time: "2 days ago" }
                        ].map((transaction, i) => (
                          <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium text-gray-800">{transaction.name}</div>
                                <div className="text-xs text-gray-500">{transaction.time}</div>
                              </div>
                              <div className="text-sm font-medium text-red-600">{transaction.amount}</div>
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

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-text-primary leading-tight">
                Seamless Expense Tracking
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Track your expenses in real-time and get a clear overview of your spending.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="btn-primary">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpenseTrackingSection;