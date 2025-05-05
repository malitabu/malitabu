import React from 'react';
import { Scissors, Sparkles, Home as HomeIcon, MapIcon as WhatsappIcon } from 'lucide-react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import PackageCard from './components/PackageCard';
import TestimonialCard from './components/TestimonialCard';

function App() {
  const whatsappNumber = '+1234567890'; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent('Hi! I would like to book an appointment.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <Hero
        title="Beauty. Wellness. Clean Spaces."
        subtitle="Experience the holistic approach to beauty and wellness. Where elegance meets self-care."
        whatsappLink={whatsappLink}
      />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Beauty Lounge"
              description="Premium hairdressing, skincare, and makeup services."
              icon={Scissors}
              whatsappLink={whatsappLink}
            />
            <ServiceCard
              title="Hair Products"
              description="Local, natural, and premium hair care products."
              icon={Sparkles}
              whatsappLink={whatsappLink}
            />
            <ServiceCard
              title="Clean Living"
              description="Home cleaning, organization, and laundry services."
              icon={HomeIcon}
              whatsappLink={whatsappLink}
            />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PackageCard
              title="Pamper & Polish"
              price="$149"
              description="Hair and skin care combo for a complete refresh."
              features={[
                "Hair consultation and styling",
                "Deep conditioning treatment",
                "Facial cleanse and mask",
                "Take-home mini product"
              ]}
              whatsappLink={whatsappLink}
            />
            <PackageCard
              title="Glow & Go"
              price="$89"
              description="Quick styling and product bundle."
              features={[
                "Express hair styling",
                "Product consultation",
                "Curated product bundle",
                "Quick skin refresh"
              ]}
              featured={true}
              whatsappLink={whatsappLink}
            />
            <PackageCard
              title="Serenity Clean"
              price="$199"
              description="Home cleaning while you enjoy salon services."
              features={[
                "Complete home cleaning",
                "Laundry service",
                "Space organization",
                "Aromatherapy setup"
              ]}
              whatsappLink={whatsappLink}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Malitabu transformed not just my hair but my entire self-care routine!"
              name="Sarah J."
              rating={5}
            />
            <TestimonialCard
              quote="Coming home to a perfectly clean space after a salon day was amazing."
              name="Michelle T."
              rating={5}
            />
            <TestimonialCard
              quote="Their product recommendations have made such a difference for my hair."
              name="James L."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Book Your Appointment</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Ready to experience the Malitabu difference? Contact us through WhatsApp to book your appointment.
          </p>
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
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary-400 flex items-center justify-center text-white font-serif text-xl font-bold">
              M
            </div>
            <span className="text-xl font-serif">Malitabu</span>
          </div>
          <p className="text-secondary-200 mb-4">Beauty. Wellness. Clean Spaces.</p>
          <div className="space-y-2 text-sm text-secondary-200">
            <p>123 Beauty Lane, Wellness City, WC 12345</p>
            <p>
              <a href="tel:+1234567890" className="hover:text-primary-400">
                (123) 456-7890
              </a>
            </p>
            <p>
              <a href="mailto:info@malitabu.com" className="hover:text-primary-400">
                info@malitabu.com
              </a>
            </p>
          </div>
          <div className="mt-6 text-sm text-secondary-300">
            © {new Date().getFullYear()} Malitabu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;