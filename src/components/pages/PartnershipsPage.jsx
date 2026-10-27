import React, { useState } from 'react';
import Partners from '../homepage/Partners';
import WhyGramya from '../homepage/WhyGramya';
import ProposalModal from '../ProposalModal';
import { Landmark, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PartnershipsPage = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCta, setModalCta] = useState('Become a Gramya Partner');

  const openModal = (cta) => {
    setModalCta(cta || 'Become a Gramya Partner');
    setModalOpen(true);
  };

  return (
    <main className="bg-white pt-16">
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
            <Landmark className="w-4 h-4" />
            <span>INSTITUTIONAL SYNERGY</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Partners & Collaborators
          </h1>
          <p className="text-amber-400 font-bold uppercase tracking-wider text-xs sm:text-sm">
            Who do we work with and why
          </p>
          <p className="text-stone-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-justify-custom">
            Building formal institutional credibility with technology institutes (FIST, IIT Patna), state science councils (MPCST), universities (AISECT), and corporate CSR partners.
          </p>
        </div>
      </section>

      <Partners onOpenModal={openModal} />

      <WhyGramya onOpenModal={openModal} />

      <ProposalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCtaType={modalCta}
      />
    </main>
  );
};

export default PartnershipsPage;
