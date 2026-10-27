import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Building2, User, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    interest: 'Partner With Us (CSR & Govt)',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    {
      city: "Bhopal",
      country: "India Office",
      type: "Registered Secretariat",
      address: "162 Modi Heights, 4th floor, Zone II, MP Nagar, Bhopal, Madhya Pradesh",
      email: "contact@absolutegramya.com",
      phones: ["+91 7880095369", "+91 7880094664"]
    },
    {
      city: "Global Hub",
      country: "International Advisory",
      type: "Institutional Hub",
      address: "2101, DAMAC Business Tower, Business Bay, Dubai (U.A.E)",
      email: "global@absolutegramya.com",
      phones: ["Available on Request"]
    }
  ];

  return (
    <main className="bg-stone-50 text-stone-900 pt-16">
      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
            <ShieldCheck className="w-4 h-4" />
            <span>ACTION-ORIENTED ENGAGEMENT</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('contactSection.title')}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-justify-custom">
            {t('contactSection.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content Form & Office Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-stone-900">
                  Institutional Inquiry & Proposal Request
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Fill out the details below to request project proposals or initiate partnership discussions.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900">Request Submitted Successfully!</h4>
                  <p className="text-stone-600 max-w-md mx-auto text-sm">
                    Thank you. Our institutional partnerships desk will review your details and connect within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        {t('contactSection.form.name')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        {t('contactSection.form.org')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Organization / Institution"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        {t('contactSection.form.email')}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        {t('contactSection.form.phone')}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contact Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      {t('contactSection.form.interest')}
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 bg-stone-50"
                    >
                      <option value="Partner With Us (CSR & Govt)">Partner With Us (CSR, Govt & Universities)</option>
                      <option value="Start a Rural Enterprise Programme">Start a Rural Enterprise Programme</option>
                      <option value="Become a Gramya Partner">Become a Gramya Partner</option>
                      <option value="Join as a Rural Entrepreneur">Join as a Rural Entrepreneur</option>
                      <option value="Explore e-Gramya Products">Explore e-Gramya Products & Institutional Supply</option>
                      <option value="Request a Project Proposal">Request a Custom Project Proposal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      {t('contactSection.form.message')}
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify project objectives, targeted geographical districts, or partnership scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-amber-600/30 flex items-center justify-center space-x-2 transition-all"
                  >
                    <span>{t('contactSection.form.submit')}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Offices & Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              {offices.map((off, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-md space-y-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 block">
                    {off.type}
                  </span>
                  <h4 className="text-2xl font-bold text-stone-900">{off.city}</h4>
                  <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{off.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>{off.email}</span>
                    </div>
                    {off.phones.map((ph, pIdx) => (
                      <div key={pIdx} className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{ph}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;