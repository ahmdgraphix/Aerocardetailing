import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar as CalendarIcon, Plane, Settings } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    aircraft: 'Gulfstream G200',
    service: 'Full Premium Detailing',
    date: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const message = `Hello AeroCraft, I would like to request a booking.%0A%0A*Name:* ${formData.name}%0A*Aircraft Model:* ${formData.aircraft}%0A*Service:* ${formData.service}%0A*Preferred Date:* ${formData.date}%0A*Location/Airport:* ${formData.location}%0A%0APlease let me know the availability.`;
    window.open(`https://wa.me/918072582652?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 bg-surface/40 border border-cyan/20 rounded-xl p-8 md:p-16 max-w-4xl mx-auto shadow-2xl overflow-hidden">
        {/* Subtle texture/gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 relative z-10"
        >
          <h2 className="text-sm text-cyan tracking-[0.3em] uppercase mb-4">Priority Access</h2>
          <h3 className="text-3xl md:text-5xl font-display text-white">Book a Detailing Slot</h3>
          <p className="text-metallic/70 text-sm mt-4 max-w-md mx-auto font-light">
            Secure your preferred time for premium aviation detailing or charter turnaround support.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit} 
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-metallic/80 font-medium">Your Name / Company</label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe / Apex Aviation"
              className="bg-background/80 border border-surface/50 rounded-md px-4 py-3 text-white placeholder-metallic/30 focus:outline-none focus:border-cyan/50 transition-colors"
            />
          </div>

          {/* Aircraft Model */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-metallic/80 font-medium flex items-center gap-2">
              <Plane size={14} className="text-cyan" /> Aircraft Model
            </label>
            <select 
              name="aircraft"
              value={formData.aircraft}
              onChange={handleChange}
              className="bg-background/80 border border-surface/50 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan/50 transition-colors appearance-none"
            >
              <option>Gulfstream G200</option>
              <option>Falcon 6X</option>
              <option>Embraer Legacy 600 / 650</option>
              <option>Falcon 2000LX</option>
              <option>Hawker 900XP</option>
              <option>Other (Please specify in message)</option>
            </select>
          </div>

          {/* Service Type */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-metallic/80 font-medium flex items-center gap-2">
              <Settings size={14} className="text-cyan" /> Required Service
            </label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-background/80 border border-surface/50 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan/50 transition-colors appearance-none"
            >
              <option>Full Premium Detailing</option>
              <option>Exterior Detailing Only</option>
              <option>Interior Detailing Only</option>
              <option>Charter Turnaround Service</option>
              <option>Base Maintenance Program</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-metallic/80 font-medium flex items-center gap-2">
              <CalendarIcon size={14} className="text-cyan" /> Preferred Date
            </label>
            <input 
              required
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-background/80 border border-surface/50 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan/50 transition-colors"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs uppercase tracking-widest text-metallic/80 font-medium">Airport / Hangar Location</label>
            <input 
              required
              type="text" 
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Chennai International Airport (MAA)"
              className="bg-background/80 border border-surface/50 rounded-md px-4 py-3 text-white placeholder-metallic/30 focus:outline-none focus:border-cyan/50 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative flex items-center gap-3 bg-cyan text-background font-bold tracking-widest uppercase px-8 py-4 overflow-hidden"
            >
              <span className="relative z-10">Request via WhatsApp</span>
              <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </div>
          
          {/* Conditions */}
          <div className="md:col-span-2 mt-8 text-left border-t border-surface/50 pt-6">
            <p className="text-xs text-cyan uppercase tracking-wider mb-2 font-medium">*Conditions Apply:</p>
            <ol className="list-decimal list-inside text-xs text-metallic/70 font-light space-y-1.5">
              <li>All services shall be provided with a minimal notice period of 6 hrs LT</li>
              <li>Any service that has been requested for, but has not been utilised by the Client- would incur a minimal service charge to be borne by the Client</li>
            </ol>
          </div>
          
        </motion.form>
      </div>
    </section>
  );
};

export default Booking;
