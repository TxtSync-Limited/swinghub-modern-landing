import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Calendar, Gift, MapPin, Clock, Code, Star, Coffee, Zap } from "lucide-react";

const Careers = () => {
  const volunteerBenefits = [
    {
      icon: Calendar,
      title: "Free Event Access",
      description: "Complimentary access to all SwingHub events, meetups, and exclusive community gatherings."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Help shape a platform that brings people together and builds meaningful connections."
    },
    {
      icon: Star,
      title: "Skill Development",
      description: "Gain valuable experience in tech, community management, event planning, and more."
    },
    {
      icon: Gift,
      title: "Exclusive Perks",
      description: "SwingHub merchandise, early access to features, and special recognition in our community."
    },
    {
      icon: Coffee,
      title: "Flexible Commitment",
      description: "Contribute on your schedule - whether it's a few hours a week or monthly event support."
    },
    {
      icon: Zap,
      title: "Direct Impact",
      description: "See your contributions make a real difference in the lives of our 51,000+ community members."
    }
  ];

  const volunteerRoles = [
    {
      title: "Community Moderator",
      description: "Help maintain a safe and welcoming environment by moderating discussions and supporting members.",
      commitment: "5-10 hours/week",
      remote: true
    },
    {
      title: "Event Coordinator",
      description: "Assist in planning and executing amazing community events across the UK and beyond.",
      commitment: "Flexible",
      remote: false
    },
    {
      title: "Content Creator",
      description: "Help create educational content, blog posts, and resources for our community.",
      commitment: "2-5 hours/week",
      remote: true
    },
    {
      title: "Social Media Assistant",
      description: "Support our social media presence and help grow our community reach.",
      commitment: "3-8 hours/week", 
      remote: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Join the SwingHub Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Be part of something special. Help us build the world's most trusted platform for open-minded adults 
              while gaining incredible experience and making lifelong connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Apply to Volunteer
              </Button>
              <Button variant="outline">
                View Paid Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Why Volunteer Section */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Why Volunteer with SwingHub?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join a passionate team that's revolutionizing how people connect. Enjoy amazing benefits while 
                making a real impact on thousands of lives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerBenefits.map((benefit, index) => (
                <Card key={index} className="text-center p-8 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Volunteer Opportunities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find the perfect role that matches your skills, interests, and availability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {volunteerRoles.map((role, index) => (
                <Card key={index} className="p-8 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {role.title}
                    </h3>
                    <div className="flex gap-2">
                      {role.remote && (
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                          Remote
                        </span>
                      )}
                      <span className="bg-secondary/10 text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
                        {role.commitment}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {role.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Paid Position */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Featured Paid Position
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to take your career to the next level? Check out our current paid opportunity.
              </p>
            </div>

            <Card className="p-8 bg-gradient-card shadow-card border border-white/50 rounded-2xl">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2 md:mb-0">
                      Senior Development Engineer
                    </h3>
                    <div className="flex gap-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        London, UK
                      </span>
                      <span className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Full-time
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Join our core engineering team to build cutting-edge features for our 51,000+ member community. 
                    You'll work on real-time systems, AI/ML integration, and scalable backend services that power 
                    meaningful connections for adults worldwide.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Skills</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• React/TypeScript</li>
                        <li>• Node.js/Python</li>
                        <li>• AWS/Cloud Services</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Benefits</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Competitive salary</li>
                        <li>• Equity package</li>
                        <li>• Flexible working</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Perks</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• All events free</li>
                        <li>• Premium SwingHub</li>
                        <li>• Learning budget</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-primary/5 border border-primary/20 rounded-2xl">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're looking to volunteer your time or join us full-time, we'd love to hear from you. 
                Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Start Your Application
                </Button>
                <Button variant="outline">
                  Questions? Get in Touch
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;