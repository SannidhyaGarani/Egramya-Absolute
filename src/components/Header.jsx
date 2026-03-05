import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated hrefs to match the Route paths in App.jsx
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Vision', path: '/vision-mission' },
    { name: 'Activities', path: '/activities' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  const brandColor = "#eb008d";

  // Shared active link style
  const activeLinkStyle = ({ isActive }) => ({
    color: isActive ? '#1c1917' : '', // Darker text for active
    borderBottom: isActive ? `1.5px solid ${brandColor}` : '1.5px solid transparent'
  });

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          
          {/* Logo Section - Uses Link for internal routing */}
          <div className="flex-shrink-0">
            <Link to="/" className="group flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-[0.15em] text-stone-900 leading-none">
                ABSOLUTE
              </span>
              <span 
                className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mt-1"
                style={{ color: brandColor }}
              >
                Gramya
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Uses NavLink for active states */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={activeLinkStyle}
                className="relative text-[13px] uppercase tracking-widest font-semibold text-stone-500 hover:text-stone-900 transition-all duration-300 pb-1"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section: CTA */}
          <div className="flex items-center space-x-6">
            <Link to="/contact">
                <button 
                className="hidden md:block group relative px-8 py-3 overflow-hidden rounded-full bg-stone-900 transition-all duration-300 hover:shadow-xl active:scale-95"
                >
                <div 
                    className="absolute inset-0 w-0 bg-[#eb008d] transition-all duration-300 ease-out group-hover:w-full"
                    style={{ backgroundColor: brandColor }}
                />
                <span className="relative text-xs font-bold uppercase tracking-widest text-white">
                    Partner With Us
                </span>
                </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[70]"
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-stone-900'}`} />
              <span className={`block w-4 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100 bg-stone-900'}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-stone-900'}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-stone-950 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div 
            className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: brandColor }}
        />

        <div className="flex flex-col h-full justify-center items-center px-12 relative z-10">
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link, i) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `text-3xl md:text-5xl tracking-tighter transition-all duration-300 ${isActive ? 'italic font-serif text-[#eb008d]' : 'font-light text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-8">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button 
                        className="px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Partner With Us
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;