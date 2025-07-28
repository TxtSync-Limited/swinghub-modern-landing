import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import swingHubLogo from "@/assets/swinghub-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full py-4 px-6 lg:px-8 bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={swingHubLogo} 
            alt="SwingHub" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#explore" className="text-foreground hover:text-primary transition-smooth font-medium">
            Explore
          </a>
          <a href="#events" className="text-foreground hover:text-primary transition-smooth font-medium">
            Events
          </a>
          <a href="#hub" className="text-foreground hover:text-primary transition-smooth font-medium">
            Hub
          </a>
          <a href="#reviews" className="text-foreground hover:text-primary transition-smooth font-medium">
            Reviews
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-smooth font-medium">
            Features
          </a>
        </nav>

        {/* Desktop CTA */}
        <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg shadow-card hover-glow">
          Get the App
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-smooth"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-border bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 pt-4">
            <a href="#explore" className="text-foreground hover:text-primary transition-smooth font-medium px-2">
              Explore
            </a>
            <a href="#events" className="text-foreground hover:text-primary transition-smooth font-medium px-2">
              Events
            </a>
            <a href="#hub" className="text-foreground hover:text-primary transition-smooth font-medium px-2">
              Hub
            </a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-smooth font-medium px-2">
              Reviews
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-smooth font-medium px-2">
              Features
            </a>
            <Button className="mx-2 mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg shadow-card">
              Get the App
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;