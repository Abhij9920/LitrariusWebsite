import React, { useState, useRef, useEffect } from 'react';
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
  { h: 'Mock Tests',       body: 'Regular practice tests with detailed performance analysis to track improvement.' },
  { h: 'Speaking Practice', body: 'One-on-one sessions with certified trainers to build fluency and confidence.' },
  { h: 'Writing Feedback', body: 'Detailed feedback with model answers and improvement tips for every task.' },
  { h: 'Listening Skills', body: 'Specialised training for comprehension and note-taking in real test conditions.' },
  { h: 'Reading Strategies', body: 'Effective reading techniques and time management for high-scoring performance.' },
  { h: 'Study Abroad Guidance', body: 'Complete support for Australian university applications and the admissions process.' },
];

const accentTextMap: Record<string, string> = {
  coral: 'text-coral', blue: 'text-blue-acc', green: 'text-green-em', dark: 'text-white/60',
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
  return <div ref={ref} className={`opacity-0 translate-y-10 transition-all duration-[900ms] ease-out ${className}`}>{children}</div>;
}

function BookingForm() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => { setSuccess(true); formRef.current?.reset(); }, 1200);
  };
  return (
    <div className="bg-white rounded-2xl p-10 max-w-2xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-bdr">
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
        videoSrc="https://videos.pexels.com/video-files/5198399/5198399-uhd_2732_1440_25fps.mp4"
        imageAlt="IELTS PTE Coaching"
        italicLine="Your Score. Our Expertise."
        heading={<>Master IELTS &amp; PTE<br />with Expert Coaching.</>}
        subText="95% of our students hit their target score on the first attempt."
        ctaLabel="Start Your Journey"
        ctaTo="#coaching-form"
        short
      >
        <div className="px-8 md:px-20 pb-12 w-full mt-6">
          <div className="flex flex-wrap gap-8 items-center border-t border-white/20 pt-6">
            {[
              ['Band 7+', 'Target IELTS'],
              ['65+', 'Target PTE'],
              ['95%', 'First-Attempt Success']
            ].map(([val, label], i) => (
              <div key={label} className="flex items-center gap-3">
                <div className="font-poppins font-black text-xl text-white">{val}</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">{label}</div>
                {i < 2 && <div className="w-px h-6 bg-white/20 ml-5" />}
              </div>
            ))}
          </div>
        </div>
      </Hero>

      {/* Score Visual — white */}
      <section ref={revealIelts} className="py-24 bg-white opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Score Visuals */}
            <div>
              <span className="font-playfair italic text-[20px] text-green-em mb-2 block">Numbers Don't Lie.</span>
              <h2 className="mb-8">IELTS vs PTE: Choose Your Path</h2>
              
              <div className="flex flex-col gap-6">
                <div className="border-t-4 border-t-blue-acc bg-gray-50 rounded-b-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-poppins font-bold text-lg">IELTS Scale (0-9)</h3>
                    <span className="bg-blue-acc text-white text-xs px-2 py-1 rounded">Target Zone: 7+</span>
                  </div>
                  {/* Visual Bar */}
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden flex relative mb-4">
                    <div className="w-[70%] bg-blue-acc/30 border-r border-white"></div>
                    <div className="w-[30%] bg-green-em"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs text-charcoal bg-white border border-bdr px-2 py-1 rounded">2 hrs 45 mins</span>
                    <span className="text-xs text-charcoal bg-white border border-bdr px-2 py-1 rounded">Paper or Computer</span>
                    <span className="text-xs text-charcoal bg-white border border-bdr px-2 py-1 rounded">Human Examiner</span>
                  </div>
                </div>

                <div className="border-t-4 border-t-green-em bg-gray-50 rounded-b-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-poppins font-bold text-lg">PTE Scale (10-90)</h3>
                    <span className="bg-green-em text-white text-xs px-2 py-1 rounded">Target Zone: 65+</span>
                  </div>
                  {/* Visual Bar */}
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden flex relative mb-4">
                    <div className="w-[65%] bg-green-em/30 border-r border-white"></div>
                    <div className="w-[35%] bg-green-em"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs text-charcoal bg-white border border-bdr px-2 py-1 rounded">2 hrs</span>
                    <span className="text-xs text-charcoal bg-white border border-bdr px-2 py-1 rounded">Computer Only</span>
                    <span className="text-xs text-charcoal bg-white border border-bdr px-2 py-1 rounded">AI Scoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Student Result Card */}
            <div>
              <div className="bg-dark-section rounded-2xl p-10 md:p-14 text-center text-white shadow-xl">
                <div className="mb-6 font-poppins font-semibold text-lg text-emerald-300 uppercase tracking-widest">Student Success</div>
                <h3 className="text-[22px] font-normal mb-8 leading-snug">"Arjun went from IELTS 5.5 to 7.5 in 6 weeks."</h3>
                <div className="font-poppins font-black text-[52px] text-green-em mb-8 tracking-tighter">
                  5.5 <span className="text-white/30 text-4xl mx-2">→</span> 7.5
                </div>
                <div className="font-playfair italic text-[18px] text-white/70">
                  "The mock tests made all the difference. My coach identified exactly where I was losing marks."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs — dark green */}
      <section ref={revealProg} className="py-20 bg-dark-section opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-playfair italic text-lg text-emerald-300 block mb-2">Find Your Program.</span>
            <h2 className="text-white">Our Coaching Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {programs.map(({ h3, accent, desc, points }, i) => (
              <RevealItem key={h3} delay={i * 180} className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 transition-all duration-300 h-full flex flex-col backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`font-poppins font-black text-[32px] leading-none ${accentTextMap[accent]}`}>0{i + 1}</div>
                  <h3 className="text-[19px] text-white mt-1">{h3}</h3>
                </div>
                <p className="text-white/60 text-[14.5px] mb-6">{desc}</p>
                <ul className="flex flex-col gap-3 mt-auto">
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-3 text-[13.5px] text-white/80">
                      <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Extra services — cream */}
      <section ref={revealExtra} className="py-20 bg-cream opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="eyebrow-italic">Beyond the Classroom.</span>
              <h2>Additional Services</h2>
              <p className="mt-4 text-muted leading-relaxed">Comprehensive support to ensure you are fully prepared for every aspect of your journey.</p>
            </div>
            <div className="flex flex-col">
              {extras.map(({ h, body }, i) => (
                <RevealItem key={h} delay={i * 180} className="border-b border-bdr last:border-b-0 py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="font-poppins font-black text-[24px] text-green-em leading-none mt-0.5">—</div>
                    <div>
                      <h3 className="font-poppins font-semibold text-[17px] mb-1">{h}</h3>
                      <p className="font-inter text-[14.5px] text-muted">{body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking form — white */}
      <section ref={revealForm} id="coaching-form" className="py-20 bg-white opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-8">
            <span className="eyebrow-italic">Get Started Today.</span>
            <h2>Book Your Free Consultation</h2>
          </div>
          
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 mb-10 text-charcoal font-inter text-[13px] font-medium">
            {['95% Success Rate', 'Expert Trainers', 'Proven Methods', '24/7 Support'].map(t => (
              <span key={t} className="flex items-center gap-2">
                <span className="text-green-em font-bold">✓</span> {t}
              </span>
            ))}
          </div>

          <BookingForm />
        </div>
      </section>

      <FinalCTA heading={<>Achieve Your Target Score.<br />Open Every Door.</>} italic="Your Score. Your Future." />
      <MiniCTABar text="Book a free consultation with one of our expert IELTS/PTE coaches." />
    </>
  );
}
