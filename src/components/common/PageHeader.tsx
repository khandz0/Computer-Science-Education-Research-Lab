import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-sjsu-blue py-12 px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
        {subtitle && (
          <p className="text-sjsu-gold text-lg md:text-xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;