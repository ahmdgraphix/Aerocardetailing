import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingPlane: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to vertical and horizontal movement
  // Plane moves down and slightly right as you scroll down
  const yPos = useTransform(scrollYProgress, [0, 1], ['0vh', '80vh']);
  const xPos = useTransform(scrollYProgress, [0, 1], ['-10vw', '110vw']);
  const rotate = useTransform(scrollYProgress, [0, 1], [15, 30]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{
          y: yPos,
          x: xPos,
          rotate: rotate,
        }}
        className="absolute top-20 opacity-5"
      >
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          {/* Detailed plane outline */}
          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.3 2.6c-.2.4-.1 1 .3 1.3L9 14l-4 4-3-1-1 2 6 2 2 6 2-1-1-3 4-4 3.2 6.3c.3.4.9.5 1.3.3l2.6-1.3c.5-.2.8-.6.7-1.1z"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default FloatingPlane;
