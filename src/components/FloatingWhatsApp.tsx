import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/918072582652"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-cyan text-background rounded-full shadow-lg shadow-black/50 hover:bg-white transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full border-2 border-cyan animate-ping opacity-40" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
