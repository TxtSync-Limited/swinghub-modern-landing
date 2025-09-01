import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CheckCircle, 
  Download,
  Users,
  Lock,
  Eye,
  FileText,
  Settings,
  UserCheck,
  Database,
  Globe,
  AlertTriangle,
  Mail,
  Clock,
  Trash2,
  Edit,
  Share,
  ArrowRight
} from "lucide-react";

const GDPRCompliance = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              GDPR Compliance
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Your Data Rights &
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Privacy Protection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understand how SwingHub protects your personal data, respects your privacy rights, 
              and ensures full compliance with GDPR and UK data protection regulations.
            </p>
          </div>
        </section>

        {/* What is GDPR */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Understanding GDPR
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The General Data Protection Regulation (GDPR) is a comprehensive data protection law 
                    that gives individuals control over their personal data and how it's processed by organizations.
                  </p>
                  <p>
                    As a UK-based company serving users across Europe and beyond, SwingHub is fully committed 
                    to GDPR compliance. This means we implement the highest standards of data protection, 
                    transparency, and user rights.
                  </p>
                  <p>
                    GDPR isn't just about compliance - it's about building trust. We believe your personal 
                    data belongs to you, and we're here to protect it while providing you with an exceptional experience.
                  </p>
                </div>
              </div>

              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Key GDPR Principles We Follow</h3>
                <div className="space-y-4">
                  {[
                    "Lawfulness, fairness, and transparency",
                    "Purpose limitation and data minimization",
                    "Accuracy and data quality",
                    "Storage limitation",
                    "Integrity and confidentiality",
                    "Accountability and governance"
                  ].map((principle, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{principle}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Your Rights Under GDPR */}
        <section className="px-6 lg:px-8 py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Your Data Rights
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                GDPR grants you significant rights over your personal data. Here's what you can do and how we help you exercise these rights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: "Right to Access",
                  description: "Request a copy of all personal data we hold about you, including how it's used and who it's shared with.",
                  action: "Download Your Data"
                },
                {
                  icon: Edit,
                  title: "Right to Rectification",
                  description: "Correct any inaccurate or incomplete personal data we hold about you.",
                  action: "Update Profile"
                },
                {
                  icon: Trash2,
                  title: "Right to Erasure",
                  description: "Request deletion of your personal data when it's no longer necessary or you withdraw consent.",
                  action: "Delete Account"
                },
                {
                  icon: Settings,
                  title: "Right to Restrict Processing",
                  description: "Limit how we process your data in certain circumstances while maintaining your account.",
                  action: "Manage Settings"
                },
                {
                  icon: Share,
                  title: "Right to Data Portability",
                  description: "Receive your data in a structured format or transfer it directly to another service.",
                  action: "Export Data"
                },
                {
                  icon: AlertTriangle,
                  title: "Right to Object",
                  description: "Object to processing of your data for marketing purposes or other legitimate interests.",
                  action: "Opt Out"
                }
              ].map((right, index) => (
                <Card key={index} className="p-6 bg-gradient-card border border-white/50 rounded-2xl hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <right.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{right.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{right.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {right.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Process Your Data */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Process Your Data
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Transparency is key to GDPR compliance. Here's exactly how we collect, use, and protect your personal data.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Data Collection",
                  icon: Database,
                  content: [
                    "Profile information you provide during registration",
                    "Communication data from messages and interactions",
                    "Usage data to improve our service and user experience",
                    "Location data (only with your explicit consent)",
                    "Payment information for premium services",
                    "Age verification documents (processed by trusted partners)"
                  ]
                },
                {
                  title: "Legal Basis for Processing",
                  icon: FileText,
                  content: [
                    "Legitimate interests: Providing and improving our service",
                    "Contract performance: Delivering services you've requested",
                    "Consent: Marketing communications and location services",
                    "Legal obligations: Age verification and safety compliance",
                    "Vital interests: Safety and security of our users"
                  ]
                },
                {
                  title: "Data Sharing",
                  icon: Share,
                  content: [
                    "We never sell your personal data to third parties",
                    "Trusted service providers help us operate our platform",
                    "Law enforcement (only when legally required)",
                    "Safety partners for verification and protection services",
                    "Analytics providers (with anonymized data only)"
                  ]
                },
                {
                  title: "Data Security",
                  icon: Lock,
                  content: [
                    "End-to-end encryption for all sensitive communications",
                    "Regular security audits and penetration testing",
                    "Multi-factor authentication and access controls",
                    "Secure data centers with physical security measures",
                    "Staff training on data protection and security practices"
                  ]
                }
              ].map((section, index) => (
                <Card key={index} className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="px-6 lg:px-8 py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Data Retention & Deletion
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We only keep your data as long as necessary and provide clear guidelines on retention periods.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Retention Periods</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { type: "Active account data", period: "While account is active" },
                    { type: "Inactive accounts", period: "2 years, then deleted" },
                    { type: "Messages & communications", period: "7 years or until deletion requested" },
                    { type: "Payment records", period: "7 years (legal requirement)" },
                    { type: "Age verification", period: "Deleted immediately after verification" },
                    { type: "Support tickets", period: "3 years after resolution" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-muted-foreground text-sm">{item.type}</span>
                      <span className="text-primary font-semibold text-sm">{item.period}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Trash2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Account Deletion</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    When you delete your account, we immediately remove your profile and personal information from our active systems.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Immediate profile deletion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Data anonymization within 30 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Backup deletion within 90 days</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Request Account Deletion
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Protection Officer */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Data Protection Officer
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    SwingHub has appointed a dedicated Data Protection Officer (DPO) to ensure ongoing 
                    compliance with GDPR and to serve as your point of contact for all data protection matters.
                  </p>
                  <p>
                    Our DPO oversees our data protection policies, conducts regular compliance audits, 
                    and ensures that your rights are respected and protected at all times.
                  </p>
                  <p>
                    You can contact our DPO directly with any questions about how your data is processed, 
                    to exercise your rights, or to raise any concerns about data protection.
                  </p>
                </div>
              </div>

              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Our DPO</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">dpo@swinghub.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Response Time</p>
                      <p className="text-muted-foreground text-sm">Within 72 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Languages</p>
                      <p className="text-muted-foreground text-sm">English, French, German, Spanish</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact DPO
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="px-6 lg:px-8 py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Manage Your Data
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Take control of your personal data with these quick actions. Exercise your GDPR rights easily and securely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Download,
                  title: "Download Your Data",
                  description: "Get a complete copy of your personal data in a portable format"
                },
                {
                  icon: Settings,
                  title: "Privacy Settings",
                  description: "Manage your privacy preferences and consent settings"
                },
                {
                  icon: Edit,
                  title: "Update Information",
                  description: "Correct or update your personal information"
                },
                {
                  icon: Mail,
                  title: "Contact Support",
                  description: "Get help with data protection questions or concerns"
                }
              ].map((action, index) => (
                <Card key={index} className="p-6 bg-gradient-card border border-white/50 rounded-2xl hover-lift text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <action.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{action.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{action.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Access
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 bg-gradient-card border border-white/50 rounded-2xl text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Questions About Your Data?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're committed to transparency and helping you understand your rights. 
                Our support team is here to answer any questions about data protection or GDPR compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Data Protection Team
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30">
                  <FileText className="w-5 h-5 mr-2" />
                  View Full Privacy Policy
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

export default GDPRCompliance;