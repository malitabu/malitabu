import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-serif text-3xl md:text-4xl font-medium mb-3 ${light ? 'text-white' : 'text-secondary-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-secondary-100' : 'text-secondary-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-16 mt-4 bg-primary-400 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;