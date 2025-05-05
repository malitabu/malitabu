import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseStyle = 'inline-block rounded-md text-center transition-all duration-300 font-medium';
  
  const variantStyles = {
    primary: 'bg-primary-400 hover:bg-primary-500 text-white',
    secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800',
    outline: 'border border-primary-400 text-primary-400 hover:bg-primary-50',
    accent: 'bg-accent-400 hover:bg-accent-500 text-white',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-5 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Internal link
  if (to) {
    return (
      <Link to={to} className={buttonStyle}>
        {children}
      </Link>
    );
  }
  
  // External link
  if (href) {
    return (
      <a href={href} className={buttonStyle} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  // Button
  return (
    <button className={buttonStyle} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;