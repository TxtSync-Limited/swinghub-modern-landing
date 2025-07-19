import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 lg:px-8 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Copyright */}
          <div className="space-y-4">
            <div className="font-bold text-2xl text-primary">SwingHub</div>
            <p className="text-muted-foreground text-sm">
              © 2024 SwingHub. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Explore</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Features
              </a>
              <a href="#events" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Events
              </a>
              <a href="#hub" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Education Hub
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Reviews
              </a>
            </nav>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Help Center
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Safety Guidelines
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* App Downloads */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Download</h4>
            <div className="flex flex-col gap-3">
              <Button size="sm" className="justify-start h-auto p-3 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </Button>
              <Button variant="outline" size="sm" className="justify-start h-auto p-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Get it on</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            SwingHub is designed for adults 18+ and committed to creating a safe, respectful community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;