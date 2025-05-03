import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  external?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  external,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-sjsu-blue text-white hover:bg-sjsu-blue-dark focus:ring-sjsu-blue',
    secondary: 'bg-sjsu-gold text-sjsu-navy hover:bg-sjsu-gold-dark focus:ring-sjsu-gold',
    outline: 'border border-sjsu-blue text-sjsu-blue bg-transparent hover:bg-sjsu-lightgray focus:ring-sjsu-blue',
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (to) {
    if (external) {
      return (
        <a
          href={to}
          className={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={buttonStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;