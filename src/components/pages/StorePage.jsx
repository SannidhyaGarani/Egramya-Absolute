import React, { useState } from 'react';
import EGramyaStoreSection from '../homepage/EGramyaStoreSection';
import ProposalModal from '../ProposalModal';
import { ShoppingBag, Heart, ShieldCheck, Truck, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const StorePage = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCta, setModalCta] = useState('Explore e-Gramya Products');

  const openModal = (cta) => {
    setModalCta(cta || 'Explore e-Gramya Products');
    setModalOpen(true);
  };

  return (
    <main className="bg-stone-900 text-white pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
            <ShoppingBag className="w-4 h-4" />
            <span>DIGITAL MARKETPLACE</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            e-Gramya Store — Rural Products, Rural Stories
          </h1>
          <p className="text-amber-400 font-bold uppercase tracking-widest text-xs sm:text-sm">
            From Rural Producer to National Consumer
          </p>
          <p className="text-stone-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-justify-custom pt-1">
            Connecting authentic rural artisans, tribal collectors, and smallholder farmers directly to households and institutional procurement across India.
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-8 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-stone-300">
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Direct Fair Margins to Women SHGs</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Certified Organic & Artisanal</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>Pan-India Logistics & Supply Chain</span>
          </div>
        </div>
      </section>

      <EGramyaStoreSection onOpenModal={openModal} />

      <ProposalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCtaType={modalCta}
      />
    </main>
  );
};

export default StorePage;
