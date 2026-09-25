import React, { useEffect, useRef } from 'react';

const bars = [
  { uni: 'Melbourne', gen: 35, lit: 92 },
  { uni: 'Sydney',    gen: 32, lit: 89 },
  { uni: 'UNSW',      gen: 38, lit: 87 },
  { uni: 'ANU',       gen: 30, lit: 85 },
  { uni: 'Monash',    gen: 40, lit: 90 },
];

function AnimatedBar({ width, color }: { width: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.width = `${width}%`; obs.unobserve(el); }
    }, { threshold: 0.5 });
    el.style.width = '0';
    obs.observe(el);
    return () => obs.disconnect();
  }, [width]);
  return (
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-0.5">
      <div ref={ref} className={`h-full rounded-full transition-all duration-1000 ease-cinematic ${color}`} />
    </div>
  );
}

export default function ProofSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-12">
          <span className="eyebrow-italic">Numbers Don't Lie.</span>
          <h2>Proven Success. Unmatched Results.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Col 1 — student photo card */}
          <div className="rounded-xl overflow-hidden relative h-80">
            <img src="/images/student-2.webp" alt="Priya Sharma" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,30,20,0.88)] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="font-poppins font-semibold text-[15px] text-white">Priya S.</div>
              <div className="text-xs text-emerald-300 mb-1.5">University of Melbourne, 2025</div>
              <p className="font-playfair italic text-xs text-white/65">
                "Of our students are admitted to at least 1 of their top 3 Australian choices."
              </p>
            </div>
          </div>

          {/* Col 2 — stats */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-bdr rounded-xl p-5 shadow-sm">
              <div className="flex items-end gap-1 mb-2">
                <span className="font-poppins font-black text-[52px] text-green-em leading-none">7</span>
                <span className="font-poppins font-bold text-[22px] text-green-em mb-2">x</span>
              </div>
              <p className="text-[13.5px] text-charcoal leading-relaxed">
                Our students are 7x more likely to receive their first-choice Australian university offer than applying independently.
              </p>
            </div>
            <div className="bg-white border border-bdr rounded-xl p-5 shadow-sm">
              <div className="font-poppins font-black text-[38px] text-green-em leading-none mb-2">1,000+</div>
              <p className="text-[13px] text-muted">Total Australian University Placements</p>
            </div>
          </div>

          {/* Col 3 — bar chart */}
          <div className="bg-white border border-bdr rounded-xl p-5 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-green-em mb-2">
              University-Specific Placement Rates
            </div>
            <div className="flex gap-4 mb-4">
              <span className="flex items-center gap-1.5 text-[11px] text-muted">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" />General Rate
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-muted">
                <span className="w-2.5 h-2.5 rounded-full bg-green-em inline-block" />Literarius
              </span>
            </div>
            {bars.map(({ uni, gen, lit }) => (
              <div key={uni} className="mb-3">
                <div className="text-[11.5px] font-semibold text-charcoal mb-1">{uni}</div>
                <AnimatedBar width={gen} color="bg-gray-300" />
                <AnimatedBar width={lit} color="bg-green-em" />
                <div className="text-[10px] text-muted">
                  General {gen}% · <span className="text-green-em font-semibold">Literarius {lit}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
