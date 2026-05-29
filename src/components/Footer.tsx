import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-surface/50 border-t border-surface pt-16 pb-8 px-4 md:px-8 mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
      >
        
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-xl md:text-2xl font-display tracking-widest text-white mb-4">AEROCRAFT</h2>
          <p className="text-cyan text-xs tracking-widest uppercase mb-6">Detailing Services</p>
          <p className="text-metallic/80 font-light text-sm max-w-md leading-relaxed">
            Precision • Luxury • Aviation Excellence. <br />
            Redefining presentation through precision, luxury, hygiene, and professional aviation detailing standards.
          </p>
        </div>

        {/* Quality & Safety */}
        <div>
          <h4 className="text-white font-display uppercase tracking-wide mb-6 text-sm">Operational Standards</h4>
          <ul className="space-y-3">
            {[
              "Strict safety procedures",
              "Confidentiality & discretion",
              "Aviation-approved products",
              "Time-efficient turnarounds"
            ].map((item, i) => (
              <li key={i} className="text-metallic/70 text-sm font-light flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display uppercase tracking-wide mb-6 text-sm">Contact Us</h4>
          <div className="space-y-4">
            <a href="https://wa.me/918072582652" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-metallic/80 hover:text-cyan transition-colors text-sm group">
              <Phone className="w-4 h-4 text-cyan group-hover:scale-110 transition-transform" />
              <span>+91 80725 82652</span>
            </a>
            <a href="mailto:shakeelahmedd1@outlook.com" className="flex items-center gap-3 text-metallic/80 hover:text-cyan transition-colors text-sm group">
              <Mail className="w-4 h-4 text-cyan group-hover:scale-110 transition-transform" />
              <span>shakeelahmedd1@outlook.com</span>
            </a>
            <div className="flex items-start gap-3 text-metallic/80 text-sm">
              <MapPin className="w-4 h-4 text-cyan mt-1 shrink-0" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

      </motion.div>

      <div className="max-w-7xl mx-auto border-t border-surface/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-metallic/50 font-light">
        <p>&copy; {new Date().getFullYear()} AeroCraft Detailing Services. All rights reserved.</p>
        <p className="uppercase tracking-wider">Premium Aircraft Detailing</p>
      </div>
    </footer>
  );
};

export default Footer;
