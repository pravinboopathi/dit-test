'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Stat {
  label: string;
  value: string;
}

const StatisticsBar: React.FC<{ stats: Stat[] }> = ({ stats }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div className="bg-[#0C0C0C] py-8 mt-12">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatisticsBar; 