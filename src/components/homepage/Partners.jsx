import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, GraduationCap, Building, Award, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Partners = ({ onOpenModal }) => {
  const { t } = useLanguage();

  const partnersList = t('partners.list') || [];

  const icons = [Award, Landmark, GraduationCap, Building];

  return (
    <section id="partners" className="py-24 bg-white text-stone-900 relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest border border-amber-200">
            <Landmark className="w-3.5 h-3.5 text-amber-700" />
            <span>{t('partners.badge')}</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            {t('partners.title')}
          </h2>
          <p className="text-amber-700 font-bold uppercase tracking-wider text-xs sm:text-sm">
            {t('partners.subtitle')}
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-justify-custom pt-1">
            {t('partners.rationale')}
          </p>
        </div>

        {/* Partners Grid with Explanatory Rationale ("Who do we work with and why") */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Array.isArray(partnersList) &&
            partnersList.map((partner, idx) => {
              const IconComp = icons[idx] || Landmark;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-stone-50 p-8 rounded-3xl border border-stone-200 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="px-3 py-1 bg-amber-500/10 text-amber-800 text-[11px] font-extrabold uppercase tracking-wider rounded-full border border-amber-200">
                        {partner.type}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white text-stone-800 flex items-center justify-center shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Partner Name */}
                    <h3 className="text-2xl font-extrabold text-stone-900 group-hover:text-amber-600 transition-colors">
                      {partner.name}
                    </h3>

                    {/* Rationale Explanation: Who do we work with and why */}
                    <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                        COLLABORATION RATIONALE & OBJECTIVE
                      </span>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed text-justify-custom">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Formal Institutional Synergy
                    </span>
                    <button
                      onClick={() => onOpenModal && onOpenModal(`Become a Gramya Partner (${partner.name})`)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 uppercase tracking-wider flex items-center space-x-1"
                    >
                      <span>Explore Synergy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* CTA Card for New Partners */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 p-8 sm:p-12 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Are You a Government Dept, CSR Trust, or University?</h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
              Collaborate with Absolute Gramya Private Limited to design, implement, and scale tech-enabled rural livelihood and enterprise projects.
            </p>
          </div>
          <button
            onClick={() => onOpenModal && onOpenModal('Become a Gramya Partner')}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-xl shadow-amber-600/30 flex-shrink-0 transition-colors"
          >
            {t('partners.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
