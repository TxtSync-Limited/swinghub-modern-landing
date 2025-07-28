import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube,
  Shield,
  FileText,
  HelpCircle,
  MessageCircle,
  Users,
  Calendar,
  Star
} from "lucide-react";
import swinghubLogo from "@/assets/swinghub-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Education Hub", href: "#education" },
    { name: "Events", href: "#events" },
    { name: "Safety", href: "#safety" },
    { name: "Pricing", href: "#pricing" },
    { name: "Premium Features", href: "#premium" }
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Story", href: "#story" },
    { name: "Careers", href: "#careers" },
    { name: "Press Kit", href: "#press" },
    { name: "Blog", href: "#blog" },
    { name: "Partners", href: "#partners" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "#help", icon: HelpCircle },
    { name: "Live Chat", href: "#chat", icon: MessageCircle },
    { name: "Community", href: "#community", icon: Users },
    { name: "Contact Us", href: "#contact", icon: Mail },
    { name: "Report Issue", href: "#report", icon: Shield }
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Content Policy", href: "#content" },
    { name: "GDPR Compliance", href: "#gdpr" },
    { name: "Age Verification", href: "#age" }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#twitter", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "#instagram", color: "hover:text-pink-400" },
    { name: "Facebook", icon: Facebook, href: "#facebook", color: "hover:text-blue-600" },
    { name: "YouTube", icon: Youtube, href: "#youtube", color: "hover:text-red-500" }
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-background via-background to-accent/10 border-t border-white/10">
      {/* Newsletter Section */}
      <div className="w-full py-12 px-6 lg:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-card shadow-premium border border-white/20 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Stay in the Loop
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest updates on new features, events, and lifestyle tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </Card>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img src={swinghubLogo} alt="SwingHub" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-foreground">SwingHub</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The UK's #1 lifestyle app for modern singles and couples. Connect safely, explore confidently, and build meaningful relationships in a trusted community.
              </p>

              {/* App Store Buttons */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">Download the App</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex items-center gap-3 border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 p-3 h-auto">
                    <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                      <Download className="w-5 h-5 text-background" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Download on the</div>
                      <div className="text-sm font-semibold text-foreground">App Store</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="flex items-center gap-3 border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 p-3 h-auto">
                    <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                      <Download className="w-5 h-5 text-background" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Get it on</div>
                      <div className="text-sm font-semibold text-foreground">Google Play</div>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified Safe
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                  <Star className="w-3 h-3 mr-1" />
                  4.8/5 Rating
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-500/20">
                  <Users className="w-3 h-3 mr-1" />
                  50K+ Members
                </Badge>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors story-link"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors story-link"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors story-link"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email Support</p>
                  <p className="text-sm text-muted-foreground">support@swinghub.co.uk</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">UK Support Line</p>
                  <p className="text-sm text-muted-foreground">+44 (0) 20 7946 0958</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">UK Headquarters</p>
                  <p className="text-sm text-muted-foreground">London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full py-6 px-6 lg:px-8 border-t border-white/10 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} SwingHub Ltd. All rights reserved. | Designed for adults 18+
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="ml-4 text-muted-foreground/50">•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;