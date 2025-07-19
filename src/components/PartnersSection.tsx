import { Card } from "@/components/ui/card";
import partnerLogos from "@/assets/partner-logos.png";

const PartnersSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Powerful Partners. One Shared Mission.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with industry leaders to provide the best possible experience for our community
          </p>
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-card shadow-card border border-white/50 rounded-2xl">
          <div className="flex justify-center">
            <img 
              src={partnerLogos} 
              alt="Partner company logos"
              className="max-w-full h-auto opacity-60 hover:opacity-80 transition-smooth"
            />
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Partnering with the most trusted names in technology, security, and lifestyle brands
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;