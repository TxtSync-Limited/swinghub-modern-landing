import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureGridSection from "@/components/FeatureGridSection";
import ExpenseTrackingSection from "@/components/ExpenseTrackingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureGridSection />
      <ExpenseTrackingSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <TestimonialSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
