import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Star Rating */}
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Rating Text */}
        <div className="mb-8">
          <div className="text-4xl font-bold text-foreground mb-2">4.8 out of 5</div>
          <p className="text-lg text-muted-foreground">Based on 12,000+ reviews</p>
        </div>

        {/* Testimonial Card */}
        <Card className="p-8 lg:p-12 bg-gradient-card shadow-premium border border-white/50 rounded-2xl">
          <div className="space-y-6">
            {/* User Avatar */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                  alt="Happy customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
              "SwingHub completely changed how we connect with the lifestyle community. The app is beautifully designed, incredibly safe, and the events are amazing. We've met so many wonderful people and had unforgettable experiences. Highly recommend!"
            </blockquote>

            {/* User Info */}
            <div className="space-y-1">
              <div className="text-lg font-semibold text-foreground">Sarah & Mike</div>
              <div className="text-muted-foreground">Premium Members since 2023</div>
            </div>
          </div>
        </Card>

        {/* Additional Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">500K+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">15,000+</div>
            <div className="text-muted-foreground">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;