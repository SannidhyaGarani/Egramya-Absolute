import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

const Footer = ({ onOpenModal }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-950 text-white pt-20 pb-12 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Domain Migration Banner in Footer (Requirement 8) */}
        <div className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-amber-950/80 via-stone-900 to-emerald-950/80 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                {t('domainBanner.tag')}
              </span>
              <p className="text-xs sm:text-sm text-stone-200">
                {t('domainBanner.text')}{' '}
                <strong className="text-white underline decoration-amber-500 font-mono">
                  {t('domainBanner.domain')}
                </strong>
              </p>
            </div>
          </div>

          <a
            href="https://www.absolutegramya.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center space-x-1.5 transition-colors shadow-lg flex-shrink-0"
          >
            <span>Visit Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-stone-800">
          
          {/* Col 1 & 2: Logo & Positioning Statement */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="light" />
            
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed text-justify-custom max-w-md">
                {t('footer.aboutDesc')}
              </p>
              
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-amber-400 text-xs font-bold leading-relaxed">
                "{t('footer.positioning')}"
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered Entity: Absolute Gramya Private Limited</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="hover:text-amber-400 transition-colors">
                  {t('nav.ecosystem')}
                </Link>
              </li>
              <li>
                <Link to="/verticals" className="hover:text-amber-400 transition-colors">
                  {t('nav.verticals')}
                </Link>
              </li>
              <li>
                <Link to="/e-gramya-store" className="hover:text-amber-400 transition-colors">
                  {t('nav.store')}
                </Link>
              </li>
              <li>
                <a href="#why-gramya" className="hover:text-amber-400 transition-colors">
                  {t('nav.whyGramya')}
                </a>
              </li>
              <li>
                <Link to="/partnerships" className="hover:text-amber-400 transition-colors">
                  {t('nav.partners')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Strategic Verticals */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              {t('footer.verticalsTitle')}
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>Gramya Rural Enterprise</li>
              <li>Gramya Women & Lakhpati Didi</li>
              <li>Gramya Skills & Vocational</li>
              <li>Gramya Agriculture & Dairy</li>
              <li>Gramya E-Commerce Marketplace</li>
              <li>Gramya Knowledge & Advisory</li>
            </ul>
          </div>

          {/* Col 5: Institutional Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              {t('footer.contactTitle')}
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{t('footer.email')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{t('footer.phone')}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal && onOpenModal('Request a Project Proposal')}
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-xl transition-colors shadow"
              >
                Request Proposal
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>{t('footer.copyright')}</p>
          <p className="text-[11px] text-stone-400">
            Domain Recommendation: <span className="text-stone-300">www.absolutegramya.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;