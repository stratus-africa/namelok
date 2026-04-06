import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CoverageSection } from "@/components/CoverageSection";
import { ImpactSection } from "@/components/ImpactSection";
import { VisionSection } from "@/components/VisionSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ChallengeSection />
      <ServicesSection />
      <HowItWorksSection />
      <CoverageSection />
      <ImpactSection />
      <VisionSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
