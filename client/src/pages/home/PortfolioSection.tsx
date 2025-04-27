import { useState } from "react";
import Masonry from "@/components/ui/masonry";
import GradientButton from "@/components/ui/gradient-button";
import { portfolioItems } from "@/lib/constants";

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4 text-primary">Our Event Portfolio</h2>
          <p className="font-montserrat text-gray-700 max-w-3xl mx-auto">
            A showcase of our exceptional events and celebrations
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-3 fade-in-section">
          {["All", "Corporate", "Wedding", "Social", "Festival"].map((category) => (
            <button 
              key={category}
              onClick={() => setFilter(category)}
              className={`font-poppins text-sm py-2 px-6 rounded-md transition duration-300 ${
                filter === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category === "All" ? "All Events" : category}
            </button>
          ))}
        </div>
        
        <div className="fade-in-section">
          <Masonry 
            columns={3} 
            className="mb-8"
          >
            {filteredItems.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-90 transition duration-300 flex flex-col justify-end p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white text-sm mb-3">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-white text-primary text-xs rounded-full">{item.category}</span>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
        
        <div className="mt-12 text-center fade-in-section">
          <GradientButton 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
            icon={<i className="fas fa-arrow-right"></i>}
          >
            View Full Portfolio
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
