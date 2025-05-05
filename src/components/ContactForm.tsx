import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend or email service
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-1">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
          >
            <option value="">Select a service</option>
            <option value="hairdressing">Hairdressing</option>
            <option value="skincare">Skincare</option>
            <option value="makeup">Makeup</option>
            <option value="hair-products">Hair Products</option>
            <option value="home-cleaning">Home Cleaning</option>
            <option value="packages">Special Packages</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
        ></textarea>
      </div>
      <div>
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;