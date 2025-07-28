import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Users } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";
import gatewayLifestyle from "@/assets/gateway-lifestyle.png";

const HeroSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                SwingHub – The <span className="text-primary">#1 App</span> for Swingers & Modern Singles
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                A revolutionary platform for empowered, open-minded connections — where safety meets excitement.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-card hover-glow h-14">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-90">Download</div>
                  <div className="text-lg font-semibold">Now</div>
                </div>
              </Button>
              <Button variant="outline" className="flex items-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-card transition-smooth h-14">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-90">Discover the</div>
                  <div className="text-lg font-semibold">Features</div>
                </div>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-accent text-foreground px-4 py-2 rounded-full font-medium shadow-soft">
                <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                The UK's Favourite Lifestyle App
              </Badge>
              <Badge variant="secondary" className="bg-accent text-foreground px-4 py-2 rounded-full font-medium shadow-soft">
                <Users className="w-4 h-4 mr-2" />
                Thousands of Active Users — And Growing Fast
              </Badge>
            </div>
          </div>

          {/* Right Content - Mobile Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Phone */}
              <Card className="relative w-72 h-[580px] bg-gradient-card shadow-premium rounded-3xl p-3 border-2 border-white/50">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img 
                    src={heroPhone} 
                    alt="SwingHub app interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Secondary Phone - Gateway to Lifestyle */}
              <Card className="absolute -left-16 top-12 w-56 h-[450px] bg-gradient-card shadow-premium rounded-3xl p-3 border-2 border-white/50 opacity-90 hover-lift">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img 
                    src={gatewayLifestyle} 
                    alt="Your gateway to the lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-glow/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;