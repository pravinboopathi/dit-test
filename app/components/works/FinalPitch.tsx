import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const FinalPitch = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-20" />
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Ready to Build Something <span className="text-orange-400">Extraordinary?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Let's transform your vision into reality with cutting-edge technology and exceptional design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Link 
              href="/contact" 
              className="px-8 py-4 border border-orange-900 text-white rounded-full hover:bg-orange-600 transition-colors font-semibold"
            >
              Contact Us Now
            </Link>
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalPitch; 