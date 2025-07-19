import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import EducationHub from "@/components/EducationHub";
import EventsSection from "@/components/EventsSection";
import SafetySection from "@/components/SafetySection";
import PartnersSection from "@/components/PartnersSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <EducationHub />
      <EventsSection />
      <SafetySection />
      <PartnersSection />
      <PricingSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
