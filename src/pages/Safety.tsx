import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, UserCheck, Lock, Eye, AlertTriangle, CheckCircle, Camera, FileText, Clock, Users } from "lucide-react";

const Safety = () => {
  const verificationSteps = [
    {
      step: "1",
      icon: Camera,
      title: "Real-Time Photo Verification",
      description: "Take a real-time photo through our app. Our AI analyzes for age detection, gender confirmation, and authenticity using AWS, Google, and Azure services."
    },
    {
      step: "2", 
      icon: FileText,
      title: "Industry-Leading ID Checks",
      description: "Partnership with Veriff for comprehensive identity verification, including document authenticity, biometric matching, and fraud detection."
    },
    {
      step: "3",
      icon: Shield,
      title: "Criminal Background Screening",
      description: "Cross-reference with Offenders.org.uk database to identify individuals with sexual offense history, ensuring community safety."
    },
    {
      step: "4",
      icon: CheckCircle,
      title: "Manual Review Process",
      description: "Our safety team manually reviews flagged profiles and conducts additional checks for enhanced verification when needed."
    }
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "24/7 Safety Monitoring",
      description: "Continuous oversight with real-time monitoring of 600M+ monthly API requests to detect suspicious activity."
    },
    {
      icon: Lock,
      title: "Blackout Technology",
      description: "Anti-screenshot technology that protects your private content from being captured or shared without permission."
    },
    {
      icon: UserCheck,
      title: "Verified Members Only",
      description: "Every single one of our 51,000+ members has been through our comprehensive verification process."
    },
    {
      icon: Eye,
      title: "Proactive Detection",
      description: "Advanced AI systems detect fake profiles, manipulated images, and fraudulent behavior before they impact the community."
    },
    {
      icon: AlertTriangle,
      title: "Instant Reporting",
      description: "Easy-to-use reporting system with our dedicated team investigating and taking action on all reports quickly."
    },
    {
      icon: Clock,
      title: "Real-Time Response",
      description: "Immediate action on safety concerns with automated systems and human oversight working around the clock."
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
              Your Safety is Our Priority
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We understand that trust is earned through transparency. This page explains exactly how SwingHub protects you and our community through comprehensive security measures, verification processes, and ongoing monitoring.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">51,000+</div>
                <div className="text-muted-foreground">Verified Users</div>
                <div className="text-sm text-muted-foreground">Every member verified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Safety Monitoring</div>
                <div className="text-sm text-muted-foreground">Continuous oversight</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">600M+</div>
                <div className="text-muted-foreground">API Requests Monitored</div>
                <div className="text-sm text-muted-foreground">Monthly security checks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                How We Verify New Members
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every new member goes through a world-class, multi-step verification process designed to ensure only genuine, trustworthy individuals join our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {verificationSteps.map((step, index) => (
                <Card key={index} className="p-8 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features Grid */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Comprehensive Safety Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Multiple layers of protection working together to create the safest possible environment for our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safetyFeatures.map((feature, index) => (
                <Card key={index} className="text-center p-8 bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-card border border-white/50 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Powered by Industry Leaders
                </h2>
                <p className="text-muted-foreground">
                  We partner with the world's most trusted security and verification providers
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">Veriff</h3>
                  <p className="text-sm text-muted-foreground">Identity Verification</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">Multi-Cloud AI</h3>
                  <p className="text-sm text-muted-foreground">AWS, Google, Azure</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <UserCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">Offenders.org.uk</h3>
                  <p className="text-sm text-muted-foreground">Background Screening</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-primary/5 border border-primary/20 rounded-2xl">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Join Our Trusted Community
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the peace of mind that comes with being part of a thoroughly verified, safety-first community. 
                Our comprehensive protection measures ensure you can focus on what matters most - meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Download SwingHub
                </Button>
                <Button variant="outline">
                  Learn More About Verification
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

export default Safety;