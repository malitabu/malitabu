import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.isBestseller && (
          <div className="absolute top-3 right-3 bg-[#d2a062] text-white text-xs font-medium px-3 py-1 rounded-full">
            Bestseller
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-serif text-lg mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-[#4d4840]">{product.price}</span>
          <a 
            href={`https://wa.me/+256779558005?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}.`}
            className="text-[#e39c85] hover:text-[#d67e60] text-sm font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;