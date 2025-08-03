import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Heart, MapPin, Search, Eye, Zap, Shield, Star, MessageCircle, Calendar } from "lucide-react";

const premiumFeatures = [
  {
    icon: MapPin,
    title: "Near Me",
    description: "See who's close by and discover exciting connections in your area",
    benefit: "Find local connections instantly"
  },
  {
    icon: Eye,
    title: "Looked at Me",
    description: "Know exactly who's been checking out your profile and showing interest",
    benefit: "Never miss a potential match"
  },
  {
    icon: Zap,
    title: "Meet Now",
    description: "Find instant meetups and spontaneous connections when you're feeling adventurous",
    benefit: "Spontaneous encounters made easy"
  },
  {
    icon: MapPin,
    title: "Teleport",
    description: "Explore any city in the world and connect before you travel",
    benefit: "Global connections at your fingertips"
  },
  {
    icon: Search,
    title: "Deep Search",
    description: "Filter exactly what you're into with advanced search capabilities",
    benefit: "Find your perfect match faster"
  },
  {
    icon: Eye,
    title: "Content Blur Removal",
    description: "Unlock spicy pics and see profiles in their full glory",
    benefit: "See the full picture"
  },
  {
    icon: MapPin,
    title: "Nearby Radius Extender",
    description: "Go beyond your town and expand your connection possibilities",
    benefit: "Wider reach, more connections"
  },
  {
    icon: MessageCircle,
    title: "GIFs & Voicenotes",
    description: "Add real personality to chats with rich media messaging",
    benefit: "Express yourself authentically"
  },
  {
    icon: Shield,
    title: "One-Time View Content",
    description: "Keep things private with disappearing content that adds mystery",
    benefit: "Privacy meets excitement"
  },
  {
    icon: Calendar,
    title: "Early Bird Event Tickets",
    description: "Be first in the door for exclusive SwingHub events and parties",
    benefit: "VIP access to events"
  },
  {
    icon: Star,
    title: "Priority Support",
    description: "We've got your back with fast, dedicated customer support",
    benefit: "Get help when you need it"
  }
];

const Premium = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-16 h-16 text-primary mr-4" />
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-lg">
              Premium Lifestyle
            </Badge>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
            Unlock Your
            <span className="text-primary block">Full Potential</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Elevate your SwingHub experience with premium features designed to help you connect, 
            explore, and enjoy the lifestyle to its fullest. Join thousands of premium members 
            living their best swinging life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Start Your 14-Day Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card border border-white/20 rounded-2xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Free Plan</h3>
                <div className="text-4xl font-bold text-foreground">£0<span className="text-lg text-muted-foreground">/month</span></div>
                <p className="text-muted-foreground">Perfect for curious swingers & open-minded singles</p>
                <Button variant="outline" className="w-full border-primary text-primary">
                  Current Plan
                </Button>
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-premium border border-primary rounded-2xl relative ring-2 ring-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                Most Popular
              </Badge>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Crown className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Premium Plan</h3>
                </div>
                <div className="text-4xl font-bold text-foreground">£9.99<span className="text-lg text-muted-foreground">/month</span></div>
                <p className="text-muted-foreground">For those ready to fully unlock the SwingHub lifestyle</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Upgrade Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Premium Features That
              <span className="text-primary block">Change Everything</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature is designed to enhance your connections, boost your confidence, 
              and unlock experiences you never thought possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card border border-white/20 rounded-xl hover-lift transition-smooth">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground">{feature.description}</p>
                  
                  <div className="flex items-center space-x-2 pt-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{feature.benefit}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground italic">
              "Premium completely transformed our SwingHub experience. The advanced features 
              helped us connect with like-minded couples we never would have found otherwise."
            </blockquote>
            
            <div className="space-y-2">
              <div className="text-lg font-semibold text-foreground">Sarah & Mark</div>
              <div className="text-muted-foreground">Premium Members Since 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Elevate Your
              <span className="text-primary block">SwingHub Experience?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Join thousands of premium members who've unlocked the full potential of the swinging lifestyle.
              Start your free trial today – no commitment, cancel anytime.
            </p>
            
            <div className="space-y-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg">
                Start Your 14-Day Free Trial
              </Button>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Instant access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Premium;