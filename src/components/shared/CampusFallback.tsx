import React from 'react';

interface CampusFallbackProps {
  name: string;
  className?: string;
}

export default function CampusFallback({ name, className = 'w-full h-full' }: CampusFallbackProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center p-8 text-center overflow-hidden bg-gradient-to-br from-[#064E3B] to-[#0B3B2E] text-white ${className}`}
    >
      {/* Subtle architectural geometric background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />
      
      {/* Decorative campus badge icon */}
      <div className="relative z-10 w-12 h-12 rounded-full border border-emerald-400/30 flex items-center justify-center mb-4 bg-emerald-950/40 text-emerald-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 1-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
          />
        </svg>
      </div>

      <div className="relative z-10 font-playfair text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 max-w-sm">
        {name}
      </div>
      <div className="relative z-10 text-xs uppercase tracking-widest text-emerald-300/80 font-poppins">
        Campus View Coming Soon
      </div>
    </div>
  );
}

