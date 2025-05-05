import React from 'react';
import { Scissors, Sparkles, Home } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  whatsappLink 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  whatsappLink: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f9ebe5] text-[#e39c85] mb-6">
        <Icon size={28} />
      </div>
      <h3 className="font-serif text-xl mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a 
        href={whatsappLink} 
        className="text-[#e39c85] hover:text-[#d67e60] font-medium transition-colors duration-300"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Inquire Now
      </a>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Beauty Lounge",
      description: "Premium hairdressing, skincare, and makeup services.",
      icon: Scissors,
      whatsappLink: "https://wa.me/+256779558005?text=Hi!%20I'm%20interested%20in%20Beauty%20Lounge%20services."
    },
    {
      title: "Hair Products",
      description: "Local, natural, and premium hair care products.",
      icon: Sparkles,
      whatsappLink: "https://wa.me/+256779558005?text=Hi!%20I'm%20interested%20in%20Hair%20Products."
    },
    {
      title: "Clean Living",
      description: "Home cleaning, organization, and laundry services.",
      icon: Home,
      whatsappLink: "https://wa.me/+256779558005?text=Hi!%20I'm%20interested%20in%20Clean%20Living%20services."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;