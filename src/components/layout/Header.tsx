import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/australia', label: 'Study in Australia' },
  { to: '/coaching', label: 'Coaching' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  // Transparent state is active ONLY on the Home page before scrolling and when mobile menu is closed.
  const isTransparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    // Initial check in case user reloads halfway down the page
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-400 ${
        isTransparent 
          ? 'bg-transparent border-transparent shadow-none' 
          : 'bg-white border-b border-bdr shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-20">
        
        {/* LEFT: Logo Container */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/images/literarius-logo.png"
              alt="Literarius International"
              className="w-[175px] lg:w-[250px] h-auto object-contain transition-all duration-400"
            />
          </Link>
        </div>

        {/* CENTER: Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-7 flex-none">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            
            // Text color logic
            let textClass = '';
            if (isTransparent) {
              textClass = active ? 'text-[#064E3B]' : 'text-[#064E3B]/90 hover:text-[#064E3B]';
            } else {
              textClass = active ? 'text-[#064E3B]' : 'text-[#334155] hover:text-[#064E3B]';
            }

            // Underline color logic
            const underlineColor = isTransparent ? 'bg-[#064E3B]' : 'bg-emerald-500';

            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-inter font-semibold text-[15px] tracking-wide relative py-2 transition-colors duration-300 group ${textClass}`}
                >
                  {label}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[2px] ${underlineColor} origin-left transition-transform duration-300 ease-out 
                      ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT: CTA Container */}
        <div className="flex-1 flex justify-end items-center">
          <Link 
            to="/contact" 
            className={`hidden lg:inline-flex h-[48px] px-[24px] items-center justify-center font-bold tracking-wide uppercase text-[13px] rounded transition-all duration-400 hover:-translate-y-0.5 hover:shadow-md
              ${isTransparent 
                ? 'bg-white text-[#064E3B] hover:bg-gray-100' 
                : 'bg-[#F97316] text-white hover:bg-[#ea580c]'
              }`}
          >
            Book Free Consultation
          </Link>

          {/* Hamburger for Mobile */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] transition-all duration-300 origin-center bg-[#064E3B] ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-[2px] transition-all duration-300 bg-[#064E3B] ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] transition-all duration-300 origin-center bg-[#064E3B] ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`lg:hidden bg-white border-bdr overflow-hidden transition-all duration-400 ease-in-out absolute w-full left-0 ${
          mobileOpen ? 'max-h-[500px] opacity-100 shadow-[0_10px_20px_rgba(0,0,0,0.05)] border-t' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`text-[15px] py-3 border-b border-bdr block transition-colors duration-200
                  ${active ? 'text-[#064E3B] font-bold' : 'text-[#334155] font-medium'}`}
              >
                {label}
              </Link>
            );
          })}
          <Link 
            to="/contact" 
            className="bg-[#F97316] text-white hover:bg-[#ea580c] w-full h-[52px] flex items-center justify-center mt-6 font-bold tracking-wide uppercase text-[14px] rounded transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
