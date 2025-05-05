import React from 'react';
import { MapIcon as WhatsappIcon } from 'lucide-react';

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  whatsappLink: string;
}

const PackageCard = ({
  title,
  price,
  description,
  features,
  featured = false,
  whatsappLink,
}: PackageCardProps) => {
  return (
    <div
      className={`rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col ${
        featured
          ? 'border-2 border-primary-400 shadow-lg'
          : 'border border-secondary-200 shadow-sm'
      }`}
    >
      <div className="p-6 flex flex-col flex-grow bg-white">
        {featured && (
          <span className="inline-block bg-primary-400 text-white text-xs px-3 py-1 rounded-full mb-4 self-start">
            Most Popular
          </span>
        )}
        <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-2xl font-medium">{price}</span>
        </div>
        <p className="text-secondary-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span className="text-sm text-secondary-700">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md transition-colors ${
            featured
              ? 'bg-primary-400 hover:bg-primary-500 text-white'
              : 'border border-primary-400 text-primary-400 hover:bg-primary-50'
          }`}
        >
          <WhatsappIcon size={20} />
          Book Now
        </a>
      </div>
    </div>
  );
};

export default PackageCard;