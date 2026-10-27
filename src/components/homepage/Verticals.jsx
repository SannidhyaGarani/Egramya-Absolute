import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  HeartHandshake,
  GraduationCap,
  ShoppingBag,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Milk
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Verticals = ({ onOpenModal }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const list = t('verticals.list') || [];

  const iconsMap = {
    enterprise: Building2,
    women: HeartHandshake,
    skills: GraduationCap,
    dairy: Milk,
    ecommerce: ShoppingBag,
    consultancy: BookOpen
  };

  return (
    <section id="verticals" className="py-24 bg-stone-50 text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('verticals.badge')}</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            {t('verticals.title')}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed text-justify-custom">
            {t('verticals.subtitle')}
          </p>
        </div>

        {/* 6 Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(list) &&
            list.map((vertical, idx) => {
              const IconComponent = iconsMap[vertical.id] || Building2;
              const isDairy = vertical.id === 'dairy';

              return (
                <motion.div
                  key={vertical.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-3xl p-8 border ${
                    isDairy
                      ? 'border-amber-400 shadow-xl ring-2 ring-amber-400/20 relative'
                      : 'border-stone-200/80 shadow-md hover:shadow-xl'
                  } transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
                >
                  {isDairy && (
                    <div className="absolute -top-3.5 right-6 px-3 py-1 bg-amber-500 text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow">
                      FEATURED CONCEPT
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Top Icon & Vertical Code */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-stone-100 group-hover:bg-amber-50 text-stone-800 group-hover:text-amber-600 flex items-center justify-center transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-stone-200 group-hover:text-amber-500/40 transition-colors">
                        VERTICAL {vertical.code}
                      </span>
                    </div>

                    {/* Vertical Title & Tagline */}
                    <div>
                      <h3 className="text-xl font-extrabold text-stone-900 group-hover:text-amber-600 transition-colors">
                        {vertical.title}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mt-0.5">
                        {vertical.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify-custom">
                      {vertical.desc}
                    </p>

                    {/* Prominent Concept Highlight Box if Dairy */}
                    {isDairy && (
                      <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl space-y-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 block">
                          ⭐ Village Dairy Counsellor Development Centre
                        </span>
                        <p className="text-[11px] text-amber-900 leading-relaxed">
                          Empowering rural youth as certified Village Dairy Counsellors to manage clean milk collection, animal health advisory, and dairy processing.
                        </p>
                      </div>
                    )}

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 pt-2 border-t border-stone-100">
                      {vertical.highlights &&
                        vertical.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start space-x-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Context-Specific Action CTA Button */}
                  <div className="pt-6 mt-6 border-t border-stone-100">
                    <button
                      onClick={() => onOpenModal && onOpenModal(vertical.cta)}
                      className="w-full py-3 px-4 bg-stone-900 hover:bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between group-hover:shadow-lg transition-all"
                    >
                      <span>{vertical.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
