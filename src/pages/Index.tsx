
import { Button } from "@/components/ui/button";
import { CoffeeMenu } from "@/components/CoffeeMenu";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoffeeMenu />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
