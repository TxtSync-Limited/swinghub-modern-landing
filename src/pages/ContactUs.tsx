import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Lightbulb, Shield, Heart, ExternalLink } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you have questions, ideas, or just want to say hello, we're here to listen. 
              Your voice helps shape the SwingHub community.
            </p>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
              What Can We Help You With?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center p-6 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">New Features</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Got an amazing idea? We love hearing your suggestions!
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Feedback Portal
                </Button>
              </Card>

              <Card className="text-center p-6 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Safety & Support</h3>
                <p className="text-muted-foreground text-sm">
                  Need help with safety concerns or account issues? We're here 24/7.
                </p>
              </Card>

              <Card className="text-center p-6 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Want to get involved in events or partnerships? Let's chat!
                </p>
              </Card>

              <Card className="text-center p-6 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">General Inquiries</h3>
                <p className="text-muted-foreground text-sm">
                  Media, business partnerships, or just want to say hello?
                </p>
              </Card>
            </div>

            {/* Special callout for feature ideas */}
            <Card className="p-8 bg-primary/5 border border-primary/20 rounded-2xl mb-16">
              <div className="text-center">
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Have a Feature Idea?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We absolutely love hearing your ideas! While you can always reach out to us directly, 
                  we've created a dedicated feedback portal where you can share suggestions, vote on features, 
                  and see what's coming next.
                </p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit feedback.swinghub.com
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Ready to share your thoughts? We're here to listen and help make SwingHub even better.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 shadow-xl">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                      First Name
                    </label>
                    <Input 
                      placeholder="Enter your first name" 
                      className="h-12 bg-white/5 border-white/20 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:bg-white/10 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Enter your last name" 
                      className="h-12 bg-white/5 border-white/20 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:bg-white/10 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="h-12 bg-white/5 border-white/20 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:bg-white/10 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                    Topic
                  </label>
                  <select className="w-full h-12 px-4 bg-white/5 border border-white/20 rounded-xl text-foreground focus:bg-white/10 focus:border-primary/50 transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggc3Ryb2tlPSIjNjM2MzYzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtNiA4IDQgNCA0LTQiLz48L3N2Zz4=')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat">
                    <option>General Inquiry</option>
                    <option>Feature Suggestion</option>
                    <option>Safety & Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Media Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Share your thoughts, ideas, or questions with us..." 
                    rows={6}
                    className="bg-white/5 border-white/20 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:bg-white/10 focus:border-primary/50 transition-all duration-300 resize-none"
                  />
                </div>
                
                <div className="pt-4">
                  <Button className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Response Time Notice */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground/80 text-sm">
                We typically respond within 24 hours. For urgent safety matters, 
                please use our in-app reporting system for faster assistance.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;