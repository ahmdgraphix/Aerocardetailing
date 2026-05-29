import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Sparkles, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Precision Inspection & Prep',
    icon: ClipboardCheck,
    description: 'We begin with a meticulous assessment of the aircraft exterior and interior, identifying specific detailing requirements, stains, and material sensitivities.'
  },
  {
    id: 2,
    title: 'Deep Restoration & Cleaning',
    icon: Sparkles,
    description: 'Using aviation-approved compounds, we execute deep cabin sanitization, leather conditioning, exterior dry washing, and brightwork polishing.'
  },
  {
    id: 3,
    title: 'Premium Protection & Handover',
    icon: ShieldCheck,
    description: 'We apply ceramic coatings and protective sealants to ensure long-lasting elegance, followed by a final VIP readiness inspection before departure.'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const Process: React.FC = () => {
  return (
    <section id="process" className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto bg-background">
      <div className="mb-20 text-center">
        <h2 className="text-sm text-cyan tracking-[0.3em] uppercase mb-4">How We Work</h2>
        <h3 className="text-3xl md:text-5xl font-display text-white">The AeroCraft Process</h3>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-surface/50 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-surface border border-surface/50 flex items-center justify-center mb-8 relative group-hover:border-cyan/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500">
                <step.icon className="w-10 h-10 text-cyan" strokeWidth={1.5} />
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan text-background font-bold flex items-center justify-center font-display text-sm">
                  {step.id}
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-display text-white mb-4 uppercase tracking-wide">{step.title}</h4>
              <p className="text-metallic/70 text-sm font-light leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
