import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [phase, setPhase] = useState<'spinning' | 'opening' | 'done'>('spinning');

  useEffect(() => {
    // 1. Show engine spinning for 2.5s
    const t1 = setTimeout(() => setPhase('opening'), 2500);
    // 2. Finish opening after 1s
    const t2 = setTimeout(() => setPhase('done'), 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
        
        {/* Top Door */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: phase === 'opening' ? '-100%' : 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className={`absolute top-0 left-0 right-0 h-1/2 bg-background z-40 transition-colors duration-300 ${phase === 'opening' ? 'border-b border-cyan/50' : 'border-b border-transparent'}`}
        />
        
        {/* Bottom Door */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: phase === 'opening' ? '100%' : 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className={`absolute bottom-0 left-0 right-0 h-1/2 bg-background z-40 transition-colors duration-300 ${phase === 'opening' ? 'border-t border-cyan/50' : 'border-t border-transparent'}`}
        />

        {/* Content Container (Fades out before doors open) */}
        <AnimatePresence>
          {phase !== 'opening' && (
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-50 flex flex-col items-center justify-center w-full h-full overflow-hidden"
            >
              {/* Whooshing Air Particles */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
                {/* Horizontal speed lines */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[1px] bg-cyan/40"
                    style={{
                      width: Math.random() * 150 + 50 + 'px',
                      top: Math.random() * 100 + '%',
                      right: '-20%'
                    }}
                    animate={{
                      x: ['0vw', '-140vw'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: Math.random() * 0.8 + 0.4,
                      delay: Math.random() * 2,
                      ease: "linear"
                    }}
                  />
                ))}
                
                {/* Circular wind streams wrapping the engine */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`circle-${i}`}
                    className="absolute rounded-full border-t border-cyan/30"
                    style={{
                      width: (i + 1) * 200 + 'px',
                      height: (i + 1) * 200 + 'px',
                    }}
                    animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
                    transition={{
                      rotate: { repeat: Infinity, duration: 2 - (i * 0.4), ease: "linear" },
                      scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                    }}
                  />
                ))}
              </div>

              {/* Spinning Icon Container */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-32 h-32 md:w-48 md:h-48 text-cyan opacity-90 relative z-10"
              >
                {/* Engine SVG */}
                <svg 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full"
                >
                  <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="10" fill="currentColor" />
                  <path d="M50 40 C 60 20, 70 20, 50 2 Z" fill="currentColor" opacity="0.8" />
                  <path d="M50 40 C 60 20, 70 20, 50 2 Z" fill="currentColor" opacity="0.8" transform="rotate(72 50 50)" />
                  <path d="M50 40 C 60 20, 70 20, 50 2 Z" fill="currentColor" opacity="0.8" transform="rotate(144 50 50)" />
                  <path d="M50 40 C 60 20, 70 20, 50 2 Z" fill="currentColor" opacity="0.8" transform="rotate(216 50 50)" />
                  <path d="M50 40 C 60 20, 70 20, 50 2 Z" fill="currentColor" opacity="0.8" transform="rotate(288 50 50)" />
                </svg>
              </motion.div>
              
              <div className="mt-12 text-center relative z-10">
                <h2 className="text-xl md:text-3xl font-display font-bold tracking-[0.3em] text-white">AEROCRAFT</h2>
                <p className="text-xs text-cyan mt-3 tracking-widest uppercase">
                  Aviation & Chopper Detailing
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </AnimatePresence>
  );
};

export default Preloader;
