import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldCheck, Building2, User, Mail, Phone, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProposalModal = ({ isOpen, onClose, initialCtaType = "" }) => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    interest: initialCtaType || 'Partner With Us (CSR & Govt)',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto reset after 3 sec
    }, 3000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/75 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100 z-10 my-8"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-amber-950 p-6 md:p-8 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Institutional Collaboration & Proposal Hub</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              {t('contactSection.title')}
            </h3>
            <p className="text-stone-300 text-xs md:text-sm mt-2 max-w-lg leading-relaxed">
              {t('contactSection.subtitle')}
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-stone-900">Proposal Request Received!</h4>
                <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for connecting with Absolute Gramya Private Limited. Our institutional partnerships team will review your proposal details and contact you within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3 bg-stone-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-600" />
                      {t('contactSection.form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-amber-600" />
                      {t('contactSection.form.org')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. State Rural Livelihood Mission / CSR Trust"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-600" />
                      {t('contactSection.form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@institution.gov.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      {t('contactSection.form.phone')}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                    />
                  </div>
                </div>

                {/* Collaboration Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-amber-600" />
                    {t('contactSection.form.interest')}
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                  >
                    <option value="Partner With Us (CSR & Govt)">Partner With Us (CSR, Govt & Universities)</option>
                    <option value="Start a Rural Enterprise Programme">Start a Rural Enterprise Programme</option>
                    <option value="Become a Gramya Partner">Become a Gramya Institutional Partner</option>
                    <option value="Join as a Rural Entrepreneur">Join as a Rural Entrepreneur / SHG</option>
                    <option value="Explore e-Gramya Products">Explore e-Gramya Products & Institutional Procurement</option>
                    <option value="Request a Project Proposal">Request a Custom Project Proposal</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t('contactSection.form.message')}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your proposed project, target districts, or collaboration objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-medium">
                    Strict Privacy & Governance Assurance
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-amber-600/30 flex items-center space-x-2 transition-all"
                  >
                    <span>{t('contactSection.form.submit')}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProposalModal;
