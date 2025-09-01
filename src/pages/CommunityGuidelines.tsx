import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Shield, 
  Heart, 
  Camera, 
  MessageCircle, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  ArrowRight
} from "lucide-react";

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Community Standards
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Community 
              <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"> Guidelines</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating a safe, respectful, and welcoming space for everyone in the SwingHub community
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Welcome to SwingHub</h2>
                  <p className="text-muted-foreground text-lg">
                    Our community thrives on mutual respect, consent, and authentic connections. These guidelines help ensure everyone feels safe, welcomed, and free to be their authentic selves.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Photo Guidelines */}
        <section className="px-6 lg:px-8 py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Camera className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Photo Guidelines</h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Your photos are the first impression you make in our community. Here's how to make them count.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 bg-gradient-card border border-green-200 dark:border-green-800 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-300">Profile Photos Should Be</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Clear photos showing your face",
                    "Recent and authentic pictures of yourself", 
                    "Appropriate for a diverse audience",
                    "Tasteful and respectful"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-8 bg-gradient-card border border-red-200 dark:border-red-800 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-300">Not Allowed</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Nude or explicit content",
                    "Stock images or photos of others",
                    "Images with weapons or hate symbols",
                    "Blank or faceless photos",
                    "Photos featuring minors"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-amber-50/50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Info className="w-5 h-5 text-amber-600" />
                <h4 className="font-bold text-amber-800 dark:text-amber-200">Private Photo Sharing</h4>
              </div>
              <p className="text-amber-700 dark:text-amber-300">
                When sharing private photos in chats, always ensure you have explicit consent from the recipient. Unsolicited explicit images are strictly prohibited.
              </p>
            </Card>
          </div>
        </section>

        {/* Communication Standards */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Communication Standards</h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Respectful communication is the foundation of our community. Every interaction should honor consent and respect.
              </p>
            </div>
            
            <div className="grid gap-8">
              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Respectful Communication</h3>
                <p className="text-muted-foreground mb-6">
                  SwingHub is built on respect and consent. Every interaction should honor these core values.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Always obtain consent before sending explicit content",
                    "Respect boundaries when they're communicated",
                    "Be patient and understanding with responses",
                    "Keep conversations appropriate until mutual interest is established"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-red-50/50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-6">Zero Tolerance Behaviors</h3>
                <p className="text-red-700 dark:text-red-300 mb-6">
                  These behaviors will result in immediate account suspension with no warnings.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Harassment or persistent unwanted contact",
                    "Hate speech or discrimination of any kind",
                    "Sending explicit messages without consent",
                    "Demanding personal information or photos",
                    "Mass messaging to solicit off-platform contact"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 dark:text-red-300">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety & Security */}
        <section className="px-6 lg:px-8 py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Safety & Security</h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Your safety and privacy are our top priorities. Here's how to protect yourself while enjoying our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Protect Your Privacy</h3>
                <div className="space-y-4">
                  {[
                    "Never share personal documents (ID, passport, etc.)",
                    "Keep financial information private",
                    "Don't include contact details in your profile",
                    "Report suspicious activity immediately"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Age Verification</h3>
                <p className="text-muted-foreground mb-4">
                  SwingHub is strictly for adults 18 and over. We take age verification seriously to protect our community.
                </p>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 mb-4">
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    If you encounter any user who appears to be underage, please report them immediately.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Learn About Age Verification
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Prohibited Activities</h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                These activities are not permitted on SwingHub and will result in account suspension or termination.
              </p>
            </div>
            
            <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Commercial Activities
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Solicitation for payment or services",
                      "Promoting escort services", 
                      "Excessive OnlyFans promotion",
                      "Drug sales or illegal activities"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Safety Violations
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Promoting anonymous services",
                      "Sharing others' personal information",
                      "Creating fake or multiple accounts", 
                      "Impersonating other users"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Enforcement */}
        <section className="px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Enforcement & Reporting</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-foreground mb-4">How to Report</h3>
                  <p className="text-muted-foreground mb-4">
                    Use the report button on any profile or message that violates these guidelines. Our moderation team reviews all reports promptly.
                  </p>
                  <Button variant="outline">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Learn How to Report
                  </Button>
                </div>
                
                <div>
                  <h3 className="font-bold text-foreground mb-4">Consequences</h3>
                  <p className="text-muted-foreground">
                    Violations may result in warnings, temporary suspensions, or permanent bans depending on severity. Serious violations like harassment, hate speech, or illegal activities result in immediate permanent bans.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Closing Note */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Thank You for Making SwingHub Safe</h3>
              <p className="text-muted-foreground mb-6">
                By following these guidelines, you help create a positive experience for everyone in our community. Together, we can maintain SwingHub as a safe, respectful space for authentic connections.
              </p>
              <Button size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Join Our Community
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityGuidelines;