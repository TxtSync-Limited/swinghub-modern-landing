import { Card } from "@/components/ui/card";
import awsLogo from "@/assets/logo-aws.png";
import googleCloudLogo from "@/assets/logo-google-cloud.png";
import lovehoneyLogo from "@/assets/logo-lovehoney.png";
import offendersLogo from "@/assets/logo-offenders.png";
import veriffLogo from "@/assets/logo-veriff.png";
import allguardLogo from "@/assets/logo-allguard.png";

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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 items-center justify-items-center">
            <img 
              src={"https://framerusercontent.com/images/QzQYreSMkdd2ND38AqwS90KUHQ.png?scale-down-to=512"} 
              alt="AWS"
              className="h-12 lg:h-12 w-auto opacity-60 hover:opacity-80 transition-smooth"
            />
            <img 
              src={"https://images.icon-icons.com/2642/PNG/512/google_cloud_logo_icon_159333.png"} 
              alt="Google Cloud"
              className="h-12 lg:h-16 w-auto opacity-60 hover:opacity-80 transition-smooth"
            />
            <img 
              src={"https://framerusercontent.com/images/1DTkqWl4qRJKjBK6NqvoAf2J0k.png?scale-down-to=512"} 
              alt="LoveHoney"
              className="h-12 lg:h-12 w-auto opacity-60 hover:opacity-80 transition-smooth"
            />
            <img 
              src={"https://framerusercontent.com/images/7r5CDs88R3U3Vs8gZ7x2vc6TaLU.png?scale-down-to=1024"} 
              alt="Offenders.org.uk"
              className="h-12 lg:h-16 w-auto opacity-60 hover:opacity-80 transition-smooth"
            />
            <img 
              src={"https://framerusercontent.com/images/USlITeUzLKlwUxiLDbkJabDGG7U.png?scale-down-to=1024"} 
              alt="Veriff"
              className="h-12 lg:h-16 w-auto opacity-60 hover:opacity-80 transition-smooth"
            />
            <img 
              src={allguardLogo} 
              alt="AllGuard"
              className="h-12 lg:h-12 w-auto opacity-60 hover:opacity-80 transition-smooth"
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