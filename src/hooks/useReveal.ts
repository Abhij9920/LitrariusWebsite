import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', '!translate-y-0');
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -32px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
