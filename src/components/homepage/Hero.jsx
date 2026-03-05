import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const brandColor = "#eb008d";

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
      {/* Background Architectural Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50/50 -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[1px] w-8" style={{ backgroundColor: brandColor }} />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-stone-500">
                Economic Empowerment
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-stone-900 mb-8 leading-[0.95]">
              Empowering <br />
              <span className="italic font-serif text-stone-800">Rural Roots</span> <br />
              <span className="font-black tracking-normal">for the Future.</span>
            </h1>
            
            <p className="text-lg text-stone-500 mb-12 leading-relaxed max-w-lg font-light">
              Agro and Income Generating Activities. Demand Driven Rural Economic Interventions designed for lasting impact.
            </p>

            <div className="flex flex-wrap gap-6">
              <button 
                className="group relative px-10 py-4 overflow-hidden rounded-full bg-stone-900 transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 w-0 transition-all duration-300 ease-out group-hover:w-full"
                  style={{ backgroundColor: brandColor }}
                />
                <span className="relative text-xs font-bold uppercase tracking-widest text-white">
                  Explore Our Vision
                </span>
              </button>
              
              <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-900">
                <span>Our Work</span>
                <span className="w-10 h-[1px] bg-stone-300 group-hover:w-16 group-hover:bg-stone-900 transition-all duration-300" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image - Gallery Style */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
              <img 
                src="https://www.absolutegramya.com/web-assets/images/rural-womennew.jpg" 
                alt="Rural Landscape" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </div>
            
            {/* Floating Detail Box */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl hidden md:block max-w-[200px]">
                <p className="text-[40px] font-serif italic leading-none mb-2" style={{ color: brandColor }}>12k+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Lives Impacted across rural India</p>
            </div>
          </motion.div>
          
          {/* Decorative Back-frame */}
          <div 
            className="absolute top-10 -right-6 w-full h-full border border-stone-100 rounded-2xl -z-0" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;