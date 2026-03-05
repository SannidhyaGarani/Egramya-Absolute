import React from 'react';
import { motion } from 'framer-motion';

const CMDMessage = () => {
  const brandColor = "#eb008d";

  return (
    <section className="py-32 bg-stone-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image side with a "Signature" feel */}
          <div className="w-full lg:w-5/12 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/10 p-4">
                 <img 
                  src="https://www.absolutegramya.com/web-assets/images/team1.png?v=1.0" 
                  alt="CMD Portrait" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
              
              {/* Floating Name Tag */}
              <div className="absolute -bottom-6 -right-6 bg-white py-6 px-10 shadow-2xl">
                <p className="text-stone-900 font-bold tracking-widest text-xs uppercase mb-1">Founder & CMD</p>
                <p className="text-stone-500 font-serif italic text-sm">Absolute Gramya</p>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-white/40">Chairman's Welcome</h4>
              
              <h2 className="text-4xl md:text-5xl font-light leading-[1.15] mb-10">
                Building Rural Lives through <br />
                <span className="font-serif italic" style={{ color: brandColor }}>Innovation & Collaboration.</span>
              </h2>

              <div className="space-y-6 text-stone-400 font-light leading-relaxed">
                <p>
                  I am delighted to welcome you to the Gramya Website, which showcases our work to promote sustainable economic development and rural empowerment in India.
                </p>
                <p>
                  Our mission is to empower rural communities to take control of their economic futures. Our approach is demand-driven, identifying priorities and developing tailored interventions responsive to their specific context.
                </p>
                <p className="text-white border-l-[1px] pl-8 py-2 italic font-serif text-lg" style={{ borderColor: brandColor }}>
                  "I believe that empowering rural communities is essential for promoting sustainable economic growth and reducing poverty in India."
                </p>
              </div>

              <div className="mt-12">
                <button className="group relative flex items-center gap-6 overflow-hidden">
                   <span className="text-xs font-bold uppercase tracking-[0.3em]">Read the full letter</span>
                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-500">
                      <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                   </div>
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CMDMessage;