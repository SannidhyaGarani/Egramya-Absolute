import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Heart, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const EGramyaStoreSection = ({ onOpenModal }) => {
  const { t } = useLanguage();

  const products = t('storeSection.featuredProducts') || [];

  return (
    <section id="store" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{t('storeSection.badge')}</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {t('storeSection.title')}
            </h2>
            <p className="text-amber-400 font-bold uppercase tracking-wider text-xs sm:text-sm">
              {t('storeSection.tagline')}
            </p>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed text-justify-custom pt-1">
              {t('storeSection.desc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/e-gramya-store"
              className="px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-amber-600/30 transition-all"
            >
              <span>{t('storeSection.cta')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Value Proposition Box: Emotional + Commercial Value */}
        <div className="mb-12 p-6 rounded-2xl bg-stone-950/80 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 fill-rose-500/30" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Emotional & Commercial Value Integration</h4>
              <p className="text-xs text-stone-300">
                {t('storeSection.commercialVsEmotional')}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-xs text-stone-400 font-semibold">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Verified Producers</span>
            </span>
            <span>•</span>
            <span>Direct Fair Trade Margins</span>
          </div>
        </div>

        {/* Featured Products Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(products) &&
            products.map((prod) => (
              <motion.div
                key={prod.id}
                whileHover={{ y: -6 }}
                className="bg-stone-950 rounded-3xl overflow-hidden border border-stone-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-stone-950/80 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-400 uppercase tracking-wider border border-white/10">
                      {prod.tag}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-extrabold text-stone-400 uppercase tracking-wider block">
                      PRODUCER: {prod.producer}
                    </span>

                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {prod.name}
                    </h3>

                    {/* Emotional Story snippet */}
                    <div className="bg-stone-900/80 p-3 rounded-xl border border-stone-800 text-[11px] text-stone-300 italic leading-relaxed">
                      "{prod.story}"
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-800/60 mt-4">
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Price</span>
                    <span className="text-sm font-extrabold text-amber-400">{prod.price}</span>
                  </div>

                  <button
                    onClick={() => onOpenModal && onOpenModal('Explore e-Gramya Products')}
                    className="px-4 py-2 bg-white/10 hover:bg-amber-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center space-x-1"
                  >
                    <span>Inquire / Buy</span>
                  </button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default EGramyaStoreSection;
