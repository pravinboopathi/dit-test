'use client';
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-orange-400 font-medium uppercase tracking-wider mb-4">
            {subtitle}
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-gray-400 text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
