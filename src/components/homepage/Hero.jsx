import React from "react";
import { motion } from "framer-motion";

const RedesignedHero = () => {
  const brandColor = "#eb008d";

  return (
    <section className="relative bg-white pt-32 pb-24 overflow-hidden">

      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-white -z-10" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#eb008d]/5 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-stone-500 mb-6 block">
            Empowering Rural Communities
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-stone-900 mb-6">
            Building <span className="font-serif italic">Sustainable Livelihoods</span> for Rural India
          </h1>

          {/* Description */}
          <p className="text-lg text-stone-600 leading-relaxed max-w-lg mb-10">
            We empower rural women, youth, and farmers through skill development,
            market linkages, and technology-driven initiatives that create lasting
            economic opportunities.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">

            <button
              className="px-8 py-3 text-sm font-semibold rounded-full text-white transition-all"
              style={{ backgroundColor: brandColor }}
            >
              Discover Our Work
            </button>

            <button className="px-8 py-3 text-sm font-semibold rounded-full border border-stone-300 text-stone-700 hover:bg-stone-50 transition">
              View Impact
            </button>

          </div>

          {/* Impact Stats */}
          <div className="flex gap-10 mt-14">

            <div>
              <p className="text-3xl font-bold text-stone-900">12K+</p>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Lives Impacted
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-stone-900">50+</p>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Villages Reached
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-stone-900">20+</p>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Programs
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-100">
            <img
              src="Image/e3.png"
              alt="Rural empowerment"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 left-8 bg-white shadow-xl rounded-2xl px-8 py-5 border border-stone-100">

            <p className="text-2xl font-bold" style={{ color: brandColor }}>
              10+ Years
            </p>

            <p className="text-xs uppercase tracking-wider text-stone-500">
              Rural Development Work
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default RedesignedHero;