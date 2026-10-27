import React, { useState } from 'react';
import Verticals from '../homepage/Verticals';
import ProposalModal from '../ProposalModal';
import { Sparkles, Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const VerticalsPage = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCta, setModalCta] = useState('Partner With Us (CSR & Govt)');

  const openModal = (cta) => {
    setModalCta(cta || 'Partner With Us (CSR & Govt)');
    setModalOpen(true);
  };

  return (
    <main className="bg-stone-50 pt-16">
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>CORE ARCHITECTURE</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Six Strategic Verticals
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-justify-custom">
            Gramya Rural Enterprise, Gramya Women (Lakhpati Didi), Gramya Skills, Gramya Agriculture & Dairy (Village Dairy Counsellor), Gramya E-Commerce, and Gramya Knowledge & Consultancy.
          </p>
        </div>
      </section>

      <Verticals onOpenModal={openModal} />

      <ProposalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCtaType={modalCta}
      />
    </main>
  );
};

export default VerticalsPage;
