import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Target, Cpu, Link2, Landmark, UserCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WhyGramya = ({ onOpenModal }) => {
  const { t } = useLanguage();

  const pillars = t('whyGramya.pillars') || [];

  const icons = [Compass, Target, Cpu, Link2, Landmark, UserCheck];

  return (
    <section id="why-gramya" className="py-24 bg-stone-100 text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-stone-900 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t('whyGramya.badge')}</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            {t('whyGramya.title')}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed text-justify-custom">
            {t('whyGramya.subtitle')}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(pillars) &&
            pillars.map((pillar, idx) => {
              const IconComp = icons[idx] || Compass;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify-custom">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-stone-400">
                    <span>TRUST PILLAR 0{idx + 1}</span>
                    <span className="text-emerald-600 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Operational Standard
                    </span>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default WhyGramya;
