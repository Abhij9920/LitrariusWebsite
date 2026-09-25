import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import FinalCTA from '../components/shared/FinalCTA';
import MiniCTABar from '../components/shared/MiniCTABar';
import { useReveal } from '../hooks/useReveal';

const programs = [
  { h3: 'Foundation Course', accent: 'coral', desc: 'For beginners. Build strong fundamentals across all four skills with comprehensive study materials.', points: ['60 hours of structured learning', 'Grammar & vocabulary building', 'Basic test strategies', 'Weekly progress assessments'] },
  { h3: 'Intensive Coaching', accent: 'blue', desc: 'Fast-track for quick score improvement. Intensive practice with expert one-on-one feedback.', points: ['40 hours of intensive training', 'Advanced test techniques', 'Mock tests & full analysis', 'Personal mentor support'] },
  { h3: 'One-on-One Coaching', accent: 'green', desc: 'Fully personalised coaching tailored to your specific needs and learning pace.', points: ['Customised study plan', 'Flexible scheduling', 'Individual attention', 'Targeted skill improvement'] },
  { h3: 'Online Masterclass', accent: 'dark', desc: 'Learn from anywhere with comprehensive online sessions and digital resources.', points: ['Live online sessions', 'Digital study materials', '24/7 platform access', 'Interactive practice tools'] },
];

const extras = [
  { icon: '📝', h: 'Mock Tests',       body: 'Regular practice tests with detailed performance analysis to track improvement.' },
  { icon: '🎙️', h: 'Speaking Practice', body: 'One-on-one sessions with certified trainers to build fluency and confidence.' },
  { icon: '✏️', h: 'Writing Feedback', body: 'Detailed feedback with model answers and improvement tips for every task.' },
  { icon: '🔓', h: 'Listening Skills', body: 'Specialised training for comprehension and note-taking in real test conditions.' },
  { icon: '📖', h: 'Reading Strategies', body: 'Effective reading techniques and time management for high-scoring performance.' },
  { icon: '🌍', h: 'Study Abroad Guidance', body: 'Complete support for Australian university applications and the admissions process.' },
];

const accentBorderMap: Record<string, string> = {
  coral: 'border-t-coral', blue: 'border-t-blue-acc', green: 'border-t-green-em', dark: 'border-t-charcoal',
};

const accentTextMap: Record<string, string> = {
  coral: 'text-coral', blue: 'text-blue-acc', green: 'text-green-em', dark: 'text-charcoal',
};

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

function BookingForm() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => { setSuccess(true); formRef.current?.reset(); }, 1200);
  };
  return (
    <div className="bg-white rounded-2xl p-10 max-w-2xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="form-label">First Name *</label><input className="form-input" placeholder="John" required /></div>
          <div><label className="form-label">Last Name *</label><input className="form-input" placeholder="Smith" required /></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="form-label">Email *</label><input type="email" className="form-input" placeholder="john@example.com" required /></div>
          <div><label className="form-label">Phone *</label><input type="tel" className="form-input" placeholder="+91 9xxxxxxxxx" required /></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="form-label">Test Type *</label>
            <select className="form-input" required>
              <option value="">Select</option><option>IELTS</option><option>PTE</option><option>Both IELTS & PTE</option>
            </select>
          </div>
          <div><label className="form-label">Current Score (if any)</label><input className="form-input" placeholder="e.g. IELTS 5.5" /></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="form-label">Target Score *</label><input className="form-input" placeholder="e.g. Band 7.0" required /></div>
          <div><label className="form-label">Preferred Test Date</label><input type="date" className="form-input" /></div>
        </div>
        <div className="mb-5"><label className="form-label">Additional Information</label><textarea className="form-input min-h-[90px] resize-y" placeholder="Tell us about areas you want to focus on..." /></div>
        <button type="submit" className="btn btn-coral w-full justify-center text-base py-3.5">Book Free Consultation</button>
        {success && <div className="mt-4 bg-emerald-50 border border-green-em text-emerald-700 font-medium text-sm rounded-lg px-4 py-3">✓ Thank you! We will contact you within 24 hours.</div>}
      </form>
    </div>
  );
}

export default function Coaching() {
  const revealIelts = useReveal();
  const revealProg = useReveal();
  const revealExtra = useReveal();
  const revealForm = useReveal();

  return (
    <>
      <Hero
        imageSrc="/Uploads/computer science.jpg"
        imageAlt="IELTS PTE Coaching"
        italicLine="Your Score. Our Expertise."
        heading={<>Master IELTS &amp; PTE<br />with Expert Coaching.</>}
        subText="Achieve your target scores with personalised coaching and proven strategies. 95% of our students hit their target on the first attempt."
        ctaLabel="Start Your Journey"
        ctaTo="#coaching-form"
        short
      />

      {/* IELTS vs PTE — white */}
      <section ref={revealIelts} className="py-20 bg-white opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow-italic">Know Your Options.</span>
            <h2>IELTS vs PTE: Choose Your Path</h2>
            <p className="max-w-lg mx-auto mt-3 text-muted">Understand key differences and choose the test that suits your profile.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: '📝 IELTS', color: 'bg-blue-acc', points: ['Duration: 2 hours 45 minutes', 'Paper or Computer-based', 'Face-to-face speaking interview', 'Widely accepted worldwide', 'Human examiner for speaking', 'Band score 0–9', 'Multiple test dates monthly', 'Academic & General Training'] },
              { label: '🤖 PTE Academic', color: 'bg-green-em', points: ['Duration: 2 hours', 'Computer-based only', 'AI-based speaking assessment', 'Results in 24–48 hours', 'AI-powered scoring system', 'Score range 10–90', 'Flexible, on-demand scheduling', 'Integrated skills testing'] },
            ].map(({ label, color, points }, i) => (
              <RevealItem key={label} delay={i * 120} className="rounded-xl overflow-hidden shadow-md h-full">
                <div className={`${color} text-white font-poppins font-bold text-[19px] px-6 py-4`}>{label}</div>
                <div className="border border-bdr border-t-0 p-6 h-full">
                  <ul className="flex flex-col gap-2.5">
                    {points.map(p => (
                      <li key={p} className="flex items-center gap-2.5 text-[13.5px] text-charcoal">
                        <span className="w-4 h-4 bg-green-em rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">✓</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Programs — cream */}
      <section ref={revealProg} className="py-20 bg-cream opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12"><span className="eyebrow-italic">Find Your Program.</span><h2>Our Coaching Programs</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {programs.map(({ h3, accent, desc, points }, i) => (
              <RevealItem key={h3} delay={i * 120} className={`bg-white border border-bdr border-t-4 ${accentBorderMap[accent]} rounded-xl p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
                <div className="flex items-start gap-3 mb-2">
                  <div className={`font-poppins font-black text-[32px] leading-none ${accentTextMap[accent]}`}>0{i + 1}</div>
                  <h3 className="text-[17px] mt-1.5">{h3}</h3>
                </div>
                <p className="text-muted text-[13.5px] mb-4">{desc}</p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-2 text-[13.5px] text-charcoal">
                      <span className="w-4 h-4 bg-green-em rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Extra services — dark green */}
      <section ref={revealExtra} className="py-20 bg-dark-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-playfair italic text-lg text-emerald-300 block mb-2">Beyond the Classroom.</span>
            <h2 className="text-white">Additional Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {extras.map(({ icon, h, body }, i) => (
              <RevealItem key={h} delay={i * 120} className="bg-white/[0.07] border border-white/10 rounded-xl p-5 text-center hover:bg-white/[0.12] transition-colors h-full">
                <div className="text-3xl mb-2.5">{icon}</div>
                <h3 className="text-white text-[15px] mb-1.5">{h}</h3>
                <p className="text-white/50 text-sm">{body}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form — cream */}
      <section ref={revealForm} id="coaching-form" className="py-20 bg-cream opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <span className="eyebrow-italic">Get Started Today.</span>
            <h2>Book Your Free Consultation</h2>
            <p className="text-muted mt-3">✓ 95% Success Rate &nbsp; ✓ Expert Trainers &nbsp; ✓ Proven Methods &nbsp; ✓ 24/7 Support</p>
          </div>
          <BookingForm />
        </div>
      </section>

      <FinalCTA heading={<>Achieve Your Target Score.<br />Open Every Door.</>} italic="Your Score. Your Future." />
      <MiniCTABar text="Book a free consultation with one of our expert IELTS/PTE coaches." />
    </>
  );
}
