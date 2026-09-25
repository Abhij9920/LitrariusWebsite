import React, { useEffect, useRef } from 'react';

interface StudentCardProps {
  name: string;
  university: string;
  course: string;
  imageSrc: string;
  badge?: string;
  delay?: number;
}

export default function StudentCard({ name, university, course, imageSrc, badge, delay = 0 }: StudentCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-10');
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="bg-white border border-bdr rounded-xl overflow-hidden shadow-sm
                 opacity-0 translate-y-10 transition-all duration-700 ease-out
                 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="font-poppins font-semibold text-[15px] text-ink">{name}</div>
        <div className="text-sm text-green-em font-semibold mt-0.5">{university}</div>
        <div className="text-xs text-muted mt-0.5">{course}</div>
        {badge && (
          <span className="inline-block mt-2 bg-emerald-50 text-emerald-700 text-[10.5px] font-semibold px-2.5 py-1 rounded-full">
            🏅 {badge}
          </span>
        )}
      </div>
    </div>
  );
}
