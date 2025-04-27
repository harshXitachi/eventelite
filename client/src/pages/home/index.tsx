import { useEffect } from "react";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import PortfolioSection from "./PortfolioSection";
import TestimonialsSection from "./TestimonialsSection";
import VolunteerSection from "./VolunteerSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import FeatureSection from "./FeatureSection";

const HomePage = () => {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <VolunteerSection />
      <BlogSection />
      <ContactSection />
      <FeatureSection />
    </main>
  );
};

export default HomePage;
