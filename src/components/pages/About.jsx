import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const brandColor = "#eb008d";

  const standsFor = [
    { title: "Agro-Economy", desc: "Empowering Agro-economy and Agri-preneurship in the state." },
    { title: "Employment", desc: "Establishing growing rural enterprises and scaling existing sustainable models." },
    { title: "BDS Growth", desc: "Developing the capacity of local Business Development Services (BDS) Providers." },
    { title: "Market Networks", desc: "Developing a sustainable marketing network for rural enterprises." },
    { title: "Stakeholder Forums", desc: "Addressing rural enterprise issues at district and national levels." },
    { title: "Knowledge Capacity", desc: "Managing businesses effectively, sustainably, and productively." }
  ];

  return (
    <main className="bg-white pt-20">
      {/* 1. HERO SECTION: The Declaration */}
      <section className="relative py-24 md:py-40 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-stone-400 mb-8 block">
              About Absolute Gramya
            </span>
            <h1 className="text-5xl md:text-8xl font-light text-stone-900 leading-[0.95] tracking-tighter mb-12">
              Empowering communities. <br />
              <span className="font-serif italic text-stone-500">Creating legacy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
              Gramya is a Private Limited Company formed to express a mission of empowering communities and creating opportunities for the <span className="text-stone-900 font-normal">underprivileged rural development.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY: The Values Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {['Transparency', 'Accountability', 'Sustainability'].map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-0 w-[1px] h-full bg-stone-200">
                  <div className="w-full h-8 bg-[#eb008d] absolute top-0" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-stone-900 mb-4">{value}</h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  We value {value.toLowerCase()} in all our operations, working closely with community members to tailor solutions that meet unique challenges effectively.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRANSFORMATION: The "From-To" Visual */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-12">
                Witnessing the <br /> <span className="font-serif italic text-stone-500">Transformation</span>
              </h2>
              <div className="space-y-12">
                {[
                  { from: "Subsistence Agriculture", to: "Thriving Agribusinesses" },
                  { from: "Illiteracy", to: "Quality Education" },
                  { from: "Limited Healthcare", to: "Improved Medical Services" }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-center gap-6 text-stone-400 group-hover:text-stone-900 transition-colors">
                      <span className="text-xs uppercase tracking-widest">{item.from}</span>
                      <div className="h-[1px] flex-grow bg-stone-100 group-hover:bg-[#eb008d] transition-all duration-500" />
                      <span className="text-lg font-serif italic">{item.to}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden shadow-2xl">
                <img src="Image/e2.png"
                  alt="Impact" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#eb008d] p-12 text-white hidden md:block">
                <p className="text-4xl font-light tracking-tighter">Meaningful <br /> Impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC GOALS: Gramya Stands For */}
      <section className="py-32 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-24">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#eb008d] mb-6">Foundational Pillars</h4>
            <h2 className="text-5xl font-light tracking-tighter">Gramya Stands For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {standsFor.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="text-4xl font-serif italic text-white/10 group-hover:text-[#eb008d]/40 transition-colors duration-500">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold tracking-tight mb-4 mt-2">{item.title}</h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed group-hover:text-stone-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ARTISAN HIGHLIGHT: The Nurturing Program */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 border border-stone-100 p-12 md:p-24 relative overflow-hidden">
          {/* Background Decorative Graphic */}
          <div className="absolute -top-24 -right-24 w-64 h-64 border border-stone-50 rounded-full" />

          <div className="relative z-10 text-center">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#eb008d] mb-8">Cultural Preservation</h4>
            <h2 className="text-3xl md:text-5xl font-light text-stone-900 leading-tight mb-8">
              Our Rural Artisan <br /> <span className="font-serif italic text-stone-500">Talent Nurturing Program</span>
            </h2>
            <p className="text-stone-500 font-light leading-relaxed max-w-2xl mx-auto text-lg mb-12">
              We are dedicated to preserving traditional art forms while creating economic opportunities for rural artisans, ensuring that heritage lives alongside progress.
            </p>
            <button className="group flex items-center gap-4 mx-auto text-xs font-bold uppercase tracking-[0.3em] text-stone-900">
              Explore the Program
              <div className="w-10 h-[1px] bg-stone-200 group-hover:w-16 group-hover:bg-[#eb008d] transition-all duration-300" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;