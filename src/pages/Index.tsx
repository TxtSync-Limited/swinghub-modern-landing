import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeatureGridSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EducationHub from "@/components/EducationHub";
import EventsSection from "@/components/EventsSection";
import UpcomingEventSection from "@/components/UpcomingEventSection";
import SafetySection from "@/components/SafetySection";
import PartnersSection from "@/components/PartnersSection";
import MerchandiseSection from "@/components/MerchandiseSection";
import BlogSection from "@/components/BlogSection";
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
      <UpcomingEventSection />
      <SafetySection />
      <MerchandiseSection />
      <BlogSection />
      <PricingSection />
      <TestimonialSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
