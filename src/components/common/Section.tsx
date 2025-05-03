import React, { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`py-12 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && <h2 className="text-2xl md:text-3xl font-bold text-sjsu-navy mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          <div className="w-20 h-1 bg-sjsu-gold mx-auto mt-4"></div>
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;