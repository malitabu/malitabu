import React from 'react';
import { Scissors, Sparkles, Home as HomeIcon, Droplet, Gift, Star } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

interface ServiceItemProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const ServiceItem = ({ title, description, price, icon }: ServiceItemProps) => (
  <div className="p-6 bg-white rounded-lg shadow-sm flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 flex-shrink-0">
      {icon}
    </div>
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="text-primary-600 font-medium">{price}</span>
      </div>
      <p className="text-secondary-600">{description}</p>
    </div>
  </div>
);

const ServiceCategory = ({ title, description, children, bgColor = 'bg-white' }) => (
  <section className={`py-16 md:py-20 ${bgColor}`}>
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle title={title} subtitle={description} centered={true} />
      <div className="space-y-6">
        {children}
      </div>
    </div>
  </section>
);

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3997319/pexels-photo-3997319.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-secondary-900/60"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-center">
            Our Services
          </h1>
          <div className="h-1 w-24 bg-primary-400 mx-auto mb-8"></div>
          <p className="text-center max-w-3xl mx-auto text-lg">
            Discover our comprehensive range of beauty, wellness, and home care services designed to elevate your lifestyle.
          </p>
        </div>
      </section>

      {/* Beauty Lounge */}
      <ServiceCategory 
        title="Beauty Lounge" 
        description="Indulge in our premium hairdressing, skincare, and makeup services tailored to enhance your natural beauty."
        bgColor="bg-white"
      >
        <ServiceItem
          title="Signature Hair Styling"
          description="Complete hair styling service including consultation, cut, treatment, and styling."
          price="From $85"
          icon={<Scissors size={24} />}
        />
        <ServiceItem
          title="Color & Highlights"
          description="Custom color formulation and application by our expert colorists."
          price="From $120"
          icon={<Droplet size={24} />}
        />
        <ServiceItem
          title="Luxury Facial"
          description="Deep cleansing, exfoliation, and hydration tailored to your skin type."
          price="$95"
          icon={<Sparkles size={24} />}
        />
        <ServiceItem
          title="Special Occasion Makeup"
          description="Professional makeup application using premium products for your special event."
          price="$75"
          icon={<Star size={24} />}
        />
        <ServiceItem
          title="Hair & Scalp Treatment"
          description="Intensive treatment to nourish hair and rejuvenate scalp health."
          price="$65"
          icon={<Droplet size={24} />}
        />
        <div className="text-center mt-10">
          <Button to="/contact" variant="primary">
            Book a Beauty Service
          </Button>
        </div>
      </ServiceCategory>

      {/* Hair Products Shop */}
      <ServiceCategory 
        title="Hair Products Shop" 
        description="Explore our selection of local, natural, and premium hair care products for all hair types and concerns."
        bgColor="bg-primary-50"
      >
        <ServiceItem
          title="Natural Shampoo & Conditioner"
          description="Sulfate-free, natural formulations for all hair types."
          price="From $28"
          icon={<Droplet size={24} />}
        />
        <ServiceItem
          title="Hair Growth Formula"
          description="Stimulating serum with natural active ingredients to boost hair growth."
          price="$45"
          icon={<Sparkles size={24} />}
        />
        <ServiceItem
          title="Styling Products"
          description="Selection of gels, mousses, and sprays for perfect styling every time."
          price="From $22"
          icon={<Star size={24} />}
        />
        <ServiceItem
          title="Hair Treatment Masks"
          description="Deep conditioning masks for damaged, dry, or colored hair."
          price="$38"
          icon={<Sparkles size={24} />}
        />
        <ServiceItem
          title="Custom Hair Care Kit"
          description="Personalized selection of products based on your unique hair needs."
          price="From $95"
          icon={<Gift size={24} />}
        />
        <div className="text-center mt-10">
          <Button to="/contact" variant="primary">
            Shop Hair Products
          </Button>
        </div>
      </ServiceCategory>

      {/* Clean Living */}
      <ServiceCategory 
        title="Clean Living" 
        description="Experience the bliss of returning to a pristine home with our discreet home cleaning, organization, and laundry services."
        bgColor="bg-white"
      >
        <ServiceItem
          title="Standard Home Cleaning"
          description="Comprehensive cleaning of living spaces, kitchen, bedrooms, and bathrooms."
          price="From $120"
          icon={<HomeIcon size={24} />}
        />
        <ServiceItem
          title="Deep Clean"
          description="Intensive cleaning including rarely addressed areas like behind appliances and inside cabinets."
          price="From $210"
          icon={<HomeIcon size={24} />}
        />
        <ServiceItem
          title="Laundry & Folding"
          description="Washing, drying, and neat folding of your clothing and linens."
          price="$55"
          icon={<HomeIcon size={24} />}
        />
        <ServiceItem
          title="Home Organization"
          description="Strategic organization of closets, pantries, or other spaces to maximize functionality."
          price="$85/hour"
          icon={<HomeIcon size={24} />}
        />
        <ServiceItem
          title="Salon Day Home Service"
          description="Schedule a home cleaning during your salon appointment to return to a fresh space."
          price="Custom"
          icon={<Gift size={24} />}
        />
        <div className="text-center mt-10">
          <Button to="/contact" variant="primary">
            Schedule Cleaning
          </Button>
        </div>
      </ServiceCategory>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-400 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 max-w-2xl mx-auto">
            Looking for special combinations?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Check out our curated packages for the ultimate Malitabu experience at special pricing.
          </p>
          <Button to="/packages" variant="accent" size="lg">
            View Our Packages
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;