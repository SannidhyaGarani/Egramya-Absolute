import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const brandColor = "#eb008d";

  return (
    <section className="py-32 bg-stone-50 relative overflow-hidden">
      {/* Large Watermark Background Text */}
      <div className="absolute top-10 left-10 text-[15vw] font-black text-stone-200/40 select-none pointer-events-none tracking-tighter">
        GROWTH
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative z-10 aspect-[3/4] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="Image/egramya.png" 
                  alt="Community Impact" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Brand Accent Border */}
              <div 
                className="absolute -top-4 -right-4 w-full h-full border-[0.5px] -z-0"
                style={{ borderColor: brandColor }}
              />
            </motion.div>
          </div>

          {/* Content side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              {/* Vertical Spine */}
              <div 
                className="absolute left-0 top-0 w-[1px] h-full bg-stone-200"
              >
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '40%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="w-full" 
                    style={{ backgroundColor: brandColor }}
                />
              </div>

              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-stone-400 block mb-6">
                Our Legacy & Mission
              </span>
              
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight mb-8">
                The absolute <br /> 
                <span className="font-serif italic text-stone-600">potential</span> of <br />
                <span className="font-bold underline decoration-1 underline-offset-8" style={{ textDecorationColor: brandColor }}>Gramya.</span>
              </h2>

              <div className="space-y-6 max-w-md">
                <p className="text-stone-500 font-light leading-relaxed">
                  Absolute Gramya is a Rural Development and Economic Empowerment company based in India. We aim to empower rural communities through sustainable development and agro-based interventions.
                </p>
                <p className="text-stone-400 text-sm italic font-serif leading-relaxed">
                  "Our approach integrates modern demand-driven strategies with traditional agricultural roots to foster a self-sustaining ecosystem."
                </p>
              </div>

              {/* Stats as Minimalist Art */}
              <div className="grid grid-cols-2 gap-12 pt-12 mt-12 border-t border-stone-200">
                <div>
                  <span className="block text-2xl font-light text-stone-900 mb-1">100<span style={{ color: brandColor }}>%</span></span>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400">Rural Focus</span>
                </div>
                <div>
                  <span className="block text-2xl font-light text-stone-900 mb-1">Impact</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400">Economic Model</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;