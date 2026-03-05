import React from 'react';
import { motion } from 'framer-motion';

const VisionMissionPage = () => {
  const brandColor = "#eb008d";

  const sectors = [
    "Education", "Agriculture", "Health & Wellness", 
    "Environment", "Village IT Services", "Skill Development", 
    "Sustainable Income"
  ];

  const pyramidLayers = [
    { level: "01", title: "Grassroots Foundation", desc: "Education & Health Wellness" },
    { level: "02", title: "Infrastructure & Tech", desc: "Village Level IT & Environment" },
    { level: "03", title: "Economic Engine", desc: "Agro-Empowerment & Skill Dev" },
    { level: "04", title: "Sustainable Peak", desc: "Inclusive Economic Growth" }
  ];

  return (
    <main className="bg-white pt-20">
      {/* 1. CINEMATIC HERO: The Identity */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-stone-950 text-white">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <span className="absolute top-10 left-10 text-[20vw] font-black leading-none uppercase tracking-tighter">Mission</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-[#eb008d]" />
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-stone-400">The One-Stop Solution</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-light leading-[0.95] tracking-tighter mb-10">
              Rural <br />
              <span className="font-serif italic" style={{ color: brandColor }}>Empowerment</span> <br />
              Redefined.
            </h1>
            <p className="text-xl text-stone-400 font-light leading-relaxed">
              Gramya is the definitive ecosystem for rural transformation, bridging the gap between traditional heritage and modern economic potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE ECOSYSTEM GRID: 7 Sectors */}
      <section className="py-24 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            {sectors.map((sector, i) => (
              <div key={i} className="group flex items-center gap-4 px-6 py-3 border border-stone-100 rounded-full hover:border-[#eb008d] transition-all duration-500 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-200 group-hover:bg-[#eb008d] transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-stone-900">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION & PHILOSOPHY: The Split Manifesto */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#eb008d] mb-10">Our Vision</h4>
              <p className="text-3xl md:text-4xl font-serif italic text-stone-800 leading-snug mb-8">
                "To empower rural communities and promote sustainable development through partnerships, innovation, and environmental responsibility."
              </p>
              <p className="text-stone-500 font-light leading-relaxed">
                We aim to create a more equitable and sustainable future for all by working closely with village-level stakeholders and state institutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              className="bg-stone-50 p-12 md:p-16 border-l-4"
              style={{ borderLeftColor: brandColor }}
            >
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-8">Building Rural Lives</h4>
              <p className="text-stone-700 leading-relaxed font-light italic mb-6">
                "We uphold the belief that it is necessary to complement and supplement the efforts of the nation and state if we must bring about a qualitative change in rural lives."
              </p>
              <div className="w-12 h-[1px] bg-stone-300" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. THE RURAL DEVELOPMENT PYRAMID: Modern Interpretation */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-4">Impact Structure</h4>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900">Rural Development <span className="font-serif italic">Pyramid</span></h2>
          </div>

          <div className="space-y-4">
            {pyramidLayers.map((layer, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white border border-stone-200 p-8 flex flex-col md:flex-row justify-between items-center hover:shadow-2xl transition-all duration-500 cursor-default overflow-hidden"
                style={{ width: `${60 + (i * 10)}%`, margin: '0 auto' }} // This creates the pyramid shape visually
              >
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <span className="text-xs font-bold tracking-widest text-[#eb008d]">{layer.level}</span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-stone-900">{layer.title}</h3>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">{layer.desc}</p>
                  </div>
                </div>
                
                {/* Visual Accent */}
                <div className="absolute right-0 top-0 h-full w-0 group-hover:w-2 transition-all duration-500" style={{ backgroundColor: brandColor }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE CLOSING PROMISE: Sustainability */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-12 inline-block">
                <svg className="w-12 h-12 mx-auto mb-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={brandColor} fillOpacity="0.2" />
                    <circle cx="12" cy="12" r="2" fill={brandColor} />
                </svg>
                <div className="h-[1px] w-24 bg-stone-100 mx-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 leading-relaxed mb-8">
              "Our customized solutions ensure that every initiative is <span className="font-serif italic text-stone-500 underline decoration-1 underline-offset-8">effective, scalable, and deeply sustainable.</span>"
            </h2>
            <button className="group relative px-12 py-5 overflow-hidden rounded-full bg-stone-900 transition-all duration-300">
                <div 
                  className="absolute inset-0 w-0 transition-all duration-300 ease-out group-hover:w-full"
                  style={{ backgroundColor: brandColor }}
                />
                <span className="relative text-xs font-bold uppercase tracking-widest text-white">Join Our Mission</span>
            </button>
        </div>
      </section>
    </main>
  );
};

export default VisionMissionPage;