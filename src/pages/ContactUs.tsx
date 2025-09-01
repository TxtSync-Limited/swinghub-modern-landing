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
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl group">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  We're excited to hear from you and will get back to you soon!
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="transition-smooth focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="transition-smooth focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="transition-smooth focus:ring-2 focus:ring-primary/20" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What's this about?
                  </label>
                  <select className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground transition-smooth focus:ring-2 focus:ring-primary/20 focus:border-primary/50">
                    <option>General Inquiry</option>
                    <option>Feature Suggestion</option>
                    <option>Safety & Support</option>
                    <option>Partnership</option>
                    <option>Media Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea 
                    placeholder="Tell us what's on your mind. We're all ears!" 
                    rows={6}
                    className="transition-smooth focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 transition-smooth hover:shadow-lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>

        {/* Response Time */}
        <section className="px-6 lg:px-8 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground">
              We typically respond within 24 hours. For urgent safety matters, 
              please use our in-app reporting system for faster assistance.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;