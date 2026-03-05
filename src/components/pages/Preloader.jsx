import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const brandColor = "#eb008d";

  // Animation variants for the letters/words
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1], // Custom power ease
        delay: 0.5
      }
    }
  };

  const childVars = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-950 text-white"
    >
      <div className="flex flex-col items-center">
        {/* Animated Brand Name */}
        <div className="overflow-hidden flex gap-4 mb-2">
          <motion.span variants={childVars} className="text-3xl md:text-5xl font-black tracking-[0.2em]">
            ABSOLUTE
          </motion.span>
        </div>
        
        <div className="overflow-hidden h-6">
          <motion.span 
            variants={childVars} 
            className="text-xs md:text-sm font-bold tracking-[0.6em] uppercase block"
            style={{ color: brandColor }}
          >
            Gramya
          </motion.span>
        </div>

        {/* Minimal Progress Line */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[1px] bg-white/20 mt-12 relative overflow-hidden"
        >
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-1/2 h-full bg-[#eb008d]"
          />
        </motion.div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ backgroundColor: brandColor }} />
      </div>
    </motion.div>
  );
};

export default Preloader;