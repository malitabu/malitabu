import React from 'react';
import { LucideIcon, WhatsappIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  whatsappLink: string;
}

const ServiceCard = ({ title, description, icon: Icon, whatsappLink }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
          <Icon size={32} />
        </div>
      </div>
      <h3 className="text-xl font-serif font-medium text-center mb-3">{title}</h3>
      <p className="text-secondary-600 text-center mb-6 flex-grow">{description}</p>
      <div className="text-center">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
        >
          <WhatsappIcon size={20} />
          Book Now
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

export default ServiceCard