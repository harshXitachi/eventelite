import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import EventCalculator from "@/pages/calculator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatAssistant from "@/components/ui/chat-assistant";
import WhatsAppButton from "@/components/ui/whatsapp-button";

function Router() {
  const [location] = useLocation();
  const showNavAndFooter = location !== "/calculator";
  
  return (
    <>
      {showNavAndFooter && <Navbar />}
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/calculator" component={EventCalculator} />
        <Route component={NotFound} />
      </Switch>
      {showNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  // Add scroll detection for elements with fade-in-section class
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    const fadeInOnScroll = () => {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('is-visible');
        }
      });
    };
    
    // Initial check on load
    fadeInOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', fadeInOnScroll);
    
    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ChatAssistant />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
