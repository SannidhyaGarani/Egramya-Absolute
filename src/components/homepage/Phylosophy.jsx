import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const brandColor = "#eb008d";

  return (
    <section ref={container} className="relative py-40 bg-stone-950 overflow-hidden">
      {/* Background Parallax Text */}
      <motion.div 
        style={{ x }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[25vw] font-black text-white/[0.03] select-none pointer-events-none uppercase italic"
      >
        Building Rural Lives
      </motion.div>

      {/* Decorative Glow */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20"
        style={{ backgroundColor: brandColor }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span 
            className="inline-block text-[10px] font-bold tracking-[0.6em] uppercase mb-12"
            style={{ color: brandColor }}
          >
            The Absolute Philosophy
          </span>
          
          <h2 className="text-3xl md:text-6xl font-light text-white leading-[1.3] mb-16">
            We believe in <span className="font-serif italic text-stone-400">complementing the nation’s effort</span> to bring qualitative change to every <span className="underline decoration-1 underline-offset-[12px] opacity-80">rural heartbeat.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left border-t border-white/10 pt-16">
            <p className="text-stone-400 font-light leading-relaxed">
              Gramya upholds the belief that it is necessary to supplement state efforts to transform lives. We don't just implement; we innovate.
            </p>
            <p className="text-stone-400 font-light leading-relaxed">
              Through strategic partnerships, we implement social and environmentally friendly projects that forge a new path for rural India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;