import React from 'react';
import { Award, Heart, Shield, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-secondary-600">{description}</p>
  </div>
);

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-secondary-900/60"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-center">
            About Malitabu
          </h1>
          <div className="h-1 w-24 bg-primary-400 mx-auto mb-8"></div>
          <p className="text-center max-w-3xl mx-auto text-lg">
            Creating beauty from the inside out, spaces that nurture, and experiences that transform.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Our Story</h2>
              <div className="h-1 w-16 bg-primary-400 mb-8"></div>
              <div className="space-y-4 text-secondary-700">
                <p>
                  Malitabu was born from a vision to create a holistic approach to beauty and wellbeing. 
                  Our founder, Maria Tabu, recognized that true beauty comes when we feel our best, 
                  not just in our appearance but in our environments and daily routines.
                </p>
                <p>
                  Starting as a small hair salon in 2018, we quickly expanded to include skincare services 
                  as clients sought comprehensive beauty solutions. The addition of home cleaning services 
                  came from a simple observation: clients often mentioned the stress of returning home to 
                  chores after a day of self-care.
                </p>
                <p>
                  Today, Malitabu stands as a pioneer in integrated beauty and wellness, offering services 
                  that nurture not just your body, but your entire living experience. Our commitment to 
                  excellence, natural ingredients, and personalized care remains at the heart of everything we do.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/services" variant="primary">
                  Explore Our Services
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg"
                alt="Malitabu salon"
                className="rounded-lg object-cover w-full h-full"
              />
              <img
                src="https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg"
                alt="Malitabu products"
                className="rounded-lg object-cover w-full h-64 mt-8"
              />
              <img
                src="https://images.pexels.com/photos/4107124/pexels-photo-4107124.jpeg"
                alt="Clean home space"
                className="rounded-lg object-cover w-full h-64 -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3997319/pexels-photo-3997319.jpeg"
                alt="Beauty service"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Core Values"
            subtitle="Principles that guide every service we provide and interaction we have."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Award size={24} />}
              title="Excellence"
              description="We strive for perfection in every service, using premium products and techniques."
            />
            <ValueCard
              icon={<Heart size={24} />}
              title="Holistic Wellness"
              description="We believe in nurturing the complete person, from appearance to environment."
            />
            <ValueCard
              icon={<Shield size={24} />}
              title="Trust"
              description="Our relationship with clients is built on reliability, discretion, and transparency."
            />
            <ValueCard
              icon={<Clock size={24} />}
              title="Respect"
              description="We value your time, preferences, and individuality in all our interactions."
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Meet Our Team"
            subtitle="Passionate experts dedicated to your beauty and wellness journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Tabu',
                role: 'Founder & Lead Stylist',
                bio: 'With over 15 years of experience, Maria brings vision and expertise to every client interaction.',
                image: 'https://images.pexels.com/photos/4350119/pexels-photo-4350119.jpeg',
              },
              {
                name: 'David Chen',
                role: 'Skincare Specialist',
                bio: 'David's personalized approach to skincare has transformed countless clients' complexions.',
                image: 'https://images.pexels.com/photos/3770254/pexels-photo-3770254.jpeg',
              },
              {
                name: 'Sophia Patel',
                role: 'Clean Living Director',
                bio: 'Sophia ensures every home cleaning experience meets Malitabu's exceptional standards.',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-primary-500 mb-3">{member.role}</p>
                  <p className="text-secondary-600">{member.bio}</p>
                </div>
              </div>
            ))}
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

export default About;