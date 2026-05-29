import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-32 px-4 md:px-8 max-w-7xl mx-auto bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: What is Aircraft Detailing */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-sm text-cyan tracking-[0.3em] uppercase mb-4">The Standard</h2>
          <h3 className="text-3xl md:text-4xl font-display mb-8 text-white">What is Aircraft Detailing?</h3>
          <div className="space-y-6 text-metallic/80 font-light leading-relaxed">
            <p>
              Aircraft detailing is a specialized aviation cleaning and restoration process that goes beyond regular aircraft cleaning. It involves deep interior sanitization, exterior polishing, stain removal, leather care, brightwork restoration, galley cleaning, cockpit care, and premium presentation enhancement.
            </p>
            <p>
              Unlike regular cleaning, aircraft detailing requires aviation-safe chemicals, specialized equipment, trained technicians, and careful handling of sensitive aircraft surfaces.
            </p>
          </div>
          
          <ul className="mt-8 space-y-3">
            {[
              "Maintain luxury cabin appearance",
              "Preserve aircraft value",
              "Improve passenger experience",
              "Protect paint and surfaces",
              "Extend interior material lifespan",
              "Ensure hygienic travel standards"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-metallic">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column: Mission & Vision */}
        <div className="space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-sm text-cyan tracking-[0.3em] uppercase mb-4">Our Vision</h2>
            <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
              To become India's most trusted premium aircraft detailing and aviation presentation company by delivering world-class detailing standards, luxury care, operational efficiency, and exceptional customer satisfaction for private aviation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-sm text-cyan tracking-[0.3em] uppercase mb-4">Our Mission</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Premium & affordable solutions",
                "Highest hygiene & luxury standards",
                "Fast turnaround support for charters",
                "Preserve aesthetics & long-term value",
                "Long-lasting partnerships",
                "Precision, professionalism & passion"
              ].map((item, i) => (
                <div key={i} className="p-4 border border-surface bg-surface/20 rounded-sm">
                  <p className="text-sm text-metallic/90 font-light">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indian Chopper Note & Gallery */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mt-32 border-t border-surface/50 pt-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-sm text-cyan tracking-[0.3em] uppercase mb-4">Comprehensive Coverage</h2>
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-3xl mx-auto">
            From heavy commercial jets to luxury supercars, we handle it all. <br/>
            <span className="text-cyan font-medium">All Indian Chopper & Helicopter cleaning services are also undertaken with VIP precision.</span>
          </p>
        </div>

        {/* AI Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="group overflow-hidden relative h-64 rounded-sm">
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src="/images/jet_interior.png" alt="Private Jet Interior" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="group overflow-hidden relative h-64 rounded-sm">
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src="/images/chopper.png" alt="Luxury Helicopter" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="group overflow-hidden relative h-64 rounded-sm">
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src="/images/jet_midflight.png" alt="Private Jet Exterior" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
