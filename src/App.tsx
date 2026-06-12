import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RecommendationEngine from './components/RecommendationEngine';
import ProjectsSection from './components/ProjectsSection';
import SymptomChecker from './components/SymptomChecker';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.title = "Iqbal & Zeeshan Compressor Services";
  }, []);

  return (
    <div className="bg-[#0C0C0C] font-sans text-[#D7E2EA] overflow-x-hidden w-full min-h-screen selection:bg-[#D7E2EA]/20">
      {/* 
        This is a premium bespoke industrial air compressor engineering catalog,
        leveraging full hardware acceleration and Framer Motion spring micro-animations.
      */}
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <RecommendationEngine />
      <ProjectsSection />
      <SymptomChecker />
      <Footer />
    </div>
  );
}
