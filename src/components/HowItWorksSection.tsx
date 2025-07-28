import { Card } from "@/components/ui/card";
import { Calendar, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const timelineSteps = [
  {
    icon: Lightbulb,
    date: "April 2022",
    title: "We've had enough!",
    description: "When using other swinging websites, it became the norm to have your account shut down if a moderator didn't like you. Not only that, the fake accounts, picture collectors became too much for majority of users but they had no other alternative to connect with other swingers."
  },
  {
    icon: Calendar,
    date: "August 2022", 
    title: "I've got an idea",
    description: "The idea of SwingHub came around, putting pen to paper to look at the frustrations many swingers had and working out how do we turn this idea into a reality."
  },
  {
    icon: Rocket,
    date: "September 2023",
    title: "SwingHub Launch",
    description: "The community came together and leaders of their industries came onboard to create the SwingHub team and launch the MVP on the 22nd September 2023."
  },
  {
    icon: TrendingUp,
    date: "Today",
    title: "Today",
    description: "Considered still a start up and on it's final version for global release, SwingHub has taken the UK by storm to become to largest social media app for swingers and modern singles."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Our Origin Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From frustration to innovation — how SwingHub became the UK's favourite lifestyle app
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-glow hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <Card key={index} className="relative bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl p-6 md:p-8 md:ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-12 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-card hidden md:block"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center md:hidden">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="hidden md:block w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        {step.date}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;