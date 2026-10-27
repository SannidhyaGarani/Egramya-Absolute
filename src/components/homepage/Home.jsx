import React, { useState } from 'react';
import Hero from './Hero';
import Ecosystem from './Ecosystem';
import Verticals from './Verticals';
import EGramyaStoreSection from './EGramyaStoreSection';
import WhyGramya from './WhyGramya';
import Partners from './Partners';
import ProposalModal from '../ProposalModal';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialCta, setInitialCta] = useState('Partner With Us (CSR & Govt)');

  const handleOpenModal = (ctaType) => {
    setInitialCta(ctaType || 'Partner With Us (CSR & Govt)');
    setModalOpen(true);
  };

  return (
    <div className="bg-stone-50 overflow-hidden">
      {/* 1. Gramya Story Immediate 5-10s Hero */}
      <Hero onOpenModal={handleOpenModal} />

      {/* 2. Impact Platform: Visual Ecosystem Section */}
      <Ecosystem onOpenModal={handleOpenModal} />

      {/* 3. 6 Major Strategic Verticals */}
      <Verticals onOpenModal={handleOpenModal} />

      {/* 4. e-Gramya Store Dedicated Section (Rural Products & Stories) */}
      <EGramyaStoreSection onOpenModal={handleOpenModal} />

      {/* 5. Institutional Trust: Why Gramya? */}
      <WhyGramya onOpenModal={handleOpenModal} />

      {/* 6. Institutional Partnerships & Collaborators */}
      <Partners onOpenModal={handleOpenModal} />

      {/* Proposal Request & Partnership Modal */}
      <ProposalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCtaType={initialCta}
      />
    </div>
  );
}

export default Home;