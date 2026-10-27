import React, { useState } from 'react';
import Ecosystem from '../homepage/Ecosystem';
import ProposalModal from '../ProposalModal';
import { Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const EcosystemPage = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCta, setModalCta] = useState('Start a Rural Enterprise Programme');

  const openModal = (cta) => {
    setModalCta(cta || 'Start a Rural Enterprise Programme');
    setModalOpen(true);
  };

  return (
    <main className="bg-stone-50 pt-16">
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
            <Layers className="w-4 h-4" />
            <span>IMPACT PLATFORM ARCHITECTURE</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Rural Enterprise Ecosystem
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-justify-custom">
            Shift from basic organization profiles to a multi-stage impact engine: connecting rural people to vocational skills, micro-enterprise incubation, digital branding, e-commerce, and market scale.
          </p>
        </div>
      </section>

      {/* Main Interactive Ecosystem Component */}
      <Ecosystem onOpenModal={openModal} />

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-stone-200 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Ready to Deploy the Gramya Ecosystem in Your District?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Collaborate with our rural development specialists to implement the 8-stage enterprise building pipeline for CSR, Government, or University initiatives.
          </p>
          <button
            onClick={() => openModal('Start a Rural Enterprise Programme')}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-xl shadow-amber-600/30 inline-flex items-center space-x-2"
          >
            <span>Start a Rural Enterprise Programme</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <ProposalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCtaType={modalCta}
      />
    </main>
  );
};

export default EcosystemPage;
