import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  imageSrc: string;
  videoSrc?: string;
  imageAlt: string;
  italicLine: string;
  heading: React.ReactNode;
  subText?: string;
  ctaLabel?: string;
  ctaTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  short?: boolean;
  trustedBy?: string[];
  children?: React.ReactNode;
}

export default function Hero({
  imageSrc, videoSrc, imageAlt, italicLine, heading, subText,
  ctaLabel = 'Book Free Consultation', ctaTo = '/contact',
  secondaryLabel, secondaryTo,
  short = false,
  trustedBy,
  children,
}: HeroProps) {
  return (
    <section className={`relative flex flex-col overflow-hidden ${short ? 'min-h-[52vh]' : 'min-h-[90vh]'}`}>
      {/* Background image or video */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            src={videoSrc}
            poster={imageSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,30,20,0.85)] via-[rgba(6,30,20,0.65)] to-[rgba(6,30,20,0.2)]" />
      </div>

      {/* Content — bottom-left */}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        <div className={`pb-16 px-8 md:px-20 max-w-[800px] ${short ? 'pb-12' : 'pb-20'}`}>
          <p className="font-playfair italic text-xl md:text-2xl text-white/90 mb-4">{italicLine}</p>
          <h1 className="font-playfair text-[42px] md:text-[56px] lg:text-[72px] text-white leading-[1.05] mb-6 tracking-tight drop-shadow-sm">{heading}</h1>
          {subText && (
            <p className="text-lg md:text-[20px] text-white/80 max-w-2xl mb-10 leading-relaxed">{subText}</p>
          )}
          {ctaLabel && ctaTo && (
            <div className="flex items-center gap-6 flex-wrap">
              <Link to={ctaTo} className="btn bg-coral text-white hover:bg-orange-600 px-8 py-4 font-bold tracking-wide uppercase text-sm">{ctaLabel}</Link>
              {secondaryLabel && secondaryTo && (
                <Link to={secondaryTo} className="text-white text-[15px] font-medium underline underline-offset-4 opacity-90 hover:opacity-100 transition-opacity">
                  {secondaryLabel} ↓
                </Link>
              )}
            </div>
          )}
        </div>
        {children}
      </div>

      {/* Trusted-by strip */}
      {trustedBy && (
        <div className="relative z-10 bg-black/28 backdrop-blur-sm px-8 md:px-20 py-3.5 flex items-center gap-6 flex-wrap">
          <span className="text-[11px] text-white/80 tracking-widest uppercase whitespace-nowrap">
            Trusted by students from
          </span>
          <div className="flex gap-6 flex-wrap">
            {trustedBy.map((t) => (
              <span key={t} className="text-xs text-white/65 font-medium tracking-wide">{t}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
