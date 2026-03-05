import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const brandColor = "#eb008d";

  const offices = [
    {
      city: "Bhopal",
      country: "India Office",
      type: "Registered Office",
      address: "162 Modi Heights, 4th floor, Zone II, MP Nagar, Bhopal, Madhya Pradesh",
      email: "info@absolutegramya.com",
      phones: ["+91 7880095369", "7880094664", "7880094658"]
    },
    {
      city: "Dubai",
      country: "Global Office",
      type: "International Hub",
      address: "2101, DAMAC Business Tower, Business Bay, Dubai (U.A.E)",
      email: "global@absolutegramya.com",
      phones: ["Available on Request"]
    }
  ];

  return (
    <main className="bg-white pt-20">
      {/* 1. HERO: The Invitation */}
      <section className="py-24 md:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold tracking-[0.6em] uppercase text-stone-400 mb-8 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-light text-stone-900 leading-[0.95] tracking-tighter mb-12"
            >
              Let’s build a <br />
              <span className="font-serif italic text-stone-500">better future</span> <br />
              together.
            </motion.h1>
            <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed">
              Contact us today to learn more about how we can help your community achieve its full potential.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT SECTION: Split Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h3 className="text-2xl font-light text-stone-900 mb-8">Send a Message</h3>
              <form className="space-y-8">
                <div className="relative group">
                  <input type="text" placeholder="Full Name" className="w-full py-4 bg-transparent border-b border-stone-200 focus:border-[#eb008d] outline-none transition-all font-light" />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#eb008d] group-focus-within:w-full transition-all duration-500" />
                </div>
                <div className="relative group">
                  <input type="email" placeholder="Email Address" className="w-full py-4 bg-transparent border-b border-stone-200 focus:border-[#eb008d] outline-none transition-all font-light" />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#eb008d] group-focus-within:w-full transition-all duration-500" />
                </div>
                <div className="relative group">
                  <textarea rows="4" placeholder="How can we help your community?" className="w-full py-4 bg-transparent border-b border-stone-200 focus:border-[#eb008d] outline-none transition-all font-light resize-none" />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#eb008d] group-focus-within:w-full transition-all duration-500" />
                </div>
                <button className="group relative flex items-center gap-6 pt-4">
                   <span className="text-xs font-bold uppercase tracking-[0.3em]">Send Inquiry</span>
                   <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500">
                      <svg className="w-4 h-4 text-stone-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                   </div>
                </button>
              </form>
            </motion.div>

            {/* Offices Side */}
            <div className="space-y-20">
              {offices.map((office, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 w-[1px] h-full bg-stone-100">
                    <div className="absolute top-0 left-0 w-full h-12" style={{ backgroundColor: i === 0 ? brandColor : '#stone-900' }} />
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 block mb-2">{office.country}</span>
                  <h4 className="text-3xl font-light text-stone-900 mb-6 font-serif italic">{office.city}</h4>
                  
                  <div className="space-y-6 text-sm text-stone-500 font-light leading-relaxed">
                    <p className="max-w-xs">{office.address}</p>
                    <div className="space-y-1">
                      <p className="text-stone-900 font-medium">{office.email}</p>
                      {office.phones.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOSING: High-Impact Statement */}
      <section className="py-32 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           {/* Abstract world connection map background placeholder */}
           <div className="w-full h-full border-[0.5px] border-white/10 rounded-full scale-150 -translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-12">
              Together, we can create a <br /> 
              <span className="font-serif italic text-stone-500">brighter future</span> for <br />
              rural communities.
            </h2 >
            <span className="text-xs font-bold uppercase tracking-[0.6em] text-[#eb008d]">Join us today</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;