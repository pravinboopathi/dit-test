'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const processSteps = [
  {
    title: 'Discovery',
    description: 'Understanding your business needs and objectives',
    icon: '🔍',
    color: 'from-orange-400'
  },
  {
    title: 'Strategy',
    description: 'Crafting the perfect solution blueprint',
    icon: '🎯',
    color: 'from-red-400'
  },
  {
    title: 'Development',
    description: 'Bringing ideas to life with cutting-edge tech',
    icon: '⚡',
    color: 'from-orange-400'
  },
  {
    title: 'Launch',
    description: 'Deploying and ensuring smooth operations',
    icon: '🚀',
    color: 'from-red-400'
  }
];

const ProcessShowcase = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-gray-400">
            A streamlined approach to delivering exceptional results
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} to-transparent opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative p-6 text-center">
                <span className="text-4xl mb-4 block">{step.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessShowcase; 