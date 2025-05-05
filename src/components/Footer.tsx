import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-primary-400 flex items-center justify-center text-white font-serif text-xl font-bold">
                M
              </div>
              <span className="text-xl font-serif font-semibold">Malitabu</span>
            </div>
            <p className="text-secondary-200 text-sm">
              Beauty. Wellness. Clean Spaces.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-200 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-200 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-200 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  Beauty Lounge
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  Hair Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  Clean Living
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  Special Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/loyalty"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  Loyalty Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-200 text-sm">
                  123 Beauty Lane, Wellness City, WC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@malitabu.com"
                  className="text-secondary-200 hover:text-primary-400 transition-colors text-sm"
                >
                  info@malitabu.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-secondary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-medium mb-2">Join the Malitabu glow list</h3>
              <p className="text-secondary-200 text-sm">
                Subscribe to get special offers, free giveaways, and beauty tips.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md text-secondary-800 w-full md:w-64 focus:outline-none"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-secondary-700 pt-6 text-center">
          <p className="text-secondary-300 text-xs">
            &copy; {new Date().getFullYear()} Malitabu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;