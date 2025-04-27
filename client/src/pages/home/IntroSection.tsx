import Counter from "@/components/ui/counter";

const IntroSection = () => {
  return (
    <section id="intro" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6 text-primary">
              India's Premier Event <br />Management Company
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              EventElite specializes in creating unforgettable experiences for corporate and personal celebrations. Our team of professionals delivers meticulous planning, creative design, and flawless execution.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 text-white">
                  <i className="fas fa-trophy"></i>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-1">Luxury Experience</h3>
                  <p className="text-gray-700">Exquisite attention to detail with premium service</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 text-white">
                  <i className="fas fa-gem"></i>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-1">Creative Excellence</h3>
                  <p className="text-gray-700">Innovative concepts tailored to your vision</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 text-white">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-1">Expert Team</h3>
                  <p className="text-gray-700">Seasoned professionals with elite industry experience</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury event setting" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 w-40 md:w-48">
                <div className="flex flex-col items-center text-center">
                  <Counter 
                    end={500} 
                    className="font-playfair font-bold text-3xl text-primary" 
                  />
                  <span className="font-montserrat text-sm text-gray-600">Events Completed</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-6 w-40 md:w-48">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center">
                    <Counter 
                      end={98} 
                      className="font-playfair font-bold text-3xl text-primary" 
                    />
                    <span className="font-playfair font-bold text-3xl text-primary">%</span>
                  </div>
                  <span className="font-montserrat text-sm text-gray-600">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
