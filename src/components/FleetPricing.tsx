import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fleetData = [
  {
    id: 'g200',
    name: 'Gulfstream G200',
    image: '/images/jet_midflight.png',
    pricing: [
      { service: 'Exterior Detailing', price: '₹45,000 – ₹60,000' },
      { service: 'Interior Detailing', price: '₹35,000 – ₹50,000' },
      { service: 'Full Premium Detailing', price: '₹75,000 – ₹1,00,000' },
      { service: 'Charter Turnaround Service', price: '₹12,000 – ₹18,000' }
    ]
  },
  {
    id: 'falcon6x',
    name: 'Falcon 6X',
    image: '/images/hero_jet.png',
    pricing: [
      { service: 'Exterior Detailing', price: '₹55,000 – ₹75,000' },
      { service: 'Interior Detailing', price: '₹45,000 – ₹65,000' },
      { service: 'Full Premium Detailing', price: '₹95,000 – ₹1,30,000' },
      { service: 'Charter Turnaround Service', price: '₹15,000 – ₹22,000' }
    ]
  },
  {
    id: 'legacy600',
    name: 'Embraer Legacy 600 / 650',
    image: '/images/jet_interior.png',
    pricing: [
      { service: 'Exterior Detailing', price: '₹50,000 – ₹70,000' },
      { service: 'Interior Detailing', price: '₹40,000 – ₹60,000' },
      { service: 'Full Premium Detailing', price: '₹85,000 – ₹1,20,000' },
      { service: 'Charter Turnaround Service', price: '₹14,000 – ₹20,000' }
    ]
  },
  {
    id: 'falcon2000lx',
    name: 'Falcon 2000LX',
    image: '/images/jet_midflight.png',
    pricing: [
      { service: 'Exterior Detailing', price: '₹55,000 – ₹80,000' },
      { service: 'Interior Detailing', price: '₹45,000 – ₹65,000' },
      { service: 'Full Premium Detailing', price: '₹1,00,000 – ₹1,40,000' },
      { service: 'Charter Turnaround Service', price: '₹16,000 – ₹22,000' }
    ]
  },
  {
    id: 'chopper',
    name: 'Helicopters & Choppers',
    image: '/images/chopper.png',
    pricing: [
      { service: 'Exterior Polish & Wax', price: '₹25,000 – ₹45,000' },
      { service: 'VIP Cabin Detailing', price: '₹20,000 – ₹35,000' },
      { service: 'Rotor & Blade Cleaning', price: '₹15,000 – ₹25,000' },
      { service: 'Full Premium Heli Turnaround', price: '₹50,000 – ₹85,000' }
    ]
  },
  {
    id: 'heavy',
    name: 'Heavy Jets & Commercial',
    image: '/images/heavy_jet.png',
    pricing: [
      { service: 'Exterior Dry Wash (Body)', price: '₹75,000 – ₹1,20,000' },
      { service: 'Deep Cabin Extraction (Seats/Carpet)', price: '₹60,000 – ₹90,000' },
      { service: 'Full Turnaround & Galley Detailing', price: '₹1,00,000 – ₹1,80,000' },
      { service: 'Exterior Wet Wash & Degreasing', price: '₹90,000 – ₹1,50,000' }
    ]
  },
  {
    id: 'hawker900xp',
    name: 'Hawker 900XP',
    image: '/images/hero_jet.png',
    pricing: [
      { service: 'Exterior Detailing', price: '₹40,000 – ₹55,000' },
      { service: 'Interior Detailing', price: '₹30,000 – ₹45,000' },
      { service: 'Full Premium Detailing', price: '₹70,000 – ₹95,000' },
      { service: 'Charter Turnaround Service', price: '₹10,000 – ₹16,000' }
    ]
  }
];

const addOns = [
  { service: 'Ceramic Coating', price: 'Starting ₹40,000' },
  { service: 'Leather Restoration', price: 'Starting ₹15,000' },
  { service: 'Odor Elimination Treatment', price: 'Starting ₹8,000' },
  { service: 'Carpet Deep Extraction', price: 'Starting ₹12,000' },
  { service: 'Brightwork Restoration', price: 'Starting ₹18,000' },
  { service: 'Overnight VIP Preparation', price: 'Starting ₹20,000' },
  { service: 'Galley Deep Cleaning', price: 'Starting ₹10,000' }
];

const FleetPricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState(fleetData[0].id);
  
  const activeData = fleetData.find(f => f.id === activeTab);

  return (
    <section id="pricing" className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm text-cyan tracking-[0.3em] uppercase mb-4">Fleet Care Packages</h2>
        <h3 className="text-3xl md:text-5xl font-display text-white">Pricing & Models</h3>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row gap-12 lg:gap-16"
      >
        
        {/* Left: Tab Selector & Image */}
        <div className="lg:w-1/2 flex flex-col">
          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-surface/50 pb-4">
            {fleetData.map((fleet) => (
              <button
                key={fleet.id}
                onClick={() => setActiveTab(fleet.id)}
                className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors duration-300 relative ${
                  activeTab === fleet.id ? 'text-white' : 'text-metallic/50 hover:text-metallic'
                }`}
              >
                {fleet.name}
                {activeTab === fleet.id && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-[-16px] left-0 right-0 h-0.5 bg-cyan"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-surface/50 bg-surface">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData?.id}
                src={activeData?.image}
                alt={activeData?.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

        {/* Right: Pricing Details */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="bg-surface/10 border border-surface/50 p-6 md:p-8 rounded-lg mb-8 min-h-[300px]">
            <h4 className="text-2xl font-display text-white mb-6 uppercase tracking-wide">
              {activeData?.name} Packages
            </h4>
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData?.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {activeData?.pricing.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-surface/30 pb-4 last:border-0 last:pb-0">
                      <span className="text-metallic text-sm md:text-base font-light">{item.service}</span>
                      <span className="text-white text-sm md:text-base font-medium whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Add-Ons Section */}
          <div className="bg-background border border-cyan/20 p-6 md:p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h4 className="text-lg font-display text-cyan mb-6 uppercase tracking-wide relative z-10">
              Optional Add-On Services
            </h4>
            <div className="flex flex-col gap-y-4 relative z-10">
              {addOns.map((addon, index) => (
                <div key={index} className="flex items-end justify-between text-xs md:text-sm group">
                  <span className="text-metallic/80 font-light">{addon.service}</span>
                  <div className="flex-1 mx-4 border-b border-dashed border-surface/50 group-hover:border-cyan/50 transition-colors mb-1.5" />
                  <span className="text-white font-medium whitespace-nowrap">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default FleetPricing;
