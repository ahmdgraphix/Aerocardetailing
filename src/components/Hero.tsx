import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center z-10">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-background/30 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10" />
        <img 
          src="/images/new_hero_bg.png" 
          alt="Luxury Private Jet"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.8, ease: [0.16, 1, 0.3, 1] }} // delay after preloader
        >
          <p className="text-white text-lg md:text-xl font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-lg">
            Welcome to AeroCraft Detailing Services
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
            <span className="block text-white text-shadow-lg">PRECISION.</span>
            <span className="block text-metallic/80 mt-2">LUXURY.</span>
            <span className="block text-cyan mt-2">AVIATION EXCELLENCE.</span>
          </h1>
          <p className="text-metallic/90 font-medium max-w-xl mx-auto text-base md:text-lg leading-relaxed drop-shadow-md">
            Premium Aircraft Detailing & Turnaround Support for Private Aviation. We deliver absolute perfection for your most valuable assets.
          </p>
          
          <div className="mt-12">
            <a href="#services" className="inline-block px-8 py-4 bg-transparent border border-cyan/50 text-cyan uppercase tracking-widest text-sm hover:bg-cyan/10 transition-colors duration-300 relative overflow-hidden group">
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-cyan/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <span className="text-xs text-metallic/50 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-metallic/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-cyan"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
