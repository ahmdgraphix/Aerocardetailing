import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Armchair, Clock, Utensils, Calendar } from 'lucide-react';

const services = [
  {
    id: 'exterior',
    title: 'Exterior Detailing',
    icon: Sparkles,
    description: 'Complete exterior wash, dry wash services, ceramic protection coating, brightwork polishing, and surface protection treatment.',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    bgImage: 'bg-gradient-to-br from-surface to-background',
  },
  {
    id: 'interior',
    title: 'Interior Detailing',
    icon: Armchair,
    description: 'Deep cabin cleaning, leather seat conditioning, carpet shampooing, touchpoint disinfection, and wood veneer care.',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
    bgImage: 'bg-gradient-to-tr from-surface via-background to-surface',
  },
  {
    id: 'turnaround',
    title: 'Charter Turnaround',
    icon: Clock,
    description: 'Fast and efficient support for private charter operations. Quick interior refresh, trash removal, and passenger presentation setup.',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
    bgImage: 'bg-gradient-to-bl from-surface to-background',
  },
  {
    id: 'crockery',
    title: 'Crockery & Culinary',
    icon: Utensils,
    description: 'Luxury crockery cleaning, silverware polishing, glassware sanitization, and VIP presentation preparation.',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    bgImage: 'bg-gradient-to-t from-surface to-background',
  },
  {
    id: 'base',
    title: 'Base Programs',
    icon: Calendar,
    description: 'Weekly detailing schedules, monthly protection treatments, interior preservation plans, and VIP readiness inspections.',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    bgImage: 'bg-gradient-to-b from-surface to-background',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto bg-background">
      <div className="mb-16 text-center">
        <h2 className="text-sm text-cyan tracking-[0.3em] uppercase mb-4">Excellence In Every Detail</h2>
        <h3 className="text-3xl md:text-5xl font-display text-white">Our Services</h3>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service) => (
          <motion.div 
            key={service.id}
            variants={itemVariants}
            className={`${service.colSpan} ${service.bgImage} p-8 border border-surface/50 rounded-lg relative overflow-hidden group hover:border-cyan/30 transition-colors duration-500 flex flex-col justify-between min-h-[250px]`}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <service.icon className="w-10 h-10 text-cyan mb-6 stroke-[1.5]" />
              <h4 className="text-xl md:text-2xl text-white font-display mb-4">{service.title}</h4>
              <p className="text-sm text-metallic/80 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
