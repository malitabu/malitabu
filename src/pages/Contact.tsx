import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const ContactInfo = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1">{icon}</div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <div className="text-secondary-600">{children}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-secondary-900/60"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-center">
            Contact Us
          </h1>
          <div className="h-1 w-24 bg-primary-400 mx-auto mb-8"></div>
          <p className="text-center max-w-3xl mx-auto text-lg">
            Reach out to book an appointment, ask questions, or provide feedback on your Malitabu experience.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Get in Touch"
                subtitle="We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible."
                centered={false}
              />
              
              <ContactForm />

              <div className="mt-12 pt-12 border-t border-secondary-100">
                <h3 className="font-serif text-2xl font-medium mb-6">Connect With Us</h3>
                <div className="space-y-6">
                  <ContactInfo 
                    icon={<MapPin className="text-primary-500" />} 
                    title="Visit Us"
                  >
                    <p>123 Beauty Lane, Wellness City, WC 12345</p>
                  </ContactInfo>
                  
                  <ContactInfo 
                    icon={<Phone className="text-primary-500" />} 
                    title="Call Us"
                  >
                    <a 
                      href="tel:+1234567890" 
                      className="text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </ContactInfo>
                  
                  <ContactInfo 
                    icon={<Mail className="text-primary-500" />} 
                    title="Email Us"
                  >
                    <a 
                      href="mailto:info@malitabu.com" 
                      className="text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      info@malitabu.com
                    </a>
                  </ContactInfo>
                  
                  <ContactInfo 
                    icon={<Clock className="text-primary-500" />} 
                    title="Hours"
                  >
                    <p>Monday - Friday: 9am - 7pm</p>
                    <p>Saturday: 10am - 5pm</p>
                    <p>Sunday: Closed</p>
                  </ContactInfo>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-primary-50 p-8 rounded-lg h-full">
                <h3 className="font-serif text-2xl font-medium mb-6">Booking Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Services Booking</h4>
                    <p className="text-secondary-600 mb-4">
                      For hair and beauty services, we recommend booking at least 48 hours in advance to secure your preferred time.
                    </p>
                    <p className="text-secondary-600">
                      You can book through this website, by phone, or via WhatsApp.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Home Cleaning Services</h4>
                    <p className="text-secondary-600 mb-4">
                      Home cleaning services require an initial consultation and are typically booked 3-5 days in advance.
                    </p>
                    <p className="text-secondary-600">
                      For combined salon + cleaning packages, please mention this in your booking request.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Cancellation Policy</h4>
                    <p className="text-secondary-600">
                      We understand that schedules change. We ask for at least 24 hours notice for cancellations. Late cancellations may incur a fee of 25% of the service price.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Special Events</h4>
                    <p className="text-secondary-600">
                      For weddings, parties, or other special events, please contact us at least 4 weeks in advance to ensure availability and proper planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-secondary-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white p-6 rounded-lg shadow-md z-10">
            <h3 className="font-medium text-lg mb-2">Find Us</h3>
            <p className="text-secondary-600 mb-4">123 Beauty Lane, Wellness City</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary-400 text-white rounded-md hover:bg-primary-500 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-secondary-200 text-center flex items-center justify-center text-secondary-400">
          <p>[Map Placeholder]</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;