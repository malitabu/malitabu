import React from 'react';

interface ProductCategoryProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ 
  children, 
  isActive, 
  onClick 
}) => {
  return (
    <button
      className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive 
          ? 'bg-[#e39c85] text-white' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ProductCategory;