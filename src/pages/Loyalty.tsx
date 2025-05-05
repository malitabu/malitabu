import React from 'react';
import { Award, Gift, Users, Tag } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const RewardCard = ({ title, points, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 hover:border-primary-200 transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
        {points} points
      </span>
    </div>
    <p className="text-secondary-600">{description}</p>
  </div>
);

const Loyalty = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3760763/pexels-photo-3760763.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-secondary-900/60"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-center">
            Rewards & Loyalty
          </h1>
          <div className="h-1 w-24 bg-primary-400 mx-auto mb-8"></div>
          <p className="text-center max-w-3xl mx-auto text-lg">
            Join our loyalty program and enjoy exclusive rewards, discounts, and special offers.
          </p>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Malitabu Glow Rewards</h2>
              <div className="h-1 w-16 bg-primary-400 mb-8"></div>
              <div className="space-y-4 text-secondary-700">
                <p>
                  Our loyalty program is designed to thank you for choosing Malitabu for your beauty and 
                  wellness journey. With each visit and purchase, you'll earn points that can be redeemed 
                  for exclusive rewards.
                </p>
                <p>
                  Joining is simple and free. Simply provide your contact information during your next 
                  visit, and you'll automatically be enrolled. Start earning points immediately and watch 
                  your rewards grow with each Malitabu experience.
                </p>
                <p>
                  Members also receive exclusive access to new products, special events, and seasonal 
                  promotions that aren't available to the general public.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  Join Now
                </Button>
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-medium mb-6">How it Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <span className="font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Join the Program</h4>
                    <p className="text-secondary-600">Sign up during your next visit or online.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <span className="font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Earn Points</h4>
                    <p className="text-secondary-600">1 point for every $1 spent on services and products.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <span className="font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Redeem Rewards</h4>
                    <p className="text-secondary-600">Use your points for exclusive rewards and discounts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <span className="font-medium">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Enjoy Exclusive Benefits</h4>
                    <p className="text-secondary-600">Get member-only offers and early access to events.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tiers */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Membership Tiers"
            subtitle="Earn more benefits as you move up our loyalty program tiers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Glow Starter",
                visits: "0-5 visits",
                benefits: [
                  "1 point per $1 spent",
                  "Birthday special offer",
                  "Monthly newsletter",
                  "Access to reward redemptions"
                ],
                color: "bg-secondary-100 border-secondary-200"
              },
              {
                name: "Glow Essential",
                visits: "6-15 visits",
                benefits: [
                  "1.25 points per $1 spent",
                  "All Starter benefits",
                  "Exclusive seasonal offers",
                  "Priority booking for popular times",
                  "Quarterly mini-treatment"
                ],
                color: "bg-primary-100 border-primary-200",
                featured: true
              },
              {
                name: "Glow VIP",
                visits: "16+ visits",
                benefits: [
                  "1.5 points per $1 spent",
                  "All Essential benefits",
                  "Complimentary annual service",
                  "Free product sample with every visit",
                  "VIP event invitations",
                  "Dedicated stylist/specialist"
                ],
                color: "bg-accent-100 border-accent-200"
              }
            ].map((tier, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg border-2 ${tier.color} ${tier.featured ? 'transform -translate-y-4' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-serif font-medium">{tier.name}</h3>
                  {tier.featured && (
                    <span className="bg-primary-400 text-white px-3 py-1 rounded-full text-xs">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-secondary-600 border-b border-secondary-100 pb-4 mb-4">{tier.visits}</p>
                <ul className="space-y-2 mb-8">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      <span className="text-sm text-secondary-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                {tier.featured ? (
                  <Button to="/contact" variant="primary" className="w-full">
                    Join Now
                  </Button>
                ) : (
                  <Button to="/contact" variant="outline" className="w-full">
                    Learn More
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Available Rewards"
            subtitle="Redeem your points for these exclusive rewards and experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RewardCard
              title="$15 Service Credit"
              points="150"
              description="Redeem your points for credit towards any Malitabu service."
            />
            <RewardCard
              title="Free Product"
              points="200"
              description="Choose a free product from our selection of hair or skin essentials."
            />
            <RewardCard
              title="Express Treatment"
              points="250"
              description="Enjoy a complimentary express facial or hair treatment."
            />
            <RewardCard
              title="Friend Referral Bonus"
              points="300"
              description="Get a bonus when you refer a friend (they'll receive a discount too)."
            />
            <RewardCard
              title="Home Express Clean"
              points="400"
              description="Redeem for a quick home cleaning service (up to 2 hours)."
            />
            <RewardCard
              title="VIP Spa Day"
              points="750"
              description="Full day of pampering with multiple services and complimentary refreshments."
            />
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-16 md:py-24 bg-secondary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Refer a Friend"
            subtitle="Share the Malitabu experience and both of you will be rewarded."
            light={true}
          />

          <div className="bg-white text-secondary-800 p-8 rounded-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-medium">How It Works</h3>
                <p>
                  Refer your friends to Malitabu and when they make their first purchase, both you and 
                  your friend will receive special rewards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span>You get 20% off your next service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span>Your friend gets 15% off their first visit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span>You both earn double loyalty points</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Start Referring</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="friend-email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Friend's Email
                    </label>
                    <input
                      type="email"
                      id="friend-email"
                      className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full">
                    Send Invitation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-400 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 max-w-2xl mx-auto">
            Ready to start earning rewards?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join our loyalty program today and start experiencing the exclusive benefits of being a Malitabu member.
          </p>
          <Button to="/contact" variant="accent" size="lg">
            Join Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Loyalty;