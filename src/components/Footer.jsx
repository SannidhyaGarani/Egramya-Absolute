import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const brandColor = "#eb008d";

  const quickLinks = ['Home', 'About', 'Philosophy', 'Programs', 'Team', 'Contact'];
  const impactAreas = ['Skill Development', 'Village Growth', 'Agro-Empowerment', 'Health & Hygiene', 'Rural Education'];

  return (
    <footer className="bg-stone-950 text-stone-400 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div 
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ backgroundColor: brandColor }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: Logo & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-sm">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-black tracking-[0.2em] text-white leading-none">
                ABSOLUTE
              </span>
              <span 
                className="text-[11px] font-bold tracking-[0.5em] uppercase mt-2"
                style={{ color: brandColor }}
              >
                Gramya
              </span>
            </div>
            <p className="text-sm leading-relaxed font-light tracking-wide text-stone-500">
              Redefining rural transformation through sustainable socio-economic design. 
              We believe in the absolute potential of every village.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-6">Stay Informed</h4>
            <div className="flex border-b border-stone-800 focus-within:border-[#eb008d] transition-colors duration-500 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-sm w-64 placeholder:text-stone-700 py-2"
              />
              <button 
                className="text-[10px] uppercase font-bold tracking-widest ml-4 transition-colors hover:text-white"
                style={{ color: brandColor }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-300 font-light flex items-center group">
                    <span 
                      className="w-0 h-[1px] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" 
                      style={{ backgroundColor: brandColor }}
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">Impact</h4>
            <ul className="space-y-4">
              {impactAreas.map((item) => (
                <li key={item} className="text-sm font-light hover:text-white transition-colors cursor-pointer flex items-center group">
                   <span className="w-1 h-1 rounded-full bg-stone-800 mr-3 group-hover:scale-150 transition-transform" style={{ backgroundColor: brandColor }} />
                   {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:pl-12">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">Connect</h4>
            <div className="space-y-6 text-sm font-light leading-relaxed">
              <p className="hover:text-stone-200 transition-colors">
                <span className="block text-[10px] uppercase tracking-widest text-stone-600 mb-1">HQ Address</span>
                Absolute Gramya Foundation,<br />Corporate District, New Delhi, IN.
              </p>
              <p className="hover:text-stone-200 transition-colors">
                <span className="block text-[10px] uppercase tracking-widest text-stone-600 mb-1">Inquiries</span>
                info@absolutegramya.org
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-600">
            &copy; {currentYear} Absolute Gramya. Crafted for impact.
          </p>
          
          <div className="flex space-x-8">
            {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 hover:text-white transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-white transition-colors"
          >
            Back to top 
            <svg className="w-4 h-4 ml-2 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;