'use client';
import React from 'react';






import ProductHero from '@/components/products/ProductHero';
import AIShowcase from '@/components/products/AIShowcase';
import ProductFeatures from '@/components/products/ProductFeatures';
import UseCases from '@/components/products/UseCases';
import ServiceProcess from '@/components/products/ServiceProcess';
import ProductCTA from '@/components/products/ProductCTA';

const Products = () => {
  return (
    <div className="min-h-screen bg-[#080808]">
      <ProductHero/>
      <AIShowcase/>
      <ProductFeatures/>
      <UseCases/>
      <ServiceProcess/>
      <ProductCTA/>
    </div>
  );
};

export default Products; 