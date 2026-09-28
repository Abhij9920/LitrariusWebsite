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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`bg-white sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.05)]' : 'border-bdr'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-20">
        
        {/* LEFT: Logo Container */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/images/literarius-logo.png"
              alt="Literarius International"
              className="w-[175px] lg:w-[250px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* CENTER: Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-7 flex-none">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-inter font-semibold text-[15px] tracking-wide relative py-2 transition-colors duration-300 group
                    ${active ? 'text-[#064E3B]' : 'text-[#334155] hover:text-[#064E3B]'}`}
                >
                  {label}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 origin-left transition-transform duration-300 ease-out 
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
            className="hidden lg:inline-flex bg-[#F97316] text-white hover:bg-[#ea580c] h-[48px] px-[24px] items-center justify-center font-bold tracking-wide uppercase text-[13px] rounded transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Book Free Consultation
          </Link>

          {/* Hamburger for Mobile */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-[#064E3B] transition-transform duration-300 origin-center ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-[2px] bg-[#064E3B] transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-[#064E3B] transition-transform duration-300 origin-center ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`lg:hidden bg-white border-t border-bdr overflow-hidden transition-all duration-400 ease-in-out absolute w-full left-0 ${
          mobileOpen ? 'max-h-[500px] opacity-100 shadow-[0_10px_20px_rgba(0,0,0,0.05)]' : 'max-h-0 opacity-0'
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
