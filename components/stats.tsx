'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 290, label: 'Employees', suffix: '+' },
  { value: 103, label: 'Users', suffix: 'k+' },
  { value: 2500, label: 'Customers', suffix: '+' },
  { value: 16, label: 'Trainers', suffix: '' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount >= end) {
          clearInterval(timer);
          return end;
        }
        return newCount;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};

export default function StatsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0a0a0f] via-[#0d0c13] to-[#0a0a0f]">
      {/* Top fade gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0f] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 py-24 relative ">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 sm:p-16 text-white relative overflow-hidden"
        >
          {/* Updated background with new colors */}
          <div className="absolute inset-0 bg-[#0d0c13]" />
          
          {/* Updated gradient overlays */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br border border-gray-400 from-blue-900 via-purple-900 to-red-900 opacity-40" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center mb-16">
              Let's dive into our numbers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-5xl font-bold mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-gray-300 text-xl">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
