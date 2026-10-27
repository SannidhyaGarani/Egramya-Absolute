import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Globe, ArrowRight, Menu, X, FileText, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import ProposalModal from './ProposalModal';

const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [initialCtaType, setInitialCtaType] = useState('Partner With Us (CSR & Govt)');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModalWithCta = (ctaName) => {
    setInitialCtaType(ctaName);
    setIsProposalModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.ecosystem'), path: '/ecosystem' },
    { name: t('nav.verticals'), path: '/verticals' },
    { name: t('nav.store'), path: '/e-gramya-store' },
    { name: t('nav.whyGramya'), path: '/#why-gramya' },
    { name: t('nav.partners'), path: '/partnerships' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      {/* Top Institutional Announcement & Domain Migration Banner (Requirement 8) */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          
          <div className="flex items-center space-x-4">
            {/* Language Switcher (Requirement 7) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-stone-800 hover:bg-stone-700 text-amber-400 text-xs font-bold transition-all border border-stone-700"
              title="Switch Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            <button
              onClick={() => openModalWithCta('Request a Project Proposal')}
              className="hidden md:flex items-center space-x-1 text-xs font-semibold text-stone-300 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>{t('nav.getProposal')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-stone-50/90 backdrop-blur-sm py-4 border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo Component */}
            <Logo variant="dark" />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isHash = link.path.includes('#');
                if (isHash) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      className="text-xs uppercase tracking-widest font-semibold text-stone-600 hover:text-amber-600 transition-colors py-1"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-xs uppercase tracking-widest font-semibold py-1 transition-colors relative ${
                        isActive
                          ? 'text-amber-600 font-bold border-b-2 border-amber-600'
                          : 'text-stone-600 hover:text-amber-600'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Right CTAs */}
            <div className="flex items-center space-x-3">
              {/* Partner With Us Action Button */}
              <button
                onClick={() => openModalWithCta('Partner With Us (CSR & Govt)')}
                className="hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-600/20 active:scale-95 transition-all"
              >
                <span>{t('nav.partnerWithUs')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-stone-800 hover:bg-stone-200 rounded-lg focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 text-white border-t border-stone-800 px-6 py-8 space-y-6 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-stone-200 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-800 flex flex-col space-y-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-stone-800 text-amber-400 font-bold text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Switch to {lang === 'en' ? 'हिंदी' : 'English'}</span>
              </button>

              <button
                onClick={() => openModalWithCta('Partner With Us (CSR & Govt)')}
                className="w-full py-3.5 rounded-xl bg-amber-600 text-white font-bold text-xs uppercase tracking-widest shadow-lg text-center"
              >
                {t('nav.partnerWithUs')}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Proposal Modal */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        initialCtaType={initialCtaType}
      />
    </>
  );
};

export default Header;