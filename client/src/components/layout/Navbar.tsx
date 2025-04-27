import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={cn(
          "py-4 px-6 md:px-12 flex justify-between items-center w-full transition-all duration-300 bg-white bg-opacity-95 z-50",
          isScrolled && "fixed top-0 right-0 left-0 py-2 shadow-md"
        )}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-primary">
              Event<span className="text-accent">Elite</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Home</a>
          <a href="#services" className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Services</a>
          <a href="#portfolio" className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Portfolio</a>
          <a href="#testimonials" className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Testimonials</a>
          <a href="#volunteer" className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Volunteer</a>
          <a href="#blog" className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Blog</a>
          <a href="/calculator" className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Cost Calculator</a>
          <a href="#contact" className="font-poppins bg-primary hover:bg-primary/80 text-white py-2 px-5 rounded-md transition duration-300 ml-4">Contact Us</a>
        </nav>
        
        <button 
          className="lg:hidden text-primary focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </header>
      
      <div 
        className={cn(
          "fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-playfair font-bold text-primary">
              Event<span className="text-accent">Elite</span>
            </span>
            <button 
              className="text-gray-700 focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#home" onClick={closeMenu} className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Home</a>
            <a href="#services" onClick={closeMenu} className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Services</a>
            <a href="#portfolio" onClick={closeMenu} className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Portfolio</a>
            <a href="#testimonials" onClick={closeMenu} className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Testimonials</a>
            <a href="#volunteer" onClick={closeMenu} className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Volunteer</a>
            <a href="#blog" onClick={closeMenu} className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Blog</a>
            <a href="/calculator" onClick={closeMenu} className="font-montserrat text-sm font-semibold hover:text-primary transition duration-300">Cost Calculator</a>
            <a href="#contact" onClick={closeMenu} className="font-poppins bg-primary hover:bg-primary/80 text-white py-2 px-5 rounded-md transition duration-300 text-center mt-4">Contact Us</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
