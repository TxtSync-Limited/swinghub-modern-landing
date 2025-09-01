import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  Shield, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  CheckCircle,
  Star,
  Calendar,
  TrendingUp,
  UserCheck,
  Lock,
  Zap,
  MessageSquare,
  Building
} from "lucide-react";
import timelineBrainstorm from "@/assets/timeline-brainstorm.jpg";
import timelineFrustrated from "@/assets/timeline-frustrated.jpg";
import timelineLaunch from "@/assets/timeline-launch.jpg";
import timelineSuccess from "@/assets/timeline-success.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety and privacy are our absolute top priorities. Every feature is designed with security in mind.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Heart,
    title: "Authentic Connections",
    description: "We believe in genuine, meaningful connections built on trust, respect, and shared values.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description: "Our platform welcomes everyone regardless of orientation, relationship style, or experience level.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: CheckCircle,
    title: "Transparency",
    description: "We're open about our processes, policies, and commitment to creating a trustworthy environment.",
    color: "from-green-500 to-green-600"
  }
];

const milestones = [
  {
    year: "2019",
    title: "The Brainstorm",
    description: "Founders recognized the need for a safer, more authentic lifestyle platform",
    image: timelineBrainstorm,
    stats: "Initial concept development"
  },
  {
    year: "2020",
    title: "Market Research",
    description: "Extensive research revealed major gaps in existing platforms' safety and user experience",
    image: timelineFrustrated,
    stats: "500+ community interviews"
  },
  {
    year: "2021",
    title: "Platform Launch",
    description: "SwingHub officially launched with revolutionary safety features and verification systems",
    image: timelineLaunch,
    stats: "Beta launch with 1,000 users"
  },
  {
    year: "2024",
    title: "Community Success",
    description: "Growing community of verified members creating authentic connections worldwide",
    image: timelineSuccess,
    stats: "50,000+ verified members"
  }
];

const stats = [
  { icon: Users, number: "50,000+", label: "Verified Members" },
  { icon: CheckCircle, number: "99.8%", label: "Profile Verification Rate" },
  { icon: Globe, number: "25+", label: "Countries Worldwide" },
  { icon: Calendar, number: "1,000+", label: "Events Monthly" },
  { icon: Star, number: "4.9/5", label: "User Satisfaction" },
  { icon: Shield, number: "24/7", label: "Safety Monitoring" }
];

const teamMembers = [
  {
    name: "Gage Mitchell",
    role: "Co-Founder & CEO",
    description: "Leading the vision for safer lifestyle connections",
    expertise: "Community Building"
  },
  {
    name: "Olivia Chen",
    role: "Co-Founder & CPO",
    description: "Designing user experiences that prioritize safety and authenticity",
    expertise: "Product Strategy"
  },
  {
    name: "Sarah Johnson",
    role: "Head of Safety",
    description: "Ensuring every member feels secure and protected",
    expertise: "Safety & Security"
  },
  {
    name: "Marcus Thompson",
    role: "Head of Engineering",
    description: "Building the technology that powers authentic connections",
    expertise: "Technical Architecture"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium animate-fade-in">
            <Building className="w-4 h-4 mr-2" />
            About SwingHub
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>
            Redefining 
            <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"> Lifestyle Connections</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            We're on a mission to create the safest, most authentic platform for the lifestyle community. 
            Built by the community, for the community, with safety and genuine connections at our core.
          </p>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Mission Statement */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="relative bg-gradient-card backdrop-blur-md border border-white/20 p-8 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-3xl"></div>
            
            <div className="relative text-center space-y-8">
              <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full border border-primary/20">
                <Target className="w-6 h-6" />
                <span className="font-semibold text-lg">Our Mission</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                "To create a safe, inclusive, and authentic space where the lifestyle community can connect, learn, and grow together."
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
                We believe that everyone deserves a platform where they can be their authentic selves, connect with like-minded individuals, 
                and explore the lifestyle safely. Our commitment goes beyond just connecting people – we're building a community founded on 
                trust, respect, and genuine human connection.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Impact by the Numbers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real metrics that demonstrate our commitment to building a thriving, safe community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="group p-8 text-center bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Award className="w-4 h-4 mr-2" />
              Our Core Values
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group relative p-8 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift transition-all duration-300 hover:border-primary/30 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial concept to thriving community – here's how SwingHub came to life.
            </p>
          </div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 animate-fade-in ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/90 text-primary-foreground px-4 py-2 text-lg font-bold">
                      {milestone.year}
                    </Badge>
                    <div className="h-px bg-gradient-to-r from-primary to-primary-glow flex-1"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {milestone.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-semibold">
                      <TrendingUp className="w-5 h-5" />
                      {milestone.stats}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <Card className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift group">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      className="w-full h-80 object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Users className="w-4 h-4 mr-2" />
              Meet the Team
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              The People Behind SwingHub
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate team dedicated to creating the safest and most authentic lifestyle platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="group p-6 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <UserCheck className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
                      {member.expertise}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="relative bg-gradient-card backdrop-blur-md border border-white/20 p-8 lg:p-12 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl"></div>
            
            <div className="relative text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Join Our Community?
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Experience the difference of a platform built with safety, authenticity, and genuine connections in mind. 
                Join thousands of verified members who trust SwingHub for their lifestyle journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl">
                  <Users className="w-5 h-5 mr-2" />
                  Join SwingHub Today
                </Button>
                
                <Button variant="outline" size="lg" className="border-primary/30 text-foreground bg-background/80 hover:bg-accent/80 backdrop-blur-sm shadow-lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-primary-glow/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;