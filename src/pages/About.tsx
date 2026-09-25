import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import StudentCard from '../components/shared/StudentCard';
import FinalCTA from '../components/shared/FinalCTA';
import MiniCTABar from '../components/shared/MiniCTABar';
import { useReveal } from '../hooks/useReveal';

const services = [
  { action: 'Study in Australia', link: '/australia', title: 'Overseas Education',   body: 'Personalised counselling on university selection, scholarships, and financial aid for top Australian institutions.' },
  { action: 'Book Coaching', link: '/coaching', title: 'Career Counselling',   body: 'Psychometric testing and expert guidance to help students make the right academic and career decisions.' },
  { action: 'Learn About Us', link: '/about', title: 'Campus to Corporate',  body: 'Programs that bridge academia and industry, equipping students with practical skills for the Australian job market.' },
];

const whyUs = [
  { stat: '15+', title: 'Expert Team',         body: 'Certified consultants with deep experience in Australian university admissions and visa processes.' },
  { stat: '1,000+', title: 'Proven Track Record', body: '1,000+ students placed at Australian universities with a 95% visa success rate.' },
  { stat: '100%', title: 'Personalised Approach', body: 'Every student receives a tailored roadmap — from profile assessment to visa approval.' },
  { stat: '24/7', title: 'Ongoing Support',     body: 'We support you from your first enquiry all the way through to your arrival in Australia.' },
];

const teamStudents = [
  { name: 'Priya Sharma',  university: 'University of Melbourne', course: 'MBA · Class of 2025',              img: '/Uploads/australia.jpg' },
  { name: 'Arjun Patel',   university: 'UNSW Sydney',             course: 'Computer Science · Class of 2025',  img: '/Uploads/computer science.jpg' },
  { name: 'Meera Iyer',    university: 'Monash University',        course: 'Business Management · Scholarship', img: '/Uploads/business manegement.jpg', badge: 'Scholarship Recipient' },
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
  return <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}>{children}</div>;
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
        const duration = 1500;
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
  const revealServices = useReveal();
  const revealTeam = useReveal();
  const revealWhy = useReveal();

  return (
    <>
      <Hero
        imageSrc="/Uploads/Group1.webp"
        imageAlt="Literarius counsellors team"
        italicLine="India's Most Trusted Partner."
        heading={<>15+ Years Guiding Students<br />to Australia's Best Universities.</>}
        subText="From goal setting to graduation — we are with you every step of the way."
        ctaLabel="Get Started"
        ctaTo="/contact"
        short
      />

      {/* Services — cream */}
      <section ref={revealServices} className="py-20 bg-cream opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="eyebrow-italic">What We Do.</span>
              <h2>Our Services</h2>
              <p className="mt-4 text-muted leading-relaxed">We provide comprehensive guidance at every step of your journey, ensuring you have the best chance of success.</p>
            </div>
            <div className="flex flex-col">
              {services.map(({ title, body, action, link }, i) => (
                <RevealItem key={title} delay={i * 120} className="border-b border-bdr last:border-b-0 py-6 first:pt-0 last:pb-0">
                  <h3 className="text-[19px] mb-2">{title}</h3>
                  <p className="text-[14.5px] text-muted mb-4">{body}</p>
                  <Link to={link} className="text-[13.5px] font-semibold text-coral hover:text-orange-600 transition-colors inline-flex items-center gap-1.5">
                    {action} <span className="text-lg leading-none">→</span>
                  </Link>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team — dark green */}
      <section ref={revealTeam} className="py-20 bg-dark-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-playfair italic text-lg text-emerald-300 block mb-2">Our Story.</span>
              <h2 className="text-white mb-4">15+ Years Guiding Students to Australia</h2>
              <p className="text-white/65 text-[16px] leading-relaxed mb-8">
                Since our founding, Literarius has been committed to making Australian education accessible to ambitious Indian students. Our certified counsellors and visa experts have helped over 1,000 students begin their Australian journey.
              </p>
              <div className="grid grid-cols-2 gap-3.5">
                {[
                  { val: 15, suf: '+', l: 'Years Experience' },
                  { val: 1000, suf: '+', l: 'Students Placed' },
                  { val: 42, suf: '+', l: 'Universities' },
                  { val: 95, suf: '%', l: 'Success Rate' }
                ].map(({ val, suf, l }, i) => (
                  <RevealItem key={l} delay={i * 120} className="bg-white/[0.09] border border-white/12 rounded-xl p-5 text-center">
                    <AnimatedNumber value={val} suffix={suf} className="font-poppins font-black text-[32px] text-emerald-300 leading-none" />
                    <div className="text-[11px] text-white/45 uppercase tracking-wider mt-2">{l}</div>
                  </RevealItem>
                ))}
              </div>
              <Link to="/contact" className="btn btn-coral mt-7 inline-flex">Book Free Consultation</Link>
            </div>
            <div className="flex flex-col gap-5 pt-4">
              {teamStudents.map(({ name, university, course, img, badge }, i) => (
                <StudentCard key={name} name={name} university={university} course={course} imageSrc={img} badge={badge} delay={i * 120} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us — white */}
      <section ref={revealWhy} className="py-20 bg-white opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12"><span className="eyebrow-italic">Why Literarius?</span><h2>Why Choose Us</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUs.map(({ stat, title, body }, i) => (
              <RevealItem key={title} delay={i * 120} className="card-base p-6 hover:border-green-em h-full flex flex-col">
                <div className="font-poppins font-black text-[36px] text-green-em leading-none mb-3">{stat}</div>
                <h3 className="text-[16px] mb-2">{title}</h3>
                <p className="text-sm text-muted">{body}</p>
              </RevealItem>
            ))}
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
