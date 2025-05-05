import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductCategory from './ProductCategory';
import { productData } from '../data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'hair', label: 'Hair & Wigs' },
    { id: 'cosmetics', label: 'Cosmetics' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'nails', label: 'Nail Care' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? productData 
    : productData.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-[#f9ebe5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Premium Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of beauty essentials and fashion accessories, all designed to enhance your natural beauty.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category) => (
              <ProductCategory 
                key={category.id}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </ProductCategory>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/+256779558005?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20your%20products." 
            className="inline-flex items-center px-6 py-3 bg-[#e39c85] hover:bg-[#d67e60] text-white font-medium rounded-md transition-colors duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;