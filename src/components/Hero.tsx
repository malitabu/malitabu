import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center text-white text-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(77,72,64,0.5)] z-10"></div>
      <div className="relative z-20 max-w-3xl px-6">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
          Beauty. Wellness. Clean Spaces.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Experience the holistic approach to beauty and wellness. Where elegance meets self-care.
        </p>
        <a 
          href="https://wa.me/+256779558005?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment." 
          className="inline-flex items-center px-8 py-4 bg-[#d2a062] hover:bg-[#c68742] text-white font-medium rounded-md transition-colors duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Inquire via WhatsApp
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </header>
  );
};

export default Hero;