import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a 
        href="https://wa.me/919785520040" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
      <span className="absolute bottom-16 left-0 bg-white text-gray-800 px-3 py-1 rounded-md shadow-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </div>
  );
};

export default WhatsAppButton;