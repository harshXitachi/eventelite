import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
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

// SVG icons instead of emojis
const CorporateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const WeddingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const PartyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
  </svg>
);

const FestivalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

const ExhibitionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const VirtualIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const services = [
  {
    title: "Corporate Events",
    description: "Professional conferences, product launches, and team-building experiences",
    bgColor: "#1142c7",
    icon: <CorporateIcon />
  },
  {
    title: "Wedding Celebrations",
    description: "Bespoke wedding experiences from intimate gatherings to grand celebrations",
    bgColor: "#e84c93",
    icon: <WeddingIcon />
  },
  {
    title: "Social Gatherings",
    description: "Milestone celebrations, parties, and private functions",
    bgColor: "#8e44ad",
    icon: <PartyIcon />
  },
  {
    title: "Festival Management",
    description: "Cultural and music festivals, community events",
    bgColor: "#222",
    icon: <FestivalIcon />
  },
  {
    title: "Exhibition Management",
    description: "Trade shows, art exhibitions, and industry expositions",
    bgColor: "#444",
    icon: <ExhibitionIcon />
  },
  {
    title: "Virtual Events",
    description: "Online conferences, webinars, and hybrid experiences",
    bgColor: "#333",
    icon: <VirtualIcon />
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