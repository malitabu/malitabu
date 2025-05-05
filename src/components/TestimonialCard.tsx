import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  rating: number;
}

const TestimonialCard = ({ quote, name, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-accent-400' : 'text-secondary-200'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <p className="text-secondary-600 italic mb-6 flex-grow">{quote}</p>
      <div>
        <h4 className="font-medium text-secondary-800">{name}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;