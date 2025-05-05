import React from 'react';
import { CheckCircle } from 'lucide-react';

interface PackageProps {
  title: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  whatsappLink: string;
}

const PackageCard: React.FC<PackageProps> = ({ 
  title, 
  description, 
  features, 
  isFeatured = false,
  whatsappLink
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 relative transition-all duration-300 hover:shadow-lg ${
      isFeatured ? 'border-2 border-[#e39c85] transform -translate-y-2 md:-translate-y-4' : ''
    }`}>
      {isFeatured && (
        <div className="absolute top-4 right-4 bg-[#e39c85] text-white px-3 py-1 rounded-full text-xs font-medium">
          Most Popular
        </div>
      )}
      
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="mb-8 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#e39c85] mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href={whatsappLink}
        className="block w-full py-3 text-center bg-[#e39c85] hover:bg-[#d67e60] text-white font-medium rounded-md transition-colors duration-300"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Inquire Now
      </a>
    </div>
  );
};

const Packages = () => {
  const packages = [
    {
      title: "Pamper & Polish",
      description: "Hair and skin care combo for a complete refresh.",
      features: [
        "Hair consultation and styling",
        "Deep conditioning treatment",
        "Facial cleanse and mask",
        "Take-home mini product"
      ],
      whatsappLink: "https://wa.me/+256779558005?text=Hi!%20I'm%20interested%20in%20the%20Pamper%20%26%20Polish%20package."
    },
    {
      title: "Glow & Go",
      description: "Quick styling and product bundle.",
      features: [
        "Express hair styling",
        "Product consultation",
        "Curated product bundle",
        "Quick skin refresh"
      ],
      isFeatured: true,
      whatsappLink: "https://wa.me/+256779558005?text=Hi!%20I'm%20interested%20in%20the%20Glow%20%26%20Go%20package."
    },
    {
      title: "Serenity Clean",
      description: "Home cleaning while you enjoy salon services.",
      features: [
        "Complete home cleaning",
        "Laundry service",
        "Space organization"
      ],
      whatsappLink: "https://wa.me/+256779558005?text=Hi!%20I'm%20interested%20in%20the%20Serenity%20Clean%20package."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Featured Packages</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;