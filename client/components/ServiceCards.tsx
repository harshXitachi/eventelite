import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard = ({ title, description, imageUrl }: ServiceCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-center text-xl font-semibold text-purple-700">{title}</h3>
        <p className="mb-4 text-center text-gray-600">{description}</p>
        <div className="flex justify-center">
          <button className="text-purple-600 hover:text-purple-800">
            Flip for details
          </button>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Corporate Events",
    description: "Professional conferences, product launches, and team-building experiences",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Wedding Celebrations",
    description: "Bespoke wedding experiences from intimate gatherings to grand celebrations",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Social Gatherings",
    description: "Milestone celebrations, parties, and private functions",
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Festival Management",
    description: "Cultural and music festivals, community events",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Exhibition Management",
    description: "Trade shows, art exhibitions, and industry expositions",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Virtual Events",
    description: "Online conferences, webinars, and hybrid experiences",
    imageUrl: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=800&q=80",
  },
];

export function ServiceCards() {
  return (
    <div className="py-12">
      <h2 className="mb-12 text-center text-3xl font-bold text-purple-800">Our Premier Services</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
} 