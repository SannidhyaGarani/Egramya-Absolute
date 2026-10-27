import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ variant = 'dark' }) => {
  const isDark = variant === 'dark';

  return (
    <Link to="/" className="group flex items-center space-x-3.5 focus:outline-none">
      {/* Brand Icon SVG Emblem */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-emerald-700 flex items-center justify-center shadow-lg shadow-amber-600/20 group-hover:scale-105 transition-transform duration-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6 text-white stroke-[2.2]"
        >
          {/* Sprout / Rising Sun / Enterprise Network Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11M12 11C12 7.5 15 4.5 18.5 4.5C18.5 8 15.5 11 12 11ZM12 11C12 7.5 9 4.5 5.5 4.5C5.5 8 8.5 11 12 11Z" />
          <circle cx="12" cy="18" r="1.5" fill="currentColor" />
        </svg>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`text-lg md:text-xl font-extrabold tracking-[0.18em] uppercase leading-none ${
            isDark ? 'text-stone-900' : 'text-white'
          }`}
        >
          ABSOLUTE
        </span>
        <span className="text-[10px] font-bold tracking-[0.42em] uppercase text-amber-600 mt-1 flex justify-between w-full">
          G R A M Y A
        </span>
      </div>
    </Link>
  );
};

export default Logo;
