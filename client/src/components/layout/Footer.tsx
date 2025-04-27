import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">
              Event<span className="text-accent">Elite</span>
            </h3>
            <p className="text-gray-400 mb-6">
              India's premier event management company specializing in creating unforgettable experiences for corporate and personal events.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition duration-300">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Corporate Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Weddings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Social Gatherings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Festival Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Exhibitions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Virtual Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-accent"></i>
                <span className="text-gray-400">EventElite House, 123 Luxury Lane, Mumbai, 400001</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-accent"></i>
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-accent"></i>
                <span className="text-gray-400">events@eventelite.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EventElite. All rights reserved. | 
            <a href="#" className="hover:text-white transition duration-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition duration-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
