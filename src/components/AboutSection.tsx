import { Card } from "@/components/ui/card";
import coupleSmiling from "@/assets/couple-smiling.png";

const AboutSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              What Makes SwingHub Different?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SwingHub is a fresh take on social networking for the swinging lifestyle — built exclusively for real people looking for real experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
              No swiping. No bots. Just authentic connection.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're just starting out or fully immersed in the lifestyle, SwingHub gives you a private, safe, and thrilling space to meet, chat, and connect with like-minded adults.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Card className="overflow-hidden rounded-2xl shadow-premium hover-lift">
                <img 
                  src={coupleSmiling} 
                  alt="Happy couple using SwingHub"
                  className="w-full h-auto object-cover"
                />
              </Card>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;