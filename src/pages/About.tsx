import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import StudentCard from '../components/shared/StudentCard';
import FinalCTA from '../components/shared/FinalCTA';
import MiniCTABar from '../components/shared/MiniCTABar';
import { useReveal } from '../hooks/useReveal';

const whyUs = [
  { title: 'Expert Team',         body: 'Certified consultants with deep experience in Australian university admissions and visa processes.' },
  { title: 'Proven Track Record', body: '1,000+ students placed at Australian universities with a 95% visa success rate.' },
  { title: 'Personalised Approach', body: 'Every student receives a tailored roadmap — from profile assessment to visa approval.' },
  { title: 'Ongoing Support',     body: 'We support you from your first enquiry all the way through to your arrival in Australia.' },
];

const teamStudents = [
  { name: 'Priya Sharma',  university: 'University of Melbourne', course: 'MBA · Class of 2025',              img: '/Uploads/australia.jpg' },
  { name: 'Arjun Patel',   university: 'UNSW Sydney',             course: 'Computer Science · Class of 2025',  img: '/Uploads/computer science.jpg' },
  { name: 'Meera Iyer',    university: 'Monash University',        course: 'Business Management · Scholarship', img: '/Uploads/business manegement.jpg', badge: 'Scholarship Recipient' },
];

const milestones = [
  { year: '2008', text: 'Founded in Mumbai with a single mission: make Australia accessible' },
  { year: '2012', text: 'Reached 100+ successful student placements' },
  { year: '2016', text: 'Expanded IELTS and PTE coaching programmes' },
  { year: '2019', text: '500+ students placed at Australian universities' },
  { year: '2022', text: 'Launched dedicated post-landing support programme' },
  { year: '2024', text: '1,000+ placements milestone — 95% visa success rate' },
];

function RevealItem({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('opacity-100', '!translate-y-0');
        obs.unobserve(el);
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`opacity-0 translate-y-10 transition-all duration-[900ms] ease-out ${className}`}>{children}</div>;
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

export default function About() {
  const revealMission = useReveal();
  const revealTimeline = useReveal();
  const revealTeam = useReveal();
  const revealWhy = useReveal();

  return (
    <>
      <Hero
        imageSrc="/Uploads/Group1.webp"
        videoSrc="https://videos.pexels.com/video-files/7310207/7310207-uhd_2732_1440_25fps.mp4"
        imageAlt="Literarius counsellors team"
        italicLine="India's Most Trusted Partner."
        heading={<>15+ Years Turning Australian Dreams Into Reality.</>}
        subText="We have helped 1,000+ students begin their Australian journey. Certified counsellors. Real results. Genuine support."
        ctaLabel="Get Started"
        ctaTo="/contact"
        short
      />

      {/* Mission Statement — cream */}
      <section ref={revealMission} className="py-24 bg-cream opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-playfair italic text-[24px] text-green-em leading-snug max-w-3xl mx-auto mb-10 font-normal">
            "We believe every Indian student deserves access to the world's best education — regardless of background or budget."
          </h2>
          <div className="flex items-center justify-center gap-4 text-ink font-poppins font-bold text-sm tracking-widest uppercase mb-8">
            <span>Accessibility</span>
            <span className="text-green-em">•</span>
            <span>Integrity</span>
            <span className="text-green-em">•</span>
            <span>Excellence</span>
          </div>
          <p className="text-muted max-w-xl mx-auto text-[15px] leading-relaxed">
            At Literarius, our mission is to simplify the complex journey of studying abroad. We provide honest, transparent, and expert guidance to ensure you reach your dream university in Australia.
          </p>
        </div>
      </section>

      {/* Timeline — white */}
      <section ref={revealTimeline} className="py-24 bg-white opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6 text-center">
          <span className="eyebrow-italic">How We Got Here.</span>
          <h2>Our Story</h2>

          <div className="relative max-w-[680px] mx-auto mt-16">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bdr -translate-x-1/2" />
            
            {milestones.map((m, i) => (
              <RevealItem key={m.year} delay={i * 200} className={`relative flex items-center justify-between mb-8 last:mb-0 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-[calc(50%-32px)]" /> {/* Spacer */}
                
                {/* Dot */}
                <div className="absolute left-1/2 w-4 h-4 bg-green-em rounded-full -translate-x-1/2 border-4 border-white shadow-sm z-10" />
                
                {/* Card */}
                <div className="w-[calc(50%-32px)] bg-white border border-bdr rounded-xl p-6 shadow-sm text-left hover:border-green-em transition-colors">
                  <div className="font-poppins font-bold text-2xl text-green-em mb-2">{m.year}</div>
                  <p className="font-inter text-[14.5px] text-charcoal">{m.text}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Team — dark green */}
      <section ref={revealTeam} className="py-24 bg-dark-section opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-playfair italic text-lg text-emerald-300 block mb-2">Our Foundation.</span>
              <h2 className="text-white mb-4">15+ Years Guiding Students to Australia</h2>
              <p className="text-white/65 text-[16px] leading-relaxed mb-10">
                Since our founding, Literarius has been committed to making Australian education accessible to ambitious Indian students. Our certified counsellors and visa experts have helped over 1,000 students begin their Australian journey.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: 15, suf: '+', l: 'Years Experience' },
                  { val: 1000, suf: '+', l: 'Students Placed' },
                  { val: 42, suf: '+', l: 'Partner Universities in Australia' },
                  { val: 95, suf: '%', l: 'Visa Success Rate' }
                ].map(({ val, suf, l }, i) => (
                  <RevealItem key={l} delay={i * 120} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                    <AnimatedNumber value={val} suffix={suf} className="font-poppins font-black text-[32px] text-emerald-300 leading-none" />
                    <div className="text-[11px] text-white/50 uppercase tracking-wider mt-3">{l}</div>
                  </RevealItem>
                ))}
              </div>
              <Link to="/contact" className="btn btn-coral mt-10 inline-flex">Book Free Consultation</Link>
            </div>
            <div className="flex flex-col gap-5 lg:pt-8">
              {teamStudents.map(({ name, university, course, img, badge }, i) => (
                <StudentCard key={name} name={name} university={university} course={course} imageSrc={img} badge={badge} delay={i * 180} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Literarius — cream */}
      <section ref={revealWhy} className="py-24 bg-cream opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="eyebrow-italic">Why Literarius?</span>
              <h2>Why Choose Us</h2>
              <p className="mt-4 text-muted leading-relaxed">We take a personalised, transparent, and deeply supportive approach to your overseas education journey.</p>
            </div>
            <div className="flex flex-col">
              {whyUs.map(({ title, body }, i) => (
                <RevealItem key={title} delay={i * 150} className="border-b border-bdr last:border-b-0 py-6 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-5">
                    <div className="font-poppins font-black text-[44px] text-green-em leading-none mt-0.5 tracking-tighter">0{i + 1}</div>
                    <div>
                      <h3 className="font-poppins font-semibold text-[19px] mb-2">{title}</h3>
                      <p className="font-inter text-[14.5px] text-muted">{body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        heading={<>Ready to Start Your<br />Australian Journey?</>}
        italic="We Are Here for You."
        btnLabel="Book Free Consultation"
      />
      <MiniCTABar />
    </>
  );
}
