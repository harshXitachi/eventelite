import CardFlip from "@/components/ui/card-flip";
import GradientButton from "@/components/ui/gradient-button";
import { services } from "@/lib/constants";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4 text-primary">Our Premier Services</h2>
          <p className="font-montserrat text-gray-700 max-w-3xl mx-auto">
            Comprehensive event solutions tailored to exceed expectations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="fade-in-section">
              <CardFlip
                front={
                  <>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-montserrat font-semibold text-xl mb-2 text-primary">{service.title}</h3>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <span className="font-poppins text-sm text-primary">Flip for details</span>
                    </div>
                  </>
                }
                back={
                  <>
                    <h3 className="font-montserrat font-semibold text-xl mb-4">{service.title}</h3>
                    <ul className="text-left space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check-circle mr-2 mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="font-poppins bg-white text-primary hover:bg-gray-100 py-2 px-6 rounded-md transition duration-300 inline-block text-center">
                      {service.ctaText}
                    </a>
                  </>
                }
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in-section">
          <GradientButton 
            variant="primary" 
            size="lg" 
            icon={<i className="fas fa-arrow-right"></i>}
          >
            Discuss Your Event Ideas
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
