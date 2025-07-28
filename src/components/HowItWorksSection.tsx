import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const timelineSteps = [
  {
    icon: Lightbulb,
    date: "April 2022",
    title: "We've had enough!",
    description: "When using other swinging websites, it became the norm to have your account shut down if a moderator didn't like you. Not only that, the fake accounts, picture collectors became too much for majority of users but they had no other alternative to connect with other swingers.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Calendar,
    date: "August 2022", 
    title: "I've got an idea",
    description: "The idea of SwingHub came around, putting pen to paper to look at the frustrations many swingers had and working out how do we turn this idea into a reality.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Rocket,
    date: "September 2023",
    title: "SwingHub Launch",
    description: "The community came together and leaders of their industries came onboard to create the SwingHub team and launch the MVP on the 22nd September 2023.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    date: "Today",
    title: "Today",
    description: "Considered still a start up and on it's final version for global release, SwingHub has taken the UK by storm to become to largest social media app for swingers and modern singles.",
    color: "from-primary to-primary-glow"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
            Our Journey
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Our Origin Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From frustration to innovation — how SwingHub became the UK's favourite lifestyle app
          </p>
        </div>

        <div className="relative">
          {/* Modern Timeline */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {timelineSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative animate-fade-in hover-scale group ${
                  index % 2 === 0 ? 'lg:justify-self-end' : 'lg:justify-self-start'
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <Card className="relative bg-gradient-card shadow-premium hover-lift border border-white/50 rounded-3xl p-8 max-w-lg group-hover:shadow-2xl transition-all duration-500">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-3xl`}></div>
                  
                  {/* Icon with Gradient */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-card mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-3 py-1 text-sm font-semibold">
                        {step.date}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary-glow/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </Card>

                {/* Connection Line for Desktop */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-10"
                       style={{
                         left: index % 2 === 0 ? '100%' : '-100%',
                         transform: 'translateY(-50%)',
                         width: '50px'
                       }}>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Floating Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-card shadow-card border border-white/50 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-muted-foreground font-medium">Building the future of lifestyle connections</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;