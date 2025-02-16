'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LineChart, Pencil, Settings, Handshake } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "Understanding your business needs and challenges",
    icon: <Handshake className="w-5 h-5" />,
    color: "#7C3AED"
  },
  {
    id: 2,
    title: "Solution Design",
    description: "Crafting custom AI solutions for your needs",
    icon: <Pencil className="w-5 h-5" />,
    color: "#4F46E5"
  },
  {
    id: 3,
    title: "Implementation",
    description: "Seamless integration with your systems",
    icon: <Settings className="w-5 h-5" />,
    color: "#2563EB"
  },
  {
    id: 4,
    title: "Support",
    description: "Continuous optimization and maintenance",
    icon: <LineChart className="w-5 h-5" />,
    color: "#7C3AED"
  }
];

const QuantumOrbital = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [containerDimensions, setContainerDimensions] = useState({ 
    width: 0, 
    height: 0 
  });

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track container dimensions
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setContainerDimensions({ width, height });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Update connection paths
  useEffect(() => {
    const updatePaths = () => {
      const container = containerRef.current;
      if (!container) return;

      const centerX = containerDimensions.width / 2;
      const centerY = containerDimensions.height / 2;
      const radius = Math.min(containerDimensions.width, containerDimensions.height) * 0.4;

      steps.forEach((_, i) => {
        const angle = (i * (360 / steps.length)) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        const path = pathsRef.current[i];
        if (path) {
          path.setAttribute('d', `M${centerX},${centerY} L${x},${y}`);
        }
      });
    };

    updatePaths();
  }, [containerDimensions]);

  // Hover animations
  const handleHover = (index: number) => {
    controls.start({
      scale: 1.1,
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.6 }
    });

    if (pathsRef.current[index]) {
      pathsRef.current[index].style.stroke = steps[index].color;
    }
  };

  const handleHoverEnd = (index: number) => {
    controls.start({ scale: 1, rotate: 0 });
    if (pathsRef.current[index]) {
      pathsRef.current[index].style.stroke = '#ffffff20';
    }
  };

  // Calculate orbital positions
  const getOrbitalPosition = (index: number) => {
    const radius = Math.min(containerDimensions.width, containerDimensions.height) * 0.5;
    const angle = (index * (360 / steps.length)) * (Math.PI / 180);
    
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle)
    };
  };

  return (
    <section className="w-full bg-black py-32 md:py-40 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Quantum Process Matrix
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 max-w-xl mx-auto"
        >
          Holographic visualization of our AI integration workflow
        </motion.p>
      </div>

      {!isMobile ? (
        // Desktop Orbital View
        <div 
          ref={containerRef}
          className="relative w-full h-[70vh] mx-auto flex items-center justify-center"
        >
          {/* Dynamic Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {steps.map((_, i) => (
              <motion.path
                key={i}
                ref={(el: SVGPathElement | null) => {
                  if (el) {
                    pathsRef.current[i] = el;
                  }
                }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="stroke-white/20"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </svg>

          {/* Central Core */}
          <motion.div 
            className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 
              flex items-center justify-center shadow-2xl shadow-purple-500/30"
            animate={controls}
            style={{ zIndex: 2 }}
          >
            <span className="text-white font-bold text-lg tracking-wider">AI CORE</span>
          </motion.div>

          {/* Orbital Nodes */}
          {steps.map((step, i) => {
            const position = getOrbitalPosition(i);

            return (
              <motion.div
                key={step.id}
                className="absolute w-40 origin-center cursor-pointer group"
                style={{
                  x: position.x,
                  y: position.y,
                  zIndex: 3
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: i * 0.1 }}
                onHoverStart={() => handleHover(i)}
                onHoverEnd={() => handleHoverEnd(i)}
              >
                <div className="relative p-3 bg-gray-900/80 backdrop-blur-lg rounded-xl border border-white/10 
                  transition-all duration-300 group-hover:border-[var(--color)]"
                  style={{ '--color': step.color } as React.CSSProperties}
                >
                  <div className="absolute inset-0 rounded-xl bg-[var(--color)]/10 blur-xl 
                    opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 mb-3 rounded-lg bg-[var(--color)]/20 flex items-center 
                      justify-center mx-auto transition-colors">
                      {React.cloneElement(step.icon, { className: 'w-5 h-5', style: { color: step.color } })}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        // Mobile Timeline View
        <div className="max-w-md mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Connection Line */}
              {i !== steps.length - 1 && (
                <div className="absolute left-5 top-16 w-0.5 h-16 bg-gradient-to-b from-[var(--color)] to-transparent"
                  style={{ '--color': step.color } as React.CSSProperties}
                />
              )}
              
              {/* Step Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative pl-14"
              >
                {/* Step Number Bubble */}
                <div 
                  className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${step.color}40, ${step.color}20)`,
                    border: `1px solid ${step.color}40`
                  }}
                >
                  <span className="text-white font-bold">{step.id}</span>
                </div>

                <div className="p-4 bg-gray-900/80 backdrop-blur-lg rounded-xl border border-white/10 
                  hover:border-[var(--color)] transition-all duration-300"
                  style={{ '--color': step.color } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color)]/20 flex items-center justify-center">
                      {React.cloneElement(step.icon, { 
                        className: 'w-4 h-4', 
                        style: { color: step.color } 
                      })}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm pl-11">{step.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default QuantumOrbital;