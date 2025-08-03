import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Handshake, 
  Shield, 
  Users, 
  TrendingUp, 
  Globe, 
  Award, 
  CheckCircle,
  Star,
  Building,
  Zap,
  Lock,
  Heart,
  Target,
  Rocket,
  Mail,
  ArrowRight,
  Cloud,
  Server,
  CreditCard,
  Verified
} from "lucide-react";
import logoAws from "@/assets/logo-aws.png";
import logoGoogleCloud from "@/assets/logo-google-cloud.png";
import logoLovehoney from "@/assets/logo-lovehoney.png";
import logoOffenders from "@/assets/logo-offenders.png";
import logoVeriff from "@/assets/logo-veriff.png";
import logoAllguard from "@/assets/logo-allguard.png";

const currentPartners = [
  {
    name: "Amazon Web Services",
    logo: logoAws,
    category: "Cloud Infrastructure",
    description: "Powering our scalable, secure cloud infrastructure"
  },
  {
    name: "Google Cloud",
    logo: logoGoogleCloud,
    category: "Cloud Services",
    description: "Advanced analytics and machine learning capabilities"
  },
  {
    name: "LoveHoney",
    logo: logoLovehoney,
    category: "Lifestyle Brand",
    description: "Trusted lifestyle brand partnership for community benefits"
  },
  {
    name: "Offenders.org.uk",
    logo: logoOffenders,
    category: "Safety Verification",
    description: "Background verification services for enhanced safety"
  },
  {
    name: "Veriff",
    logo: logoVeriff,
    category: "Identity Verification",
    description: "Advanced identity verification and fraud prevention"
  },
  {
    name: "AllGuard",
    logo: logoAllguard,
    category: "Security Solutions",
    description: "Comprehensive security and protection services"
  }
];

const partnershipTypes = [
  {
    icon: Cloud,
    title: "Technology Partners",
    description: "Cloud providers, security services, and tech infrastructure partners",
    benefits: ["Enhanced platform performance", "Advanced security features", "Scalable infrastructure"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "Background checks, identity verification, and safety service providers",
    benefits: ["Verified member profiles", "Enhanced safety measures", "Fraud prevention"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Heart,
    title: "Lifestyle Brands",
    description: "Trusted lifestyle brands offering exclusive benefits to our community",
    benefits: ["Member discounts", "Exclusive products", "Special events"],
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Building,
    title: "Venue Partners",
    description: "Clubs, resorts, and event venues for community gatherings",
    benefits: ["Exclusive venue access", "Member rates", "Private events"],
    color: "from-green-500 to-green-600"
  }
];

const partnerBenefits = [
  {
    icon: Users,
    title: "Access to 50,000+ Members",
    description: "Connect with our engaged, verified community of lifestyle enthusiasts"
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Expand your reach and grow your business through our platform"
  },
  {
    icon: Award,
    title: "Brand Recognition",
    description: "Gain visibility and credibility within the lifestyle community"
  },
  {
    icon: Handshake,
    title: "Mutual Support",
    description: "Collaborative partnerships that benefit both parties and our members"
  },
  {
    icon: Target,
    title: "Targeted Marketing",
    description: "Reach your ideal audience through our targeted marketing opportunities"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expand internationally with our growing global community"
  }
];

const partnershipStats = [
  { icon: Building, number: "25+", label: "Active Partners" },
  { icon: Users, number: "50K+", label: "Members Reached" },
  { icon: Globe, number: "25+", label: "Countries" },
  { icon: TrendingUp, number: "300%", label: "Partner Growth" }
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium animate-fade-in">
            <Handshake className="w-4 h-4 mr-2" />
            Partnership Network
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>
            Building the Future 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            We partner with the world's leading companies to deliver exceptional experiences, enhanced safety, 
            and innovative solutions for our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl">
              <Handshake className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-foreground bg-background/80 hover:bg-accent/80 backdrop-blur-sm shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Partnerships
            </Button>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Partnership Stats */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipStats.map((stat, index) => (
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
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
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

      {/* Current Partners */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Star className="w-4 h-4 mr-2" />
              Trusted Partners
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Industry-Leading Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with the best companies in the world to ensure our platform remains secure, reliable, and innovative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <Card 
                key={index} 
                className="group p-8 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift transition-all duration-300 hover:border-primary/30 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-center h-20">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
                      {partner.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore different ways to collaborate with SwingHub and provide value to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card 
                key={index} 
                className="group relative p-8 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift transition-all duration-300 hover:border-primary/30 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Award className="w-4 h-4 mr-2" />
              Partner Benefits
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Why Partner with SwingHub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our partnership network and unlock exclusive benefits for your business and our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group p-6 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              How to Become a Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our partnership process is designed to ensure mutual success and value for our community.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Contact", description: "Reach out to our partnerships team with your proposal" },
              { step: "2", title: "Evaluation", description: "We assess alignment with our values and community needs" },
              { step: "3", title: "Proposal", description: "Develop a customized partnership proposal and agreement" },
              { step: "4", title: "Launch", description: "Go live with full support from our team" }
            ].map((step, index) => (
              <Card 
                key={index} 
                className="group p-6 text-center bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto shadow-xl text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
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
                Ready to Partner with Us?
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Join our growing network of partners and help us build the future of lifestyle connections. 
                Together, we can create exceptional experiences for our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Partnership Discussion
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-primary/30 text-foreground bg-background/80 hover:bg-accent/80 backdrop-blur-sm shadow-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  partnerships@swinghub.com
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

export default Partners;