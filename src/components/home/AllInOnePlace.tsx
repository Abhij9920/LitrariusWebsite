import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentCard from '../shared/StudentCard';

const students = [
  { name: 'Priya Sharma',  university: 'Admitted to University of Melbourne', course: 'MBA · Class of 2025',              img: '/images/student-3.webp' },
  { name: 'Arjun Patel',   university: 'Admitted to UNSW Sydney',             course: 'Computer Science · Class of 2025',  img: '/images/student-2.webp' },
  { name: 'Meera Iyer',    university: 'Admitted to Monash University',        course: 'Business Management',               img: '/images/student-1.webp', badge: 'Scholarship Recipient' },
  { name: 'Rohit Verma',   university: 'Admitted to University of Queensland', course: 'Engineering · Class of 2025',        img: '/images/student-5.webp' },
];

const subs = [
  {
    h3: 'Get in With the Right University Strategy',
    body: "Our expert counsellors match your academic profile to Australia's best programs, craft a personalised roadmap, and guide you through a flawless application.",
  },
  {
    h3: 'Achieve Your IELTS / PTE Target Score',
    body: 'With personalised coaching, mock tests, and expert feedback — our students consistently achieve Band 7+ in IELTS and 65+ in PTE on their first attempt.',
  },
  {
    h3: 'Seamless Visa and Post-Landing Support',
    body: 'From student visa documentation to OSHC and accommodation guidance — we support you even after you land in Australia.',
  },
];

function RevealItem({ children, delay = 0, className = '', type = 'fade-up' }: { children: React.ReactNode, delay?: number, className?: string, type?: 'fade-up' | 'fade-in' | 'slide-left' }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('opacity-100', '!translate-y-0', '!translate-x-0', '!scale-100');
        obs.unobserve(el);
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  let baseClass = 'opacity-0 transition-all ease-cinematic ';
  if (type === 'fade-up') baseClass += 'translate-y-12 duration-[800ms]';
  if (type === 'fade-in') baseClass += 'scale-[0.98] duration-[1000ms]';
  if (type === 'slide-left') baseClass += '-translate-x-12 duration-[800ms]';

  return <div ref={ref} className={`${baseClass} ${className}`}>{children}</div>;
}

export default function AllInOnePlace() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — sticky */}
          <div className="lg:sticky lg:top-20">
            <RevealItem delay={0} type="slide-left">
              <span className="font-poppins uppercase tracking-widest text-green-em text-xs font-bold mb-4 block">Everything You Need.</span>
            </RevealItem>
            <RevealItem delay={150} type="slide-left">
              <h2 className="font-playfair text-[32px] md:text-[44px] text-[#064E3B] mb-6 tracking-tight">All in One Place.</h2>
            </RevealItem>
            <RevealItem delay={300} type="slide-left">
              <p className="text-lg text-muted leading-relaxed mb-10">
                We guide students through every step — from university selection to visa approval.
                Trusted by 1,000+ Indian students at Australia's top universities.
              </p>
            </RevealItem>
            
            {subs.map(({ h3, body }, i) => (
              <RevealItem key={h3} delay={450 + (i * 150)} type="slide-left" className="mb-8">
                <h3 className="font-poppins font-bold text-xl text-[#064E3B] mb-2">{h3}</h3>
                <p className="text-base text-muted leading-relaxed">{body}</p>
              </RevealItem>
            ))}
            
            <RevealItem delay={900} type="slide-left">
              <Link to="/contact" className="btn btn-coral mt-2 inline-block">Book Free Consultation</Link>
            </RevealItem>
          </div>

          {/* RIGHT — staggered student collage */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 relative lg:mt-8">
            <div className="flex flex-col gap-4 md:gap-8 mt-12 md:mt-20">
              <RevealItem delay={300} type="fade-up">
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 bg-white group">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img src="/images/student-3.webp" alt="Student" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-cinematic-slow" />
                  </div>
                  <div className="p-5 md:p-6 border-t border-bdr">
                    <h4 className="font-playfair text-xl text-[#064E3B] mb-1">Priya Sharma</h4>
                    <p className="text-xs uppercase tracking-widest text-muted font-semibold">University of Melbourne</p>
                  </div>
                </div>
              </RevealItem>
              
              <RevealItem delay={600} type="fade-up">
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 bg-white group">
                  <div className="relative overflow-hidden aspect-square">
                    <img src="/images/student-5.webp" alt="Student" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-cinematic-slow" />
                  </div>
                  <div className="p-5 md:p-6 border-t border-bdr">
                    <h4 className="font-playfair text-xl text-[#064E3B] mb-1">Rohit Verma</h4>
                    <p className="text-xs uppercase tracking-widest text-muted font-semibold">University of Queensland</p>
                  </div>
                </div>
              </RevealItem>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-8">
              <RevealItem delay={450} type="fade-up">
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 bg-white group">
                  <div className="relative overflow-hidden aspect-square">
                    <img src="/images/student-2.webp" alt="Student" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-cinematic-slow" />
                  </div>
                  <div className="p-5 md:p-6 border-t border-bdr">
                    <h4 className="font-playfair text-xl text-[#064E3B] mb-1">Arjun Patel</h4>
                    <p className="text-xs uppercase tracking-widest text-muted font-semibold">UNSW Sydney</p>
                  </div>
                </div>
              </RevealItem>
              
              <RevealItem delay={750} type="fade-up">
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 bg-white group relative">
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold z-10 shadow-sm rounded-sm">
                    Scholarship
                  </div>
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img src="/images/student-1.webp" alt="Student" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-cinematic-slow" />
                  </div>
                  <div className="p-5 md:p-6 border-t border-bdr">
                    <h4 className="font-playfair text-xl text-[#064E3B] mb-1">Meera Iyer</h4>
                    <p className="text-xs uppercase tracking-widest text-muted font-semibold">Monash University</p>
                  </div>
                </div>
              </RevealItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
