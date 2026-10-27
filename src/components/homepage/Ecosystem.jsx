import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Search,
  GraduationCap,
  Briefcase,
  PackageCheck,
  Tag,
  MonitorCheck,
  ShoppingBag,
  TrendingUp,
  Layers,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Ecosystem = ({ onOpenModal }) => {
  const { t } = useLanguage();
  const [activeStage, setActiveStage] = useState(0);

  const icons = [
    Search,
    GraduationCap,
    Briefcase,
    PackageCheck,
    Tag,
    MonitorCheck,
    ShoppingBag,
    TrendingUp
  ];

  const flowSteps = t('ecosystem.flowSteps') || [];
  const stages = t('ecosystem.stages') || [];

  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-b from-white via-stone-50 to-amber-50/20 text-stone-900 relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-900 text-xs font-extrabold uppercase tracking-widest border border-emerald-300/80 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t('ecosystem.badge')}</span>
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            {t('ecosystem.title')}
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed text-justify-custom font-normal">
            {t('ecosystem.subtitle')}
          </p>
        </div>

        {/* Visual Macro Flow (Rural People -> Skills -> Enterprise -> Products -> Digital Market -> Income -> Sustainable Rural Economy) */}
        <div className="mb-16 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xl relative">
          <div className="flex items-center justify-between mb-6 border-b border-stone-100 pb-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-700 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{t('ecosystem.flowTitle')}</span>
            </h3>
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider hidden sm:inline-block">
              End-to-End Market Integration
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {Array.isArray(flowSteps) &&
              flowSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-full bg-stone-50 hover:bg-amber-50/60 border border-stone-200/80 hover:border-amber-400 p-4 rounded-2xl text-center transition-all duration-300 flex flex-col items-center justify-center h-28 group shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-extrabold text-amber-600 mb-1">
                      STEP 0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-stone-900 group-hover:text-amber-700 transition-colors">
                      {step}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* The 8-Stage Enterprise Building Pipeline */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                END-TO-END EXECUTION MODEL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                {t('ecosystem.pipelineTitle')}
              </h3>
            </div>
            <p className="text-xs text-stone-600 font-medium max-w-md">
              Click on any stage below to inspect our operational methodology and rural transformation workflow.
            </p>
          </div>

          {/* Pipeline Stage Interactive Selector Buttons (Light Premium Style) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {Array.isArray(stages) &&
              stages.map((stage, idx) => {
                const IconComponent = icons[idx] || Search;
                const isActive = activeStage === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between h-32 relative overflow-hidden border ${
                      isActive
                        ? 'bg-gradient-to-br from-amber-600 via-amber-700 to-emerald-800 text-white border-amber-500 shadow-xl shadow-amber-600/30 scale-105'
                        : 'bg-white text-stone-800 hover:bg-stone-50 border-stone-200/90 shadow-sm hover:shadow-md hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[10px] font-extrabold ${isActive ? 'text-amber-200' : 'text-stone-400'}`}>
                        {stage.number}
                      </span>
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-amber-600'}`} />
                    </div>

                    <div>
                      <h4 className="text-sm font-extrabold tracking-tight">{stage.name}</h4>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeIndicatorLight"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                      />
                    )}
                  </button>
                );
              })}
          </div>

          {/* Active Stage Detailed Panel (Light Premium Glassmorphism) */}
          {Array.isArray(stages) && stages[activeStage] && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl border-2 border-amber-400/40 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                      <span>Stage {stages[activeStage].number} of 08</span>
                      <span>•</span>
                      <span>Operational Stage</span>
                    </div>

                    <h4 className="text-3xl font-extrabold text-stone-900">
                      {stages[activeStage].name} Phase
                    </h4>

                    <p className="text-stone-700 text-base leading-relaxed text-justify-custom font-normal">
                      {stages[activeStage].desc}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2 text-xs text-emerald-700 font-extrabold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Quality Assured Operational Protocols</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-amber-700 font-extrabold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Technology & Data Linked</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-stone-50 rounded-2xl border border-stone-200 text-center space-y-4 shadow-inner">
                    <span className="text-xs text-stone-700 font-extrabold uppercase tracking-wider">
                      Initiate Ecosystem Program
                    </span>
                    <p className="text-xs text-stone-600 font-medium">
                      Deploy this 8-stage transformation model in your district or CSR area.
                    </p>
                    <button
                      onClick={() => onOpenModal && onOpenModal('Start a Rural Enterprise Programme')}
                      className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all shadow-md shadow-amber-600/20 active:scale-95"
                    >
                      Start Enterprise Programme
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;
