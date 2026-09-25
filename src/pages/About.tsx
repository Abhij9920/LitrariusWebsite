import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCTABar from '../components/shared/MiniCTABar';
import { useReveal } from '../hooks/useReveal';

const whyUs = [
  { title: 'Expert Team',         body: 'Certified consultants with deep experience in Australian university admissions and visa processes.' },
  { title: 'Proven Track Record', body: '1,000+ students placed at Australian universities with a 95% visa success rate.' },
  { title: 'Personalised Approach', body: 'Every student receives a tailored roadmap — from profile assessment to visa approval.' },
  { title: 'Ongoing Support',     body: 'We support you from your first enquiry all the way through to your arrival in Australia.' },
];

const teamStudents = [
  { name: 'Priya Sharma',  university: 'University of Melbourne', course: 'MBA · Class of 2025',              img: '/images/student-1.webp' },
  { name: 'Arjun Patel',   university: 'UNSW Sydney',             course: 'Computer Science · Class of 2025',  img: '/images/student-2.webp' },
  { name: 'Meera Iyer',    university: 'Monash University',        course: 'Business Management · Scholarship', img: '/images/student-3.webp' },
];

const milestones = [
  { year: '2008', text: 'Founded in Mumbai with a single mission: make Australia accessible.', img: '/images/campus-uwa.webp' },
  { year: '2012', text: 'Reached 100+ successful student placements across Group of Eight universities.' },
  { year: '2016', text: 'Expanded IELTS and PTE coaching programmes to provide end-to-end support.', img: '/images/coaching-intensive.webp' },
  { year: '2019', text: '500+ students placed at Australian universities, opening our second branch.' },
  { year: '2022', text: 'Launched dedicated post-landing support programme in Melbourne and Sydney.' },
  { year: '2024', text: '1,000+ placements milestone achieved with an unparalleled 95% visa success rate.', img: '/images/student-group.webp' },
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

function AnimatedNumber({ value, prefix = '', suffix = '', className = '' }: { value: number; prefix?: string; suffix?: string, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        obs.unobserve(el);
        const duration = 2000;
        const startTime = performance.now();
        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.floor(easeOut * value));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <div ref={ref} className={className}>{prefix}{current.toLocaleString()}{suffix}</div>;
}

function TimelineItem({ year, text, img, index }: { year: string, text: string, img?: string, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      setIsActive(entry.isIntersecting);
    }, { rootMargin: '-40% 0px -40% 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative group transition-all duration-700 ease-out">
      <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
        <div className={`font-poppins font-black text-6xl md:text-7xl lg:text-8xl leading-none min-w-[140px] transition-colors duration-700 bg-[#FAF9F6] pr-8 ${isActive ? 'text-emerald-500' : 'text-emerald-100'}`}>
          {year}
        </div>
        <div className="md:pt-4 w-full">
          <p className={`text-xl md:text-2xl font-playfair transition-colors duration-700 leading-relaxed mb-6 ${isActive ? 'text-[#064E3B]' : 'text-charcoal/30'}`}>
            {text}
          </p>
          {img && (
            <div className={`w-full aspect-video rounded-2xl overflow-hidden shadow-sm transition-all duration-1000 ease-cinematic ${isActive ? 'opacity-100 scale-100 grayscale-0' : 'opacity-40 scale-95 grayscale'}`}>
              <img src={img} alt={`Literarius ${year}`} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const revealMission = useReveal();
  const revealTimeline = useReveal();
  const revealTeam = useReveal();
  const revealWhy = useReveal();

  return (
    <div className="bg-[#FAF9F6]">
      {/* Institutional Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden border-b border-bdr">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <RevealItem delay={0} type="fade-up">
            <span className="font-poppins uppercase tracking-widest text-green-em text-xs font-bold mb-6 block">Who We Are</span>
            <h1 className="font-playfair text-[56px] md:text-[76px] lg:text-[96px] leading-[1.05] text-[#064E3B] mb-8 tracking-tight max-w-5xl mx-auto">
              India's Most Trusted<br />
              <span className="italic text-charcoal/80">Australian Partner.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-16 leading-relaxed">
              For over 15 years, we have been quietly turning Australian dreams into reality through genuine support, certified expertise, and real results.
            </p>
          </RevealItem>
          
          <RevealItem delay={300} type="fade-in">
            <div className="w-full h-[50vh] lg:h-[70vh] rounded-none overflow-hidden relative">
              <video 
                src="https://videos.pexels.com/video-files/7310207/7310207-uhd_2732_1440_25fps.mp4"
                poster="/images/hero-about.webp"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </RevealItem>
        </div>
      </section>

      {/* Mission Statement — Generous Whitespace */}
      <section ref={revealMission} className="py-32 lg:py-48 bg-white opacity-0 translate-y-10 transition-all duration-[800ms] ease-out">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="font-poppins uppercase tracking-widest text-green-em text-xs font-bold mb-12 block">Why We Exist</span>
          <h2 className="font-playfair text-[32px] md:text-[48px] lg:text-[64px] text-[#064E3B] leading-[1.2] max-w-5xl mx-auto mb-16 font-normal">
            "We believe every ambitious student deserves access to the world's best education — <span className="italic text-charcoal/80">regardless of background or budget.</span>"
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-charcoal font-poppins font-bold text-sm tracking-widest uppercase">
            <span>Accessibility</span>
            <span className="text-green-em hidden md:block">•</span>
            <span>Integrity</span>
            <span className="text-green-em hidden md:block">•</span>
            <span>Excellence</span>
          </div>
          
          <RevealItem delay={300} type="fade-up" className="mt-20">
            <div className="w-full max-w-5xl mx-auto aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/student-5.webp" alt="Students Graduating" className="w-full h-full object-cover" />
            </div>
          </RevealItem>
        </div>
      </section>

      {/* Our Story — Sticky Scroll Journey */}
      <section ref={revealTimeline} className="py-32 bg-[#FAF9F6] border-y border-bdr opacity-0 translate-y-10 transition-all duration-[800ms] ease-out relative">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="font-poppins uppercase tracking-widest text-green-em text-xs font-bold mb-4 block">Our Journey</span>
            <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] mb-6 tracking-tight">Building a Legacy</h2>
            <p className="text-muted leading-relaxed">
              From our humble beginnings in Mumbai to placing over a thousand students, every milestone represents another student's dream fulfilled.
            </p>
          </div>
          
          {/* Scrolling Timeline */}
          <div className="lg:col-span-8 flex flex-col gap-32 lg:pl-16 relative py-32">
            <div className="absolute left-[38px] lg:left-24 top-0 bottom-0 w-px bg-bdr hidden md:block" />
            {milestones.map((m, i) => (
              <TimelineItem key={m.year} year={m.year} text={m.text} img={m.img} index={i} />
            ))}
          </div>
          
        </div>
      </section>

      {/* Our Foundation — Visual Proof */}
      <section ref={revealTeam} className="py-32 bg-[#064E3B] text-white opacity-0 translate-y-10 transition-all duration-[800ms] ease-out overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-20">
            <span className="font-poppins uppercase tracking-widest text-emerald-300 text-xs font-bold mb-4 block">Our Results</span>
            <h2 className="font-playfair text-[44px] md:text-[56px] text-white tracking-tight">The Foundation of Trust</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Stats Block */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {[
                { val: 15, suf: '+', l: 'Years Experience' },
                { val: 1000, suf: '+', l: 'Students Placed' },
                { val: 42, suf: '+', l: 'Partner Universities' },
                { val: 95, suf: '%', l: 'Visa Success Rate' }
              ].map(({ val, suf, l }, i) => (
                <RevealItem key={l} delay={i * 120} type="fade-up" className="border-l border-white/20 pl-6">
                  <AnimatedNumber value={val} suffix={suf} className="font-poppins font-black text-4xl md:text-5xl text-emerald-300 leading-none mb-3" />
                  <div className="text-xs uppercase tracking-widest text-white/80">{l}</div>
                </RevealItem>
              ))}
            </div>
            
            {/* Image Gallery overlapping */}
            <div className="relative h-[400px] md:h-[500px] w-full py-4">
              <RevealItem delay={200} type="slide-left" className="absolute top-4 right-0 w-[55%] h-[45%] z-10 shadow-2xl rounded-2xl group overflow-hidden">
                <img src={teamStudents[0].img} alt="Student" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-cinematic-slow group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-white text-charcoal px-3 py-1.5 text-xs font-poppins font-bold z-20">
                  {teamStudents[0].name}
                </div>
              </RevealItem>
              <RevealItem delay={400} type="fade-in" className="absolute bottom-4 left-0 w-[50%] h-[55%] z-30 shadow-2xl rounded-2xl group overflow-hidden">
                <img src={teamStudents[1].img} alt="Student" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-cinematic-slow group-hover:scale-105" />
                <div className="absolute bottom-4 left-4 bg-white text-charcoal px-3 py-1.5 text-xs font-poppins font-bold z-20">
                  {teamStudents[1].name}
                </div>
              </RevealItem>
              <RevealItem delay={600} type="slide-left" className="absolute bottom-12 right-8 w-[45%] h-[45%] z-20 shadow-2xl rounded-2xl group overflow-hidden">
                <img src={teamStudents[2].img} alt="Student" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-cinematic-slow group-hover:scale-105" />
                <div className="absolute bottom-4 right-4 bg-emerald-500 text-white px-3 py-1.5 text-xs font-poppins font-bold z-20">
                  Scholarship
                </div>
              </RevealItem>
            </div>
            
          </div>
        </div>
      </section>

      {/* Why Students Trust Us — Clean Editorial Sequence */}
      <section ref={revealWhy} className="py-32 bg-white opacity-0 translate-y-10 transition-all duration-[800ms] ease-out">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-24">
            <span className="font-poppins uppercase tracking-widest text-green-em text-xs font-bold mb-4 block">Why Literarius</span>
            <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] tracking-tight">Why Students Trust Us</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[700px] w-full lg:sticky lg:top-32">
              <img src="/images/coaching-foundation.webp" alt="Why Literarius" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col gap-12">
              {whyUs.map(({ title, body }, i) => (
                <RevealItem key={title} delay={i * 150} type="fade-up" className="flex flex-col gap-4 border-b border-bdr pb-12 last:border-0">
                  <h3 className="font-poppins font-bold text-2xl text-[#064E3B]">{title}</h3>
                  <p className="text-lg text-muted leading-relaxed">{body}</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="relative py-32 bg-[#FAF9F6] border-t border-bdr text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] mb-6 tracking-tight">Speak With Our Experts</h2>
          <p className="text-lg text-muted mb-10 leading-relaxed">
            Our certified counsellors are ready to guide you through every step of your Australian education journey. Let's make it happen.
          </p>
          <Link to="/contact" className="btn btn-coral px-8 py-4">
            Meet The Team
          </Link>
        </div>
      </section>
      
      <MiniCTABar />
    </div>
  );
}
