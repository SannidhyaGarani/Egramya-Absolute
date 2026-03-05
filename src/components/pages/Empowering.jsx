import React from 'react';
import { motion } from 'framer-motion';

const EmpoweringActivities = () => {
  const brandColor = "#eb008d";

  const interventions = [
    { title: "Economic Needs", desc: "Developing sustainable strategies for job creation, entrepreneurship, and market access." },
    { title: "Education", desc: "Supporting literacy, numeracy, and teacher resources to build a foundation for growth." },
    { title: "Health & Wellness", desc: "Improving medical access, maternal health, and disease prevention in rural clusters." },
    { title: "Environment", desc: "Promoting conservation, renewable energy, and sustainable resource management." },
    { title: "Skill Development", desc: "Vocational training and job placement to equip residents for the modern economy." },
    { title: "Income Plans", desc: "Identifying viable business opportunities and profitable, sustainable revenue models." }
  ];

  return (
    <main className="bg-white pt-20">
      {/* SECTION 1: HERO */}
      <section className="py-24 md:py-40 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#eb008d] mb-8 block"
              >
                Our Portfolio
              </motion.span>
              <h1 className="text-5xl md:text-8xl font-light text-stone-900 tracking-tighter leading-none mb-8">
                Empowering <br />
                <span className="font-serif italic text-stone-500">Activities.</span>
              </h1>
              <p className="text-xl text-stone-600 font-light leading-relaxed max-w-xl">
                Dedicated to meeting the needs of rural communities by promoting economic empowerment through tailored, agro-based initiatives.
              </p>
            </div>
            <div className="hidden lg:block w-px h-64 bg-stone-200 relative">
               <motion.div 
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-full bg-[#eb008d]"
               />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SUPPORTIVE INTERVENTIONS (The Grid) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="text-3xl font-light tracking-tight text-stone-900">Supportive Interventions</h2>
            <div className="h-[1px] w-24 bg-[#eb008d] mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100 border border-stone-100">
            {interventions.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "#fafaf9" }}
                className="bg-white p-12 transition-colors duration-500"
              >
                <span className="text-xs font-bold text-stone-300 mb-6 block uppercase tracking-widest">Sector {i + 1}</span>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: AGRO-EMPOWERMENT (The Visual Highlight) */}
      <section className="py-32 bg-stone-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-1/2">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#eb008d] mb-10">Agro-Based Economy</h4>
               <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                 Transforming <span className="font-serif italic text-stone-400">Subsistence</span> <br /> to Sustainable Business.
               </h2>
               <p className="text-stone-400 font-light leading-relaxed mb-12">
                 From crop diversification and livestock management to agroforestry, we help communities identify viable income-generating activities tailored to their unique resources.
               </p>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="border-l border-white/10 pl-6">
                    <p className="text-2xl font-serif italic mb-2">Value-Add</p>
                    <p className="text-xs text-stone-500 uppercase tracking-widest">Processing & Marketing</p>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <p className="text-2xl font-serif italic mb-2">Artisan Focus</p>
                    <p className="text-xs text-stone-500 uppercase tracking-widest">Talent Nurturing</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <div className="aspect-square bg-stone-900 rounded-sm overflow-hidden p-4 border border-white/5">
                  <img 
                    src="https://www.absolutegramya.com/web-assets/upload/pageimages/fd3c59e99a3df4784a378f84fdcb68fa.jpg" 
                    className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DEMAND-DRIVEN PROCESS (The Strategy) */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-light text-stone-900 mb-20">The <span className="font-serif italic text-stone-500">Demand-Driven</span> Approach</h2>
          
          <div className="relative">
             {/* Decorative Path Line */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-stone-100 -z-0 hidden md:block" />
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {[
                  { step: "Assessment", text: "Thorough analysis of economic, social, and environmental local factors." },
                  { step: "Design", text: "Customized interventions tailored to the specific context of each community." },
                  { step: "Capacity", text: "Building local ownership and supporting community-led development." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 border border-stone-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center mx-auto mb-6 group-hover:bg-[#eb008d]">
                      0{i+1}
                    </div>
                    <h4 className="text-lg font-bold mb-4">{item.step}</h4>
                    <p className="text-xs text-stone-500 font-light leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CALL TO ACTION */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-light text-stone-900 leading-tight mb-12">
             Together, we make a difference in the <span className="font-serif italic text-[#eb008d]">lives of rural communities.</span>
           </h2>
           <div className="h-16 w-[1px] bg-stone-300 mx-auto mb-12" />
           <p className="text-xs font-bold uppercase tracking-[0.4em] text-stone-400">Join the movement</p>
        </div>
      </section>
    </main>
  );
};

export default EmpoweringActivities;