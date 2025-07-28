import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl text-text-primary">
          Untitled UI
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-text-primary font-medium hover:underline">
            Features
          </a>
          <a href="#pricing" className="text-text-primary font-medium hover:underline">
            Pricing
          </a>
          <a href="#blog" className="text-text-primary font-medium hover:underline">
            Blog
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <a href="#signin" className="text-text-primary font-medium hover:underline">
            Sign in
          </a>
          <Button variant="outline" className="btn-secondary">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;