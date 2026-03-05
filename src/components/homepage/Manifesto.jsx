import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
  const brandColor = "#eb008d";

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-0">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pr-12 lg:border-r border-stone-100"
          >
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10" style={{ color: brandColor }}>Our Mission</h4>
            <h3 className="text-2xl font-light text-stone-900 leading-snug mb-6">
              A one-stop solution for <span className="font-serif italic text-stone-500">rural empowerment.</span>
            </h3>
            <p className="text-sm text-stone-500 font-light leading-relaxed">
              From Education and Agriculture to Health, Wellness, and Skill Development—we create sustainable income generation models that work.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:px-12 lg:border-r border-stone-100"
          >
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10" style={{ color: brandColor }}>Our Vision</h4>
            <p className="text-xl font-serif italic text-stone-800 leading-relaxed mb-6">
              "To create a more equitable and sustainable future for all through innovation and social responsibility."
            </p>
            <p className="text-sm text-stone-500 font-light leading-relaxed">
              Empowering communities through village-level IT services and a deep commitment to environmental stewardship.
            </p>
          </motion.div>

          {/* Team Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:pl-12"
          >
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10" style={{ color: brandColor }}>Expertise</h4>
            <h3 className="text-2xl font-light text-stone-900 leading-snug mb-6">
              Guided by <span className="font-bold">Seasoned Professionals.</span>
            </h3>
            <p className="text-sm text-stone-500 font-light leading-relaxed mb-8">
              Our team comprises experts in rural development, agro-economics, and sustainable income planning.
            </p>
            <a href="#" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] group">
              Know More 
              <span className="w-8 h-[1px] bg-stone-200 group-hover:w-12 transition-all duration-300" style={{ backgroundColor: brandColor }} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;