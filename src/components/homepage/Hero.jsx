import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, Building2, TrendingUp, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Hero = ({ onOpenModal }) => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-b from-amber-50/40 via-stone-50 to-white text-stone-900 pt-10 pb-20 overflow-hidden border-b border-stone-200/60">
      {/* Subtle Background Pattern & Ambient Light Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100/80 backdrop-blur-md border border-amber-300/80 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>{t('hero.tagline')}</span>
        </motion.div>

        {/* Grid Layout: Left Hero Text + Right Premium Card Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1]"
            >
              <span className="block text-stone-900">{t('hero.headlineMain')}</span>
              <span className="block bg-gradient-to-r from-amber-600 via-amber-700 to-emerald-700 bg-clip-text text-transparent">
                {t('hero.headlineEnterprise')}
              </span>
              <span className="block text-stone-600 font-serif-custom italic font-normal text-3xl sm:text-4xl md:text-5xl mt-1">
                {t('hero.headlineTransform')}
              </span>
            </motion.h1>

            {/* Subheading Positioning Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed text-justify-custom max-w-2xl"
            >
              {t('hero.subHeading')}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onOpenModal && onOpenModal('Partner With Us (CSR & Govt)')}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 via-amber-700 to-emerald-800 hover:from-amber-700 hover:to-emerald-900 text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-xl shadow-amber-600/25 flex items-center space-x-2 transition-all active:scale-95 hover:-translate-y-0.5"
              >
                <span>{t('hero.ctaPrimary')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#ecosystem"
                className="px-8 py-4 bg-white hover:bg-stone-100 text-stone-800 font-bold rounded-xl text-xs uppercase tracking-widest border border-stone-300 shadow-sm transition-all hover:border-stone-400"
              >
                {t('hero.ctaSecondary')}
              </a>

              <button
                onClick={() => onOpenModal && onOpenModal('Join as a Rural Entrepreneur')}
                className="px-4 py-4 text-stone-600 hover:text-amber-700 text-xs font-bold uppercase tracking-wider underline underline-offset-4 transition-colors"
              >
                {t('hero.ctaEntrepreneur')}
              </button>
            </motion.div>
          </div>

          {/* Right Column: Premium Hero Visual Card Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 relative group">
                <img
                  src="/Image/e3.png"
                  alt="Rural Enterprise Transformation"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
                
                {/* Image Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                    GRASSROOTS IMPACT
                  </span>
                  <h4 className="text-xl font-bold">Empowering SHGs & Rural Entrepreneurs</h4>
                  <p className="text-xs text-stone-200">Connecting local potential to sustainable national markets.</p>
                </div>
              </div>

              {/* Floating Glassmorphic Trust Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl p-5 rounded-2xl border border-stone-200 shadow-2xl space-y-1 hidden sm:block max-w-[220px]">
                <div className="flex items-center space-x-2 text-amber-600">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-extrabold uppercase tracking-wider">Trusted Ecosystem</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-snug">
                  Partnered with IIT Patna (FIST), MPCST Govt Dept & Universities.
                </p>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-stone-900 to-amber-950 text-white p-4 rounded-2xl border border-amber-500/30 shadow-xl flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <span className="block text-xl font-extrabold text-amber-400">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-300 font-bold">Market Linked</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 3 Core Questions Grid - Answered in 5-10 Seconds (Requirement 1 Light Luxury Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Question 1 Card */}
          <div className="bg-white/90 backdrop-blur-xl p-7 rounded-3xl border border-stone-200/90 shadow-xl hover:shadow-2xl hover:border-amber-400/60 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                5-Sec Answer 01
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-stone-900 mb-2">{t('hero.q1Title')}</h3>
            <p className="text-xs text-stone-600 leading-relaxed text-justify-custom font-medium">
              {t('hero.q1Answer')}
            </p>
          </div>

          {/* Question 2 Card */}
          <div className="bg-white/90 backdrop-blur-xl p-7 rounded-3xl border border-stone-200/90 shadow-xl hover:shadow-2xl hover:border-emerald-400/60 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                5-Sec Answer 02
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-stone-900 mb-2">{t('hero.q2Title')}</h3>
            <p className="text-xs text-stone-600 leading-relaxed text-justify-custom font-medium">
              {t('hero.q2Answer')}
            </p>
          </div>

          {/* Question 3 Card */}
          <div className="bg-white/90 backdrop-blur-xl p-7 rounded-3xl border border-stone-200/90 shadow-xl hover:shadow-2xl hover:border-amber-400/60 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                5-Sec Answer 03
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-stone-900 mb-2">{t('hero.q3Title')}</h3>
            <p className="text-xs text-stone-600 leading-relaxed text-justify-custom font-medium">
              {t('hero.q3Answer')}
            </p>
          </div>
        </motion.div>

        {/* Key Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
        >
          <div className="bg-white/80 p-4 rounded-2xl border border-stone-200 shadow-sm">
            <span className="block text-3xl font-extrabold text-amber-600">{t('hero.stat1Number')}</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">{t('hero.stat1Label')}</span>
          </div>
          <div className="bg-white/80 p-4 rounded-2xl border border-stone-200 shadow-sm">
            <span className="block text-3xl font-extrabold text-stone-900">{t('hero.stat2Number')}</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">{t('hero.stat2Label')}</span>
          </div>
          <div className="bg-white/80 p-4 rounded-2xl border border-stone-200 shadow-sm">
            <span className="block text-3xl font-extrabold text-emerald-700">{t('hero.stat3Number')}</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">{t('hero.stat3Label')}</span>
          </div>
          <div className="bg-white/80 p-4 rounded-2xl border border-stone-200 shadow-sm">
            <span className="block text-3xl font-extrabold text-amber-700">{t('hero.stat4Number')}</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">{t('hero.stat4Label')}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;