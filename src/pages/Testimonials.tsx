import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

const Testimonials = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3997382/pexels-photo-3997382.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-secondary-900/60"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-center">
            Client Experiences
          </h1>
          <div className="h-1 w-24 bg-primary-400 mx-auto mb-8"></div>
          <p className="text-center max-w-3xl mx-auto text-lg">
            Discover how Malitabu has transformed the beauty and wellness journeys of our clients.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Real experiences from the Malitabu community."
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
            <TestimonialCard
              quote="As a busy mom, the combined home cleaning and beauty services are a game-changer. I get to feel beautiful AND come home to a clean house!"
              name="Priya M."
              title="Monthly Member"
              rating={5}
            />
            <TestimonialCard
              quote="My wedding prep was flawless thanks to Malitabu. The bridal package gave me confidence and calm on my big day."
              name="Lauren B."
              title="Bridal Client"
              rating={5}
            />
            <TestimonialCard
              quote="The skincare knowledge here is exceptional. My chronic skin issues have improved dramatically since following their regimen."
              name="Carlos R."
              title="Skincare Client"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Transformations"
            subtitle="See the real results our clients experience with Malitabu services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="grid grid-cols-2">
                  <div className="overflow-hidden">
                    <img
                      src={`https://images.pexels.com/photos/3998${item * 10}/pexels-photo-3998${item * 10}.jpeg`}
                      alt={`Before transformation ${item}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="p-2 bg-secondary-800 text-white text-center text-sm">Before</div>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={`https://images.pexels.com/photos/4050${item * 10}/pexels-photo-4050${item * 10}.jpeg`}
                      alt={`After transformation ${item}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="p-2 bg-primary-400 text-white text-center text-sm">After</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Hair Transformation {item}</h3>
                  <p className="text-sm text-secondary-600">
                    Complete cut, color, and treatment service
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="primary">
              Book Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Client Stories"
            subtitle="Hear directly from our clients about their Malitabu experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-secondary-50 rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-video bg-secondary-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-secondary-800">Click to play video testimonial</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{["Sarah's Journey", "The Home Makeover", "John's Hair Revival"][item - 1]}</h3>
                  <p className="text-sm text-secondary-600">
                    {["Complete beauty transformation", "Home cleaning experience", "Hair product success story"][item - 1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 md:py-24 bg-primary-400 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 max-w-2xl mx-auto">
            Share Your Malitabu Story
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            We'd love to hear about your experience with us. Share your story and receive a special discount on your next service.
          </p>
          <Button to="/contact" variant="accent" size="lg">
            Submit Your Story
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;