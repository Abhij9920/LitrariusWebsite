import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiniCTABar from '../components/shared/MiniCTABar';
import { useReveal } from '../hooks/useReveal';

const programs = [
  { h3: 'Foundation Assessment', accent: 'text-coral', desc: 'We start by evaluating your current proficiency. Build strong fundamentals across all four skills with our comprehensive diagnostic approach.', points: ['Detailed baseline testing', 'Grammar & vocabulary gap analysis', 'Basic test strategies introduction', 'Personalised study roadmap'], img: '/images/coaching-foundation.webp' },
  { h3: 'Intensive Training', accent: 'text-blue-acc', desc: 'Fast-track your learning. Dive deep into intensive practice sessions with expert one-on-one feedback focusing on high-weightage topics.', points: ['Targeted skill workshops', 'Advanced test techniques', 'Time management drills', 'Personal mentor support'], img: '/images/coaching-intensive.webp' },
  { h3: 'Mock & Progress', accent: 'text-green-em', desc: 'Simulate the real test environment. Regular mock tests build stamina and familiarity, ensuring no surprises on test day.', points: ['Full-length timed mock tests', 'Detailed performance analytics', 'Speaking module simulations', 'Writing task evaluations'], img: '/images/coaching-mock.webp' },
  { h3: 'Final Polish & Results', accent: 'text-charcoal', desc: 'The final stretch before test day. We focus entirely on error elimination and psychological readiness to maximize your final score.', points: ['Confidence building sessions', 'Last-minute error correction', 'Test day logistics planning', 'Final target score verification'], img: '/images/coaching-final.webp' },
];

const extras = [
  { h: 'Speaking Practice', body: 'One-on-one sessions with certified trainers to build fluency, reduce hesitation, and improve pronunciation for the speaking module.' },
  { h: 'Writing Feedback', body: 'Detailed line-by-line feedback with model answers. Learn exactly how examiners grade Task 1 and Task 2.' },
  { h: 'Listening Strategies', body: 'Specialised training for comprehension of different accents and effective note-taking under time pressure.' },
  { h: 'Reading Techniques', body: 'Master skimming and scanning. Learn how to quickly locate answers without reading every word of the passage.' },
];

function RevealItem({ children, delay = 0, className = '', type = 'fade-up' }: { children: React.ReactNode, delay?: number, className?: string, type?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' }) {
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
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  let baseClass = 'opacity-0 transition-all ease-cinematic ';
  if (type === 'fade-up') baseClass += 'translate-y-12 duration-[800ms]';
  if (type === 'fade-in') baseClass += 'scale-[0.98] duration-[1000ms]';
  if (type === 'slide-left') baseClass += '-translate-x-12 duration-[800ms]';
  if (type === 'slide-right') baseClass += 'translate-x-12 duration-[800ms]';

  return <div ref={ref} className={`${baseClass} ${className}`}>{children}</div>;
}

function BookingForm() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => { setSuccess(true); formRef.current?.reset(); }, 1200);
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/80 mb-2 font-medium">First Name</label>
          <input className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors" placeholder="John" required />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/80 mb-2 font-medium">Last Name</label>
          <input className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors" placeholder="Smith" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/80 mb-2 font-medium">Email Address</label>
          <input type="email" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors" placeholder="john@example.com" required />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/80 mb-2 font-medium">Phone Number</label>
          <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors" placeholder="+91 9xxxxxxxxx" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/80 mb-2 font-medium">Test Type</label>
          <select className="w-full bg-[#082f23] border border-white/10 rounded-none px-4 py-3.5 text-white focus:outline-none focus:border-emerald-400 transition-colors appearance-none" required>
            <option value="">Select Test</option>
            <option>IELTS Academic</option>
            <option>PTE Academic</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/80 mb-2 font-medium">Target Score</label>
          <input className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors" placeholder="e.g. Band 7.0 or 65+" required />
        </div>
      </div>
      <div className="mb-8">
        <label className="block text-xs uppercase tracking-widest text-white/80 mb-2 font-medium">Your Goals</label>
        <textarea className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors min-h-[100px] resize-y" placeholder="Briefly describe your timeline and specific struggles..." />
      </div>
      <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-poppins font-bold uppercase tracking-widest text-sm py-5 transition-colors">
        Book Assessment Call
      </button>
      {success && <div className="mt-6 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-medium text-sm px-4 py-4 text-center">Your request has been received. We will contact you shortly.</div>}
    </form>
  );
}

export default function Coaching() {
  const revealScore = useReveal();
  const revealProg = useReveal();
  const revealExtra = useReveal();
  const revealForm = useReveal();

  return (
    <div className="bg-white">
      {/* Education Landing Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-bdr">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <RevealItem delay={0} type="fade-up">
            <span className="font-poppins uppercase tracking-widest text-coral text-xs lg:text-sm font-bold mb-6 block">Premium Test Preparation</span>
            <h1 className="font-playfair text-[56px] md:text-[76px] lg:text-[96px] leading-[1.05] text-[#064E3B] mb-8 tracking-tight max-w-4xl mx-auto">
              Master IELTS & PTE.<br />
              <span className="italic text-charcoal/80">Unlock Your Future.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              Achieve your target score on the first attempt with data-driven diagnostics, intensive training, and certified expert coaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#assessment" className="btn btn-coral px-8 py-4">Book Free Assessment</a>
              <a href="#methodology" className="btn bg-gray-100 text-charcoal hover:bg-gray-200 px-8 py-4">Explore Methodology</a>
            </div>
          </RevealItem>
          
          <RevealItem delay={300} type="fade-in" className="mt-20">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden relative">
              <video 
                src="https://videos.pexels.com/video-files/5198399/5198399-uhd_2732_1440_25fps.mp4"
                poster="/images/hero-coaching.webp"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto text-left">
              <div className="border-l-2 border-emerald-400 pl-6">
                <div className="font-poppins font-black text-3xl text-[#064E3B] mb-1">95%</div>
                <div className="text-xs uppercase tracking-widest text-muted">First-Attempt Success</div>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <div className="font-poppins font-black text-3xl text-[#064E3B] mb-1">Band 7+</div>
                <div className="text-xs uppercase tracking-widest text-muted">Average IELTS Score</div>
              </div>
              <div className="border-l-2 border-orange-400 pl-6">
                <div className="font-poppins font-black text-3xl text-[#064E3B] mb-1">65+</div>
                <div className="text-xs uppercase tracking-widest text-muted">Average PTE Score</div>
              </div>
            </div>
          </RevealItem>
        </div>
      </section>

      {/* Score Visuals & Journey */}
      <section ref={revealScore} className="py-24 bg-[#FAF9F6] opacity-0 translate-y-10 transition-all duration-[800ms] ease-out">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 lg:p-10 shadow-xl border border-bdr">
                <div className="mb-12">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="font-poppins font-bold text-xl text-[#064E3B]">IELTS Target</h3>
                      <p className="text-sm text-muted">Paper or Computer-delivered</p>
                    </div>
                    <span className="font-poppins font-black text-3xl text-emerald-500">7.5</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden flex">
                    <div className="w-[75%] bg-emerald-500 relative">
                      <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest text-muted font-bold">
                    <span>Band 0</span><span>Target Zone</span><span>Band 9</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="font-poppins font-bold text-xl text-[#064E3B]">PTE Target</h3>
                      <p className="text-sm text-muted">Computer-based AI Scoring</p>
                    </div>
                    <span className="font-poppins font-black text-3xl text-blue-500">65+</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden flex">
                    <div className="w-[65%] bg-blue-500 relative">
                      <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest text-muted font-bold">
                    <span>10 Points</span><span>Target Zone</span><span>90 Points</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] mb-6 tracking-tight">Know Your Target. Hit Your Score.</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Whether you choose the human-examined IELTS or the AI-scored PTE, our methodology breaks down the scoring criteria so you know exactly how to earn points in every module.
              </p>
              <div className="rounded-2xl overflow-hidden aspect-video shadow-sm mb-8">
                <img src="/images/coaching-mock.webp" alt="Test Preparation" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">✓</div>
                  <p className="text-charcoal"><strong>Diagnostic Testing:</strong> We identify your baseline before you start.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">✓</div>
                  <p className="text-charcoal"><strong>Algorithmic Focus:</strong> We train you on exactly what the examiners (or AI) look for.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">✓</div>
                  <p className="text-charcoal"><strong>Continuous Evaluation:</strong> Weekly mock tests track your trajectory.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Methodology Journey */}
      <section id="methodology" ref={revealProg} className="py-24 lg:py-32 bg-white opacity-0 translate-y-10 transition-all duration-[800ms] ease-out">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-24">
            <span className="font-poppins uppercase tracking-widest text-green-em text-xs mb-3 block">Our Methodology</span>
            <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] tracking-tight">The Four-Stage Learning Journey</h2>
          </div>
          
          <div className="flex flex-col gap-24 lg:gap-32 relative">
            <div className="absolute left-[24px] lg:left-1/2 top-0 bottom-0 w-px bg-bdr lg:-translate-x-1/2 hidden md:block" />
            
            {programs.map((prog, i) => (
              <div key={prog.h3} className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                
                {/* Visual side */}
                <RevealItem delay={0} type={i % 2 === 0 ? 'slide-left' : 'slide-right'} className="w-full md:w-1/2 relative z-10">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                    <img src={prog.img} alt={prog.h3} className="w-full h-full object-cover transition-transform duration-[1200ms] ease-cinematic-slow group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 ease-cinematic" />
                  </div>
                </RevealItem>

                {/* Center marker (desktop only) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-bdr rounded-full items-center justify-center z-20 shadow-sm font-playfair italic text-lg text-green-em">
                  {i+1}
                </div>
                
                {/* Text side */}
                <div className="w-full md:w-1/2 relative z-10 md:py-8">
                  <RevealItem delay={150} type="fade-up">
                    <div className={`font-poppins font-black text-6xl opacity-10 absolute -top-8 -left-4 pointer-events-none ${prog.accent}`}>
                      0{i+1}
                    </div>
                  </RevealItem>
                  <RevealItem delay={300} type="fade-up">
                    <h3 className="font-playfair text-[32px] md:text-[40px] text-[#064E3B] mb-4 relative z-10">{prog.h3}</h3>
                  </RevealItem>
                  <RevealItem delay={450} type="fade-up">
                    <p className="text-muted leading-relaxed mb-6 relative z-10">{prog.desc}</p>
                  </RevealItem>
                  <RevealItem delay={600} type="fade-up">
                    <ul className="flex flex-col gap-2.5 relative z-10">
                      {prog.points.map(p => (
                        <li key={p} className="flex items-start gap-3 text-sm text-charcoal/80">
                          <span className={`mt-0.5 font-bold ${prog.accent}`}>—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </RevealItem>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services — Editorial List */}
      <section ref={revealExtra} className="py-24 bg-[#FAF9F6] border-y border-bdr opacity-0 translate-y-10 transition-all duration-[800ms] ease-out">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] mb-6 tracking-tight">Targeted Interventions</h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Struggling with a specific module? Our targeted interventions isolate your weaknesses and turn them into strengths before test day.
              </p>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-sm mb-8 hidden lg:block">
                <img src="/images/coaching-foundation.webp" alt="Coaching Interventions" className="w-full h-full object-cover" />
              </div>
              <div className="hidden lg:block w-16 h-px bg-green-em" />
            </div>
            
            <div className="flex flex-col gap-12">
              {extras.map((extra, i) => (
                <RevealItem key={extra.h} delay={i * 100} type="fade-up" className="border-b border-bdr pb-12 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <div className="font-poppins font-bold text-sm tracking-widest uppercase text-emerald-500 mb-3">Module Support</div>
                      <h3 className="font-playfair text-[28px] md:text-[32px] text-[#064E3B] mb-3 tracking-tight">{extra.h}</h3>
                      <p className="text-muted text-sm leading-relaxed">{extra.body}</p>
                    </div>
                    {i === 1 && (
                      <div className="w-full sm:w-1/3 aspect-square rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                         <img src="/images/coaching-intensive.webp" alt={extra.h} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section id="assessment" ref={revealForm} className="py-0 bg-[#064E3B] opacity-0 translate-y-10 transition-all duration-[800ms] ease-out">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
          
          <div className="relative p-12 lg:p-24 flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0">
               <img src="/images/coaching-final.webp" alt="Consultation" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-[#064E3B]/90 mix-blend-multiply" />
            </div>
            <div className="relative z-10">
              <span className="font-poppins uppercase tracking-widest text-emerald-300 text-xs mb-4 block">Take The First Step</span>
              <h2 className="font-playfair text-[44px] md:text-[56px] text-white mb-6 tracking-tight">Book Your Free Assessment Call</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-md">
                Discuss your study abroad goals, test history, and target scores with a certified expert. We'll outline a realistic timeline and recommend the exact programme you need.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center font-playfair italic text-xl text-emerald-300">1</div>
                  <div className="text-white">Submit your details</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center font-playfair italic text-xl text-emerald-300">2</div>
                  <div className="text-white">Receive a call within 24 hours</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center font-playfair italic text-xl text-emerald-300">3</div>
                  <div className="text-white">Get your personalized roadmap</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#053d2e] p-12 lg:p-24 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10">
            <BookingForm />
          </div>
          
        </div>
      </section>

      {/* No FinalCTA component used - the booking form serves as the finale */}
      <MiniCTABar text="Book a free assessment with our certified IELTS/PTE coaches today." />
    </div>
  );
}
