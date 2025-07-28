import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Download, 
  Users, 
  Shield, 
  Sparkles,
  Play,
  ArrowRight,
  CheckCircle,
  Heart,
  Zap
} from "lucide-react";
import swinghubLogo from "@/assets/swinghub-logo.png";
import heroPhone from "@/assets/hero-phone.png";
import gatewayLifestyle from "@/assets/gateway-lifestyle.png";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Active Members", color: "text-blue-500" },
    { icon: Shield, value: "100%", label: "Verified Safe", color: "text-green-500" },
    { icon: Star, value: "4.8", label: "User Rating", color: "text-yellow-500" },
    { icon: Heart, value: "1M+", label: "Connections Made", color: "text-pink-500" }
  ];

  const features = [
    "✨ Verified & Safe Community",
    "🎭 Exclusive Events & Parties", 
    "💬 Advanced Messaging & Chat",
    "🔒 Complete Privacy Protection"
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center py-16 lg:py-24 px-6 lg:px-8 bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-glow/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-1/4 animate-float">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl rotate-12 blur-sm"></div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{animationDelay: '1s'}}>
          <div className="w-12 h-12 bg-primary-glow/30 rounded-full blur-sm"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3 mb-6">
              <img src={swinghubLogo} alt="SwingHub" className="h-12 w-auto" />
              <div className="flex items-center gap-2">
                <Badge className="bg-primary text-primary-foreground px-3 py-1 animate-pulse">
                  <Sparkles className="w-3 h-3 mr-1" />
                  #1 in UK
                </Badge>
                <Badge variant="outline" className="border-green-500/50 text-green-600 bg-green-500/10 px-3 py-1">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Ultimate</span> App for 
                <span className="block mt-2">Modern Relationships</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Join the UK's most <span className="font-semibold text-primary">trusted lifestyle community</span> where safety meets excitement. Connect, explore, and create meaningful relationships.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.replace(/[✨🎭💬🔒]/g, '').trim()}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold px-8 py-4 rounded-2xl shadow-2xl hover-glow h-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">Download Now</div>
                    <div className="text-xs opacity-70">Free to Join</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
              
              <Button variant="outline" size="lg" className="group border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 text-foreground font-semibold px-8 py-4 rounded-2xl h-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm">Watch Demo</div>
                    <div className="text-xs opacity-70">See How It Works</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center space-y-2 animate-fade-in hover-scale group cursor-pointer"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`w-12 h-12 mx-auto ${stat.color} bg-current/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Main Phone */}
              <Card className="relative w-80 h-[620px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-2xl rounded-[3rem] p-4 border-2 border-white/20 hover-lift group">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-black relative">
                  <img 
                    src={heroPhone} 
                    alt="SwingHub app interface"
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  
                  {/* Phone UI Elements */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-[3rem] blur-xl -z-10 group-hover:opacity-100 opacity-70 transition-opacity"></div>
              </Card>

              {/* Secondary Phone - Floating */}
              <Card className="absolute -left-20 top-16 w-64 h-[480px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-xl rounded-[2.5rem] p-3 border border-white/20 opacity-90 hover-lift rotate-6 hover:rotate-3 transition-all duration-500">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black">
                  <img 
                    src={gatewayLifestyle} 
                    alt="Your gateway to the lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Floating Trust Indicators */}
              <div className="absolute -top-8 -right-8 animate-float">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <div className="text-white text-sm font-semibold">100% Safe</div>
                  </div>
                </Card>
              </div>

              <div className="absolute -bottom-8 -left-8 animate-float" style={{animationDelay: '1s'}}>
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <div className="text-white text-sm font-semibold">50K+ Members</div>
                  </div>
                </Card>
              </div>

              <div className="absolute top-1/2 -right-12 animate-float" style={{animationDelay: '2s'}}>
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <div className="text-white text-sm font-semibold">4.8 Rating</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm font-medium">Trusted by lifestyle enthusiasts across the UK</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Instant Connections
            </Badge>
            <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Bank-Level Security
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Growing Community
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-500/20 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Premium Experience
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;