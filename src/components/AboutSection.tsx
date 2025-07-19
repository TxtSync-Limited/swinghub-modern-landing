import { Card } from "@/components/ui/card";
import coupleUsingApp from "@/assets/couple-using-app.jpg";

const AboutSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Connect with confidence in a safe, welcoming community
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SwingHub is more than just an app – it's a thriving community where open-minded individuals and couples can explore connections, discover events, and build meaningful relationships. Our platform combines cutting-edge technology with genuine human connection.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're new to the lifestyle or a seasoned member of the community, SwingHub provides the tools, safety features, and supportive environment you need to explore with confidence.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <Card className="relative overflow-hidden rounded-2xl shadow-premium hover-lift">
              <img 
                src={coupleUsingApp} 
                alt="Happy couple using SwingHub app together"
                className="w-full h-96 object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;