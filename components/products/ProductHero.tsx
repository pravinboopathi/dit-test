'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProductHero = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-white">AI-Powered Solutions</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                For Your Business
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              From intelligent chatbots to smart automation tools, we create custom AI solutions that drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/products" className="inline-block">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base">
                  Explore Products
                </button>
              </Link>
              
              <Link href="/contact" className="inline-block">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-orange-500/20 text-white rounded-full hover:bg-orange-500/10 transition-colors text-sm sm:text-base">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative w-full max-w-[500px] lg:max-w-[600px] mx-auto mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl blur-xl" />
              
              {/* Dashboard frame */}
              <div className="relative z-10 bg-[#1C1C1C] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl">
                {/* Browser-like top bar */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/60" />
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="relative aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src="/images/productHero.jpg"
                    alt="AI Dashboard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                  />
                </div>
                
                {/* Floating stats - Hidden on smaller screens */}
                <div className="hidden sm:block absolute -right-6 top-1/3 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">
                  <div className="text-sm text-white">AI Performance</div>
                  <div className="text-2xl font-bold text-orange-400">98.5%</div>
                </div>
                
                <div className="hidden sm:block absolute -left-6 bottom-1/3 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">
                  <div className="text-sm text-white">Processing</div>
                  <div className="text-2xl font-bold text-purple-400">2.1M</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero; 