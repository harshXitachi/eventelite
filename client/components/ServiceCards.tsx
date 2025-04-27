import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
  icon: string;
}

const ServiceCard = ({ title, description, bgColor, icon }: ServiceCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div 
        className="relative flex h-48 w-full items-center justify-center overflow-hidden" 
        style={{ backgroundColor: bgColor }}
      >
        <div className="text-5xl text-white">{icon}</div>
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
    bgColor: "#1142c7",
    icon: "🏢"
  },
  {
    title: "Wedding Celebrations",
    description: "Bespoke wedding experiences from intimate gatherings to grand celebrations",
    bgColor: "#e84c93",
    icon: "💍"
  },
  {
    title: "Social Gatherings",
    description: "Milestone celebrations, parties, and private functions",
    bgColor: "#8e44ad",
    icon: "🎉"
  },
  {
    title: "Festival Management",
    description: "Cultural and music festivals, community events",
    bgColor: "#222",
    icon: "🎵"
  },
  {
    title: "Exhibition Management",
    description: "Trade shows, art exhibitions, and industry expositions",
    bgColor: "#444",
    icon: "🖼️"
  },
  {
    title: "Virtual Events",
    description: "Online conferences, webinars, and hybrid experiences",
    bgColor: "#333",
    icon: "💻"
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