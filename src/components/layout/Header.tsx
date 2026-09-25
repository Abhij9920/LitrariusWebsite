import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/australia', label: 'Study in Australia' },
  { to: '/coaching', label: 'Coaching' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About Us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`bg-white sticky top-0 z-50 border-b border-bdr transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-transparent' : ''
      }`}
    >
      <nav className="max-w-content mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-playfair font-black text-2xl text-green-logo tracking-tight flex items-center gap-1.5">
          LITERARIUS
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-inter font-medium text-[15px] relative pb-1 transition-colors duration-200
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-em after:rounded-full
                    after:transition-all after:duration-300
                    ${active
                      ? 'text-green-em after:w-full'
                      : 'text-charcoal hover:text-green-logo after:w-0 hover:after:w-full'
                    }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link to="/contact" className="hidden lg:inline-flex btn bg-coral text-white hover:bg-orange-600 px-6 py-2.5 font-bold tracking-wide uppercase text-[14px] rounded-md transition-all hover:-translate-y-0.5">
          Book Free Consultation
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-green-logo rounded transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-green-logo rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-green-logo rounded transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-bdr overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm py-2.5 border-b border-bdr block ${
                location.pathname === to ? 'text-green-em font-semibold' : 'text-charcoal'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-coral mt-4 justify-center">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
