'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const industries = [
  {
    name: 'Healthcare',
    impact: 'Revolutionized patient care through digital transformation',
    metrics: '40% improvement in patient engagement',
    icon: '🏥',
    color: 'from-blue-500/10'
  },
  {
    name: 'Finance',
    impact: 'Automated complex financial operations',
    metrics: '60% reduction in processing time',
    icon: '💹',
    color: 'from-green-500/10'
  },
  {
    name: 'E-commerce',
    impact: 'Enhanced customer shopping experience',
    metrics: '200% increase in conversion rates',
    icon: '🛍️',
    color: 'from-orange-500/10'
  },
  {
    name: 'Education',
    impact: 'Transformed learning through technology',
    metrics: '10,000+ students benefited',
    icon: '📚',
    color: 'from-purple-500/10'
  }
];

const IndustryImpact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#090909]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
            Industry Impact
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Our solutions have transformed businesses across various sectors, 
            delivering measurable results and driving innovation.
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} to-transparent opacity-10 rounded-xl group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="relative p-8 backdrop-blur-sm bg-black/20 rounded-xl border border-white/5">
                <span className="text-4xl mb-4 block">{industry.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {industry.impact}
                </p>
                <div className="text-orange-400 text-sm font-medium">
                  {industry.metrics}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryImpact; 