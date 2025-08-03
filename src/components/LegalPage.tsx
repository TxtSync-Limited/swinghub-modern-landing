import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FileText, Calendar, Mail } from "lucide-react";

interface LegalPageProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  badgeText: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

const LegalPage = ({ 
  title, 
  subtitle, 
  lastUpdated, 
  badgeText, 
  badgeIcon: BadgeIcon = FileText, 
  children 
}: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium animate-fade-in">
            <BadgeIcon className="w-4 h-4 mr-2" />
            {badgeText}
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {subtitle}
            </p>
          )}
          <div className="flex items-center justify-center gap-2 text-muted-foreground animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="relative bg-gradient-card backdrop-blur-md border border-white/20 p-8 lg:p-12 rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-3xl"></div>
            
            <div className="relative prose prose-lg max-w-none">
              <div className="legal-content text-foreground">
                {children}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="relative bg-gradient-card backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl"></div>
            
            <div className="relative text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
                <Mail className="w-4 h-4" />
                <span className="font-medium">Questions?</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground">
                Need Help or Have Questions?
              </h3>
              
              <p className="text-muted-foreground">
                If you have any questions about this document or need clarification, please don't hesitate to contact us.
              </p>
              
              <a 
                href="mailto:legal@swinghub.com" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                legal@swinghub.com
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage;