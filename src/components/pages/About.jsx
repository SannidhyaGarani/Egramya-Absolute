import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Building2, Users, Target, Compass, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import ProposalModal from '../ProposalModal';

const AboutPage = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCta, setModalCta] = useState('Partner With Us (CSR & Govt)');

  const openModal = (cta) => {
    setModalCta(cta || 'Partner With Us (CSR & Govt)');
    setModalOpen(true);
  };

  const standsFor = [
    { title: "Enterprise Creation", desc: "Building sustainable, market-linked rural micro-enterprises and producer collectives." },
    { title: "Women Livelihoods", desc: "Empowering SHGs, Lakhpati Didi tracks, and women-led rural business models." },
    { title: "Agro & Dairy Innovation", desc: "Scaling Village Dairy Counsellor Development Centres and clean milk value processing." },
    { title: "Employability & Skills", desc: "Delivering short-term vocational training, digital literacy, and placement support." },
    { title: "E-Commerce Marketplaces", desc: "Linking rural producers directly with national retail and institutional procurement." },
    { title: "Institutional Advisory", desc: "Research, baseline studies, project management, and strategic CSR consulting." }
  ];

  return (
    <main className="bg-stone-50 text-stone-900 pt-16">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-stone-900 to-stone-950" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-6"
          >
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>THE GRAMYA STORY</span>
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building Rural Lives. <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                Creating Rural Enterprises.
              </span>
            </h1>

            <p className="text-stone-300 text-base sm:text-xl font-normal leading-relaxed text-justify-custom pt-2">
              Absolute Gramya Private Limited is a rural-development and enterprise-building organisation working to create sustainable livelihoods by connecting people, skills, technology, markets and institutions.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => openModal('Partner With Us (CSR & Govt)')}
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-xl shadow-amber-600/30 flex items-center space-x-2 transition-all"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openModal('Request a Project Proposal')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-widest border border-white/20 transition-all"
              >
                Request Proposal
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL MISSION & PROPOSITION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
                STRATEGIC REPOSITIONING
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                From Conventional NGO to <span className="text-amber-600 font-serif-custom italic">Impact Platform</span>
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-justify-custom">
                Gramya represents a new paradigm in rural economic development. Moving beyond one-off aid or basic skill workshops, we deploy an end-to-end ecosystem: identifying local potential, building industry skills, incubating enterprises, branding produce, and integrating into national digital commerce.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <h4 className="text-xs font-extrabold uppercase text-amber-900 tracking-wider">Core Positioning Statement</h4>
                  <p className="text-sm font-bold text-amber-900 mt-1">
                    "Connecting Rural People, Skills, Technology, Enterprise and Markets for Sustainable Livelihoods."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
                <img
                  src="/Image/e3.png"
                  alt="Gramya Impact"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-stone-900 text-white p-6 rounded-2xl border border-stone-800 shadow-xl hidden sm:block">
                <span className="text-2xl font-extrabold text-amber-400 block">50,000+</span>
                <span className="text-xs uppercase tracking-wider text-stone-300">Rural Lives Impacted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDATIONAL PILLARS */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">FOUNDATIONAL PILLARS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">What Gramya Stands For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standsFor.map((item, idx) => (
              <div key={idx} className="glass-panel-dark p-6 rounded-2xl border border-stone-800 space-y-3">
                <span className="text-xs font-extrabold text-amber-400">PILLAR 0{idx + 1}</span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-stone-300 leading-relaxed text-justify-custom">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Modal */}
      <ProposalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCtaType={modalCta}
      />
    </main>
  );
};

export default AboutPage;