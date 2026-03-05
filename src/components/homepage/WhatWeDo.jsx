import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Activities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const brandColor = "#eb008d";

  const activities = [
    "Skill Development Program", "Sustainable Economic Development", "Rural Artisan Talent Nurturing",
    "Village Cluster Development", "Retail & Market Access", "Community Development",
    "Holistic Village Development", "Employment Inducing Women", "Village Level Infra",
    "Health & Wellness", "Small Scale Industries", "Agro-Empowerment",
    "Village Ethics", "Village Level IT Services", "Social Activity Promotion"
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header with Architectural Layout */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6" style={{ color: brandColor }}>Our Ecosystem</h4>
            <h2 className="text-5xl md:text-7xl font-light text-stone-900 tracking-tighter">
              What <span className="font-serif italic text-stone-500">Gramya</span> <br /> Accomplishes.
            </h2>
          </div>
          <p className="text-stone-400 text-sm max-w-[280px] font-light leading-relaxed border-l border-stone-100 pl-6 mb-2">
            A comprehensive approach to rural transformation across 15+ strategic verticals.
          </p>
        </div>

        {/* The Luxury List */}
        <div className="relative">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-stone-100 py-8 cursor-pointer overflow-hidden"
            >
              {/* Magnetic Background Hover Effect (Desktop Only) */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    layoutId="hoverBg"
                    className="absolute inset-0 bg-stone-50 -z-0"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 flex items-center justify-between px-4">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-[10px] font-bold text-stone-300 group-hover:text-stone-900 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-3xl font-light text-stone-800 group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    {activity}
                  </h3>
                </div>
                
                {/* Brand Accent Icon */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                   <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: brandColor }}
                   >
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;