import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    { path: '/packages', name: 'Packages' },
    { path: '/testimonials', name: 'Testimonials' },
    { path: '/loyalty', name: 'Loyalty' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="h-10 w-10 rounded-full bg-primary-400 flex items-center justify-center text-white font-serif text-xl font-bold">
              M
            </div>
            <span className="text-xl font-serif font-semibold">Malitabu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors duration-300 hover:text-primary-500 ${
                  location.pathname === link.path
                    ? 'text-primary-600 font-medium'
                    : isScrolled
                    ? 'text-secondary-800'
                    : 'text-secondary-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2 bg-primary-400 text-white rounded-md hover:bg-primary-500 transition-colors duration-300 text-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-secondary-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 px-4 text-sm ${
                    location.pathname === link.path
                      ? 'text-primary-600 font-medium bg-primary-50 rounded'
                      : 'text-secondary-800'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-4 py-3 bg-primary-400 text-white rounded-md hover:bg-primary-500 transition-colors duration-300 text-center text-sm"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;