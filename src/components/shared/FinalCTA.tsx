import React from 'react';
import { Link } from 'react-router-dom';

interface FinalCTAProps {
  heading: React.ReactNode;
  italic: string;
  btnLabel?: string;
  btnTo?: string;
  imageSrc?: string;
  children?: React.ReactNode;
}

export default function FinalCTA({
  heading, italic,
  btnLabel = 'Start Today', btnTo = '/contact',
  imageSrc = '/images/hero-home.webp',
  children,
}: FinalCTAProps) {
  return (
    <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(6,30,20,0.80)]" />
      </div>
      <div className="relative z-10 text-center px-6 py-16">
        <h2 className="font-poppins font-bold text-white text-[clamp(28px,5vw,52px)] leading-[1.2] mb-4">
          {heading}
        </h2>
        <p className="font-playfair italic text-[22px] text-white/70 mb-7">{italic}</p>
        {children}
        {!children && (
          <Link to={btnTo} className="btn btn-coral btn-lg">{btnLabel}</Link>
        )}
      </div>
    </section>
  );
}
