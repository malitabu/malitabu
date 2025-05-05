import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4d4840] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#e39c85] flex items-center justify-center mr-2">
              <span className="font-serif font-bold">M</span>
            </div>
            <span className="font-serif text-xl">Malitabu</span>
          </div>
          
          <p className="text-gray-300 mb-6">Beauty. Wellness. Clean Spaces.</p>
          
          <div className="space-y-2 mb-8">
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2 text-[#e39c85]" />
              <p>Main Rd, Tororo</p>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2 text-[#e39c85]" />
              <a href="tel:+256779558005" className="hover:text-[#e39c85] transition-colors duration-300">
                0779-558-005
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2 text-[#e39c85]" />
              <a href="mailto:info@malitabu.com" className="hover:text-[#e39c85] transition-colors duration-300">
                info@malitabu.com
              </a>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">© 2024 Malitabu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;