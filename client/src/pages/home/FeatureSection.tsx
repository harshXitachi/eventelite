import Counter from "@/components/ui/counter";

const FeatureSection = () => {
  const stats = [
    { icon: "fas fa-calendar-check", count: 500, text: "Events Completed", suffix: "+" },
    { icon: "fas fa-users", count: 300, text: "Happy Clients", suffix: "+" },
    { icon: "fas fa-trophy", count: 15, text: "Industry Awards", suffix: "+" },
    { icon: "fas fa-handshake", count: 50, text: "Partner Vendors", suffix: "+" },
  ];

  return (
    <section className="py-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="fade-in-section">
              <div className="text-accent text-4xl mb-3">
                <i className={stat.icon}></i>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-1 text-white">
                <Counter 
                  end={stat.count} 
                  suffix={stat.suffix} 
                  className="font-montserrat font-semibold"
                />
              </h3>
              <p className="text-white text-opacity-80">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
