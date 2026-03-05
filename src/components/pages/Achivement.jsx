import React from "react";
import { motion } from "framer-motion";

const AchievementsPage = () => {
  const brandColor = "#eb008d";

  const moUs = [
    { title: "Scope Global Skill University (SGSU)", type: "Skill Intervention" },
    { title: "FIST IIT Patna", type: "Technical Innovation" },
    { title: "IHM Bhopal", type: "Millet Development & Promotion" }
  ];

  const digital = [
    {
      name: "E Gramya Portal",
      desc: "National & International market awareness for rural products."
    },
    {
      name: "E Panchayat Portal",
      desc: "Implementing good governance and transparency in local systems."
    },
    {
      name: "Gramya E-Store",
      desc: "State-of-the-art e-Commerce platform for direct-to-consumer sales."
    }
  ];

  return (
    <main className="bg-white pt-20">

      {/* HERO SECTION */}
      <section className="py-24 md:py-40 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#eb008d] rounded-full blur-[180px] opacity-10 -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-stone-400 mb-8 block">
              Proven Impact
            </span>

            <h1 className="text-5xl md:text-8xl font-light leading-none tracking-tighter mb-10">
              Defining <br />
              <span className="font-serif italic text-stone-500">Excellence.</span>
            </h1>

            <div className="h-[1px] w-24 bg-[#eb008d]" />
          </motion.div>
        </div>
      </section>

      {/* GLOBAL EXPANSION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">

            <div className="w-full lg:w-1/2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#eb008d] mb-6">
                Global Expansion
              </h4>

              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-8">
                Establishing the <span className="font-serif italic">Dubai Market Center</span>
              </h2>

              <p className="text-stone-500 font-light leading-relaxed text-lg">
                Our landmark achievement in establishing an international hub for exporting agro
                products, bridging Indian rural artisans with the global marketplace.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="aspect-video bg-stone-100 relative group overflow-hidden border border-stone-100">

                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80"
                  alt="Dubai Market Center"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />

                <div className="absolute inset-0 border-[20px] border-white" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MOUs SECTION */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-20">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-stone-400 mb-4">
              Strategic Alliances
            </h3>

            <h2 className="text-4xl font-light text-stone-900">
              Institutional <span className="font-serif italic text-stone-500">MOUs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {moUs.map((mou, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 border-b-2 transition-all duration-500 shadow-sm"
                style={{ borderBottomColor: brandColor }}
              >

                <div className="text-[10px] font-bold text-stone-300 mb-6 tracking-widest uppercase">
                  Memorandum of Understanding
                </div>

                <h4 className="text-xl font-bold text-stone-900 mb-4 leading-tight">
                  {mou.title}
                </h4>

                <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                  {mou.type}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* DIGITAL ECOSYSTEM */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#eb008d] mb-10">
                Digital Ecosystem
              </h4>

              <h2 className="text-4xl font-light text-stone-900 mb-12">
                Pioneering <span className="font-serif italic text-stone-500">Tech-Led</span> Rural Governance.
              </h2>

              <div className="space-y-12">

                {digital.map((item, i) => (
                  <div key={i} className="group">

                    <h5 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-[#eb008d] transition-colors">
                      {item.name}
                    </h5>

                    <p className="text-sm text-stone-500 font-light leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="h-px w-full bg-stone-100 mt-6" />

                  </div>
                ))}

              </div>
            </div>

            <div className="bg-stone-950 p-16 flex flex-col justify-center relative">

              <h3 className="text-3xl font-serif italic text-white mb-8">
                Aajeevika Smwardhan Centers
              </h3>

              <p className="text-stone-400 font-light leading-relaxed mb-10">
                Launched to bridge the gap between Self-Help Groups (SHG) and the formal market,
                creating a dedicated space for the promotion of rural products.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white group"
              >
                Visit Centers
                <span className="w-10 h-px bg-[#eb008d] group-hover:w-16 transition-all duration-500" />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-32 bg-stone-50 border-t border-stone-100">

        <div className="max-w-3xl mx-auto px-6 text-center">

          <p className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed italic font-serif">
            "These milestones are not just signatures on paper; they are the architectural
            blueprints of a modern, empowered rural India."
          </p>

        </div>

      </section>

    </main>
  );
};

export default AchievementsPage;