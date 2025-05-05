import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PackageCard from '../components/PackageCard';
import Button from '../components/Button';

const Packages = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-secondary-900/60"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-center">
            Our Packages
          </h1>
          <div className="h-1 w-24 bg-primary-400 mx-auto mb-8"></div>
          <p className="text-center max-w-3xl mx-auto text-lg">
            Curated combinations of our best services designed to give you the ultimate Malitabu experience.
          </p>
        </div>
      </section>

      {/* Regular Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Signature Packages"
            subtitle="Our most popular service combinations at special bundle pricing."
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
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Special Event Packages"
            subtitle="Comprehensive beauty and home services for your important occasions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PackageCard
              title="Bridal Beauty"
              price="$299"
              description="Complete preparation for the bride on her special day."
              features={[
                "Trial hair and makeup",
                "Day-of styling and makeup",
                "Mini emergency kit",
                "Calming scalp massage",
                "Touch-up products"
              ]}
              image="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg"
            />
            <PackageCard
              title="Party Prep"
              price="$249"
              description="Home and beauty preparation for hosting a special gathering."
              features={[
                "Complete home cleaning",
                "Hair styling",
                "Express facial",
                "Guest bathroom setup",
                "Hostess emergency kit"
              ]}
              image="https://images.pexels.com/photos/3807097/pexels-photo-3807097.jpeg"
            />
            <PackageCard
              title="New Mom Refresh"
              price="$219"
              description="Rejuvenating care package for new mothers."
              features={[
                "Gentle hair treatment",
                "Postpartum-safe facial",
                "Home tidying service",
                "Meal prep assistance",
                "Baby-safe products guidance"
              ]}
              image="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Monthly Subscriptions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Monthly Memberships"
            subtitle="Ongoing care packages for consistent beauty and home maintenance."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PackageCard
              title="Beauty Essential"
              price="$129/month"
              description="Regular beauty maintenance for the busy professional."
              features={[
                "Monthly hair trim/style",
                "Monthly mini facial",
                "10% off all products",
                "Priority booking",
                "Quarterly deep treatment"
              ]}
            />
            <PackageCard
              title="Home Harmony"
              price="$249/month"
              description="Regular home cleaning and organization services."
              features={[
                "Bi-weekly home cleaning",
                "Monthly deep clean area",
                "Laundry assistance",
                "Seasonal organization",
                "Emergency cleaning (1x/month)"
              ]}
              featured={true}
            />
            <PackageCard
              title="Total Transformation"
              price="$349/month"
              description="Comprehensive beauty and home care subscription."
              features={[
                "All Beauty Essential benefits",
                "Bi-weekly home cleaning",
                "Monthly product allowance",
                "Quarterly home organization",
                "24/7 beauty emergency hotline"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 md:py-24 bg-primary-400 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 max-w-2xl mx-auto">
            Need a custom package?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            We can create personalized service combinations to meet your specific needs and preferences.
          </p>
          <Button to="/contact" variant="accent" size="lg">
            Contact for Custom Package
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Packages;