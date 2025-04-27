import { testimonials, shortTestimonials } from "@/lib/constants";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4 text-primary">Client Testimonials</h2>
          <p className="font-montserrat text-gray-700 max-w-3xl mx-auto">
            What our clients say about their experience with EventElite
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="fade-in-section">
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="text-primary text-6xl absolute -top-6 -left-3 opacity-10">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="italic text-gray-700 mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {shortTestimonials.map((testimonial, index) => (
            <div key={index} className="fade-in-section">
              <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-accent ${i >= testimonial.rating ? 'text-gray-300' : ''}`}></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <h4 className="font-montserrat font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600 ml-2">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
