import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Lock,
  Eye,
  FileText,
  Clock,
  UserCheck,
  Zap,
  Globe,
  Award,
  ArrowRight
} from "lucide-react";

const AgeVerification = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Age Verification
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Protecting Our Community Through
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Age Verification</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our commitment to safety through the UK's Online Safety Act and how we verify 
              that all our members are adults who can participate responsibly in our community.
            </p>
          </div>
        </section>

        {/* Why Age Verification Matters */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Age Verification is Essential
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Age verification isn't just a legal requirement - it's fundamental to creating a safe, 
                trustworthy environment where adults can connect with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Legal Compliance",
                  description: "We comply with the UK's Online Safety Act and international regulations to ensure our platform meets the highest legal standards."
                },
                {
                  icon: Users,
                  title: "Community Safety",
                  description: "By verifying ages, we protect minors from inappropriate content and ensure all members can participate safely."
                },
                {
                  icon: Lock,
                  title: "Trust & Confidence",
                  description: "Age verification builds trust within our community, knowing everyone has been properly verified as an adult."
                },
                {
                  icon: Eye,
                  title: "Content Protection",
                  description: "Adult-only verification allows us to provide age-appropriate content and experiences without restrictions."
                },
                {
                  icon: UserCheck,
                  title: "Responsible Community",
                  description: "Verified adults can make informed decisions about their participation in lifestyle experiences."
                },
                {
                  icon: Globe,
                  title: "Global Standards",
                  description: "We follow international best practices for age verification, ensuring compliance across all jurisdictions."
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 bg-gradient-card border border-white/50 rounded-2xl hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Online Safety Act Section */}
        <section className="px-6 lg:px-8 py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  UK Online Safety Act
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Understanding the Online Safety Act
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The UK's Online Safety Act represents groundbreaking legislation designed to make the internet safer 
                    for everyone, particularly protecting children from harmful content while preserving freedom of expression for adults.
                  </p>
                  <p>
                    As an adult-oriented platform, SwingHub is committed to full compliance with this legislation, 
                    implementing robust age verification systems that protect minors while ensuring adults can access 
                    age-appropriate content safely and responsibly.
                  </p>
                  <p>
                    This act requires platforms like ours to implement effective systems to prevent children from 
                    accessing content that could be harmful to their development, while maintaining privacy and 
                    security for all users.
                  </p>
                </div>
              </div>

              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Key Requirements We Meet</h3>
                <div className="space-y-4">
                  {[
                    "Robust age verification for all users",
                    "Protection of children from harmful content",
                    "Transparent policies and procedures",
                    "Regular compliance audits and reviews",
                    "User privacy and data protection",
                    "Clear reporting mechanisms"
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Verification Process */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Age Verification Technology
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We use cutting-edge technology and trusted partners to ensure accurate, secure age verification 
                while protecting your privacy and personal information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Veriff Integration</h3>
                    <p className="text-muted-foreground text-sm">Industry-leading verification technology</p>
                  </div>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We partner with Veriff, a world-renowned identity verification provider trusted by governments 
                    and major corporations worldwide.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Real-time document verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Biometric face matching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced fraud detection</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Quick & Secure Process</h3>
                    <p className="text-muted-foreground text-sm">Verification in under 5 minutes</p>
                  </div>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Our streamlined verification process is designed to be quick and user-friendly while 
                    maintaining the highest security standards.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Mobile-optimized experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multiple document types accepted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Instant verification results</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Verification Steps */}
            <Card className="p-8 bg-gradient-card border border-white/50 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">How Verification Works</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Document Upload", description: "Upload a government-issued ID document" },
                  { step: "2", title: "Selfie Capture", description: "Take a live selfie for identity matching" },
                  { step: "3", title: "AI Analysis", description: "Our AI verifies your document and identity" },
                  { step: "4", title: "Instant Approval", description: "Get verified and start exploring safely" }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="px-6 lg:px-8 py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Your Privacy is Protected
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We understand that privacy is paramount. Our age verification process is designed to verify your age 
                while protecting your personal information every step of the way.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "Data Encryption",
                  description: "All verification data is encrypted using military-grade security protocols during transmission and storage."
                },
                {
                  icon: Eye,
                  title: "Limited Data Collection",
                  description: "We only collect the minimum information necessary for age verification - nothing more."
                },
                {
                  icon: Shield,
                  title: "Secure Deletion",
                  description: "Verification documents are securely deleted after the verification process is complete."
                },
                {
                  icon: Award,
                  title: "GDPR Compliant",
                  description: "Our entire verification process fully complies with GDPR and UK data protection regulations."
                },
                {
                  icon: UserCheck,
                  title: "No Data Sharing",
                  description: "Your verification data is never shared with third parties beyond our trusted verification partner."
                },
                {
                  icon: FileText,
                  title: "Transparent Process",
                  description: "We provide clear information about what data we collect and how it's used throughout the process."
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 bg-gradient-card border border-white/50 rounded-2xl hover-lift text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Why do I need to verify my age?",
                  answer: "Age verification is required by law under the UK's Online Safety Act for platforms with adult content. It ensures our community is composed of consenting adults who can participate responsibly."
                },
                {
                  question: "What documents can I use for verification?",
                  answer: "We accept government-issued photo ID including passports, driving licenses, and national ID cards from most countries. The document must be current and clearly show your date of birth."
                },
                {
                  question: "How long does verification take?",
                  answer: "Most verifications are completed instantly. In rare cases where manual review is needed, it may take up to 24 hours. You'll be notified immediately when your verification is complete."
                },
                {
                  question: "Is my personal information safe?",
                  answer: "Absolutely. We use bank-level encryption and work with Veriff, a trusted verification provider. Your documents are processed securely and deleted after verification is complete."
                },
                {
                  question: "What if my verification fails?",
                  answer: "If verification fails, you can try again with a different document or contact our support team for assistance. Common issues include blurry photos or expired documents."
                },
                {
                  question: "Do I need to verify again if I change devices?",
                  answer: "No, verification is tied to your account, not your device. Once verified, you can access SwingHub from any device using your login credentials."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 bg-gradient-card border border-white/50 rounded-2xl">
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
                Ready to Join Our Verified Community?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Complete your age verification today and gain access to the UK's most trusted lifestyle community. 
                The process is quick, secure, and designed with your privacy in mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold">
                  <UserCheck className="w-5 h-5 mr-2" />
                  Start Verification
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Contact Support
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

export default AgeVerification;