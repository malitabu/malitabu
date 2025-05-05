import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Home as HomeIcon } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Beauty. Wellness. Clean Spaces."
        subtitle="Experience the holistic approach to beauty and wellness. Where elegance meets self-care."
        primaryButtonText="Book an Appointment"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
        backgroundImage="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg"
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Welcome to Malitabu
            </h2>
            <p className="text-secondary-600 mb-6">
              At Malitabu, we believe beauty and wellness should extend to every aspect of your life.
              From our premium hair and skincare services to our discreet home cleaning, we create
              spaces and experiences that nurture your entire well-being.
            </p>
            <div className="flex justify-center">
              <Button to="/about" variant="outline">
                Learn About Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Services"
            subtitle="Discover our range of services designed to enhance your beauty and living spaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Beauty Lounge"
              description="Indulge in our premium hairdressing, skincare, and makeup services tailored to enhance your natural beauty."
              icon={Scissors}
              link="/services"
            />
            <ServiceCard
              title="Hair Products Shop"
              description="Explore our selection of local, natural, and premium hair care products for all hair types and concerns."
              icon={Sparkles}
              link="/services"
            />
            <ServiceCard
              title="Clean Living"
              description="Experience the bliss of returning to a pristine home with our discreet home cleaning, organization, and laundry services."
              icon={HomeIcon}
              link="/services"
            />
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="primary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Featured Packages"
            subtitle="Curated experiences combining our finest services for the ultimate self-care journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PackageCard
              title="Pamper & Polish"
              price="$149"
              description="Our signature hair and skin care combo for a complete refresh."
              features={[
                "Hair consultation and styling",
                "Deep conditioning treatment",
                "Facial cleanse and exfoliation",
                "Hydrating mask and massage",
                "Take-home mini product"
              ]}
              image="https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg"
            />
            <PackageCard
              title="Glow & Go"
              price="$89"
              description="Quick hair styling and product bundle for the busy professional."
              features={[
                "Express hair styling",
                "Product consultation",
                "Curated product bundle",
                "Quick skin refresh",
                "On-the-go beauty tips"
              ]}
              featured={true}
              image="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg"
            />
            <PackageCard
              title="Serenity Clean"
              price="$199"
              description="Home deep clean while you enjoy services at our salon."
              features={[
                "Complete home cleaning",
                "Laundry folding",
                "Fridge organization",
                "Aromatherapy setup",
                "Return to a fresh space"
              ]}
              image="https://images.pexels.com/photos/4107283/pexels-photo-4107283.jpeg"
            />
          </div>

          <div className="text-center mt-12">
            <Button to="/packages" variant="primary">
              Explore All Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Client Experiences"
            subtitle="Hear what our clients have to say about their Malitabu experiences."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Malitabu transformed not just my hair but my entire self-care routine. Their products and services are truly life-changing!"
              name="Sarah J."
              title="Regular Client"
              rating={5}
            />
            <TestimonialCard
              quote="Coming home to a perfectly clean space after a salon day was the best surprise. The Serenity Clean package is worth every penny."
              name="Michelle T."
              title="Package Client"
              rating={5}
            />
            <TestimonialCard
              quote="I've never found products that work so well for my hair type until Malitabu. Their expertise and personalized recommendations make all the difference."
              name="James L."
              title="Product Client"
              rating={4}
            />
          </div>

          <div className="text-center mt-12">
            <Button to="/testimonials" variant="outline">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Follow Our Journey"
            subtitle="Join our community and stay updated with our latest work and inspirations."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a
                key={item}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden rounded-md"
              >
                <img
                  src={`https://images.pexels.com/photos/399${3300 + item}/pexels-photo-399${3300 + item}.jpeg`}
                  alt={`Instagram post ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="https://instagram.com" variant="primary">
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-400 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 max-w-2xl mx-auto">
            Ready to experience the Malitabu difference?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Book your appointment today and start your journey to beauty, wellness, and clean spaces.
          </p>
          <Button to="/contact" variant="accent" size="lg">
            Book an Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;