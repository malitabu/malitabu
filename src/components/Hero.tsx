import React from 'react';
import { MapIcon as WhatsappIcon } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  whatsappLink: string;
}

const Hero = ({ title, subtitle, whatsappLink }: HeroProps) => {
  return (
    <div 
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg)' }}
    >
      <div className="absolute inset-0 bg-secondary-900/50"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8">{subtitle}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-white px-8 py-3 rounded-md transition-colors"
        >
          <WhatsappIcon size={24} />
          Book via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Hero;