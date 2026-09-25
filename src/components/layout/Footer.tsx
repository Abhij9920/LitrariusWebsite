import React from 'react';
import { Link } from 'react-router-dom';

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Study in Australia', to: '/australia' },
      { label: 'IELTS Coaching', to: '/coaching' },
      { label: 'PTE Coaching', to: '/coaching' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '+91 9607621025', to: '#' },
      { label: '+91 8600068599', to: '#' },
      { label: 'info@theexpatlives.com', to: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-bdr">
      <div className="max-w-content mx-auto px-6 pt-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-bdr">
          {/* Brand */}
          <div>
            <div className="font-poppins font-bold text-xl text-green-logo mb-3">🌿 Literarius</div>
            <p className="text-sm text-muted leading-relaxed max-w-[240px]">
              Your Gateway to World-Class Australian Education. Expert counselling for university admissions and IELTS/PTE coaching.
            </p>
          </div>
          {cols.map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-poppins font-semibold text-sm text-ink mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-muted hover:text-green-em transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Address */}
          <div>
            <h4 className="font-poppins font-semibold text-sm text-ink mb-4">Address</h4>
            <p className="text-sm text-muted leading-relaxed">
              245, Ijmima Building, Mindspace,<br />Malad West, Mumbai 400064
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-5 gap-4 text-xs text-muted">
          <span>© 2026 Literarius. All rights reserved.</span>
          <div className="flex gap-2.5">
            {['f', '●', 'in'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-green-logo text-white flex items-center justify-center text-xs font-bold
                           hover:bg-green-em transition-colors"
                aria-label={['Facebook', 'Instagram', 'LinkedIn'][i]}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
