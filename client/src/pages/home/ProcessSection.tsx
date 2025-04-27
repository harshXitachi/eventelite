const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "In-depth discovery of your vision, requirements, and objectives for a customized approach"
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "Creative concept development with detailed timelines and vendor coordination"
    },
    {
      number: 3,
      title: "Execution",
      description: "Flawless implementation with our professional team handling every detail"
    },
    {
      number: 4,
      title: "Follow-Up",
      description: "Post-event evaluation and feedback to ensure complete satisfaction"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4 text-primary">Our Proven Process</h2>
          <p className="font-montserrat text-gray-700 max-w-3xl mx-auto">
            A streamlined approach to delivering exceptional events
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -mt-0.5 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg fade-in-section">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <span className="font-montserrat font-bold">{step.number}</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-2 text-primary text-center md:text-left">{step.title}</h3>
                <p className="text-gray-700 text-center md:text-left">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
