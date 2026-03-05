import React from 'react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const brandColor = "#eb008d";

  return (
    <main className="h-screen w-full bg-white flex items-center justify-center overflow-hidden relative">
      
      {/* Background Decorative Element - Large 404 Parallax */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[35vw] font-black text-stone-50/50 italic leading-none">
          404
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span 
            className="inline-block text-[10px] font-bold tracking-[0.6em] uppercase mb-8"
            style={{ color: brandColor }}
          >
            Unexpected Detour
          </span>
          
          <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight mb-8">
            A path yet to <br />
            <span className="font-serif italic text-stone-500 underline decoration-1 underline-offset-8">be developed.</span>
          </h1>

          <p className="text-stone-400 font-light max-w-md mx-auto leading-relaxed mb-12 text-sm md:text-base">
            It seems the page you are looking for has been moved or doesn't exist. Even the most structured development plans have a few unexpected turns.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Primary Action */}
            <a 
              href="/" 
              className="group relative flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900"
            >
              Back to the Mission
              <div className="w-10 h-[1px] bg-stone-200 group-hover:w-16 group-hover:bg-[#eb008d] transition-all duration-500" />
            </a>

            {/* Secondary Action */}
            <a 
              href="/contact" 
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 hover:text-stone-900 transition-colors"
            >
              Report an Issue
            </a>
          </div>
        </motion.div>
      </div>

      {/* Signature Vertical Brand Accent */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ backgroundColor: brandColor }}
      />
    </main>
  );
};

export default NotFoundPage;