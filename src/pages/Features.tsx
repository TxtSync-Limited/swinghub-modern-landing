import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureGridSection from "@/components/FeatureGridSection";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Zap, Shield } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
            <Smartphone className="w-4 h-4 mr-2" />
            Features
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            Powerful Features for 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Modern Connections</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all the innovative features that make SwingHub the most trusted platform for the lifestyle community.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <FeatureGridSection />

      {/* Additional Features Overview */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Experience blazing fast performance with our optimized mobile app and web platform.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your privacy and security are our top priorities with end-to-end encryption and verified profiles.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Mobile Optimized</h3>
              <p className="text-muted-foreground">
                Seamlessly connect on any device with our responsive design and native mobile apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;