import React, { useState, useRef, useEffect } from 'react';
import MiniCTABar from '../components/shared/MiniCTABar';
import { useReveal } from '../hooks/useReveal';

function ContactForm() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => { setSuccess(true); formRef.current?.reset(); }, 1200);
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block font-poppins font-bold text-xs uppercase tracking-widest text-charcoal/50 mb-3">Full Name *</label>
          <input className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#064E3B] transition-colors" placeholder="John Smith" required />
        </div>
        <div>
          <label className="block font-poppins font-bold text-xs uppercase tracking-widest text-charcoal/50 mb-3">Email Address *</label>
          <input type="email" className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#064E3B] transition-colors" placeholder="john@example.com" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block font-poppins font-bold text-xs uppercase tracking-widest text-charcoal/50 mb-3">Phone Number *</label>
          <input type="tel" className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#064E3B] transition-colors" placeholder="+91 9xxxxxxxxx" required />
        </div>
        <div>
          <label className="block font-poppins font-bold text-xs uppercase tracking-widest text-charcoal/50 mb-3">Service Needed *</label>
          <select className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-charcoal focus:outline-none focus:border-[#064E3B] transition-colors appearance-none" required>
            <option value="">Select a service</option>
            <option>Study in Australia</option>
            <option>IELTS Coaching</option>
            <option>PTE Coaching</option>
            <option>Both Coaching + Admission</option>
          </select>
        </div>
      </div>
      <div className="mb-8">
        <label className="block font-poppins font-bold text-xs uppercase tracking-widest text-charcoal/50 mb-3">Country of Residence *</label>
        <input className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#064E3B] transition-colors" placeholder="India" required />
      </div>
      <div className="mb-12">
        <label className="block font-poppins font-bold text-xs uppercase tracking-widest text-charcoal/50 mb-3">Your Message *</label>
        <textarea className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#064E3B] transition-colors min-h-[100px] resize-y" placeholder="Tell us about your goals and how we can help..." required />
      </div>
      <button type="submit" className="bg-[#064E3B] text-white font-poppins font-bold uppercase tracking-widest text-sm px-12 py-5 hover:bg-[#043326] transition-colors w-full md:w-auto">
        Send Message
      </button>
      {success && <div className="mt-6 font-medium text-sm text-green-em">✓ Thank you! We will get back to you within 24 hours.</div>}
    </form>
  );
}

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

  let baseClass = 'opacity-0 transition-all ease-out ';
  if (type === 'fade-up') baseClass += 'translate-y-12 duration-[1000ms]';
  if (type === 'fade-in') baseClass += 'duration-[1200ms]';
  if (type === 'slide-left') baseClass += '-translate-x-12 duration-[1000ms]';

  return <div ref={ref} className={`${baseClass} ${className}`}>{children}</div>;
}

export default function Contact() {
  const revealForm = useReveal();
  const revealInfo = useReveal();
  const revealTrust = useReveal();

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      
      {/* Minimal Header */}
      <section className="pt-40 pb-20 lg:pt-56 lg:pb-32 px-6 max-w-[1400px] mx-auto">
        <RevealItem delay={0} type="fade-up">
          <span className="font-poppins uppercase tracking-widest text-green-em text-xs font-bold mb-4 block">Get in Touch</span>
          <h1 className="font-playfair text-[60px] md:text-[80px] lg:text-[100px] leading-[1] text-[#064E3B] tracking-tight">
            Let's start the<br /><span className="italic text-charcoal/80">conversation.</span>
          </h1>
        </RevealItem>
      </section>

      {/* Main Split Content */}
      <section className="pb-32 px-6 max-w-[1400px] mx-auto border-b border-bdr">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Form Panel */}
          <div ref={revealForm} className="lg:col-span-7 lg:col-start-1 opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out">
            <ContactForm />
          </div>
          
          {/* Right Info Panel */}
          <div ref={revealInfo} className="lg:col-span-4 lg:col-start-9 opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out flex flex-col gap-12 lg:pt-4">
            
            <div className="flex flex-col gap-8">
              <div>
                <div className="font-poppins font-bold text-[10px] text-charcoal/40 uppercase tracking-widest mb-2">Phone</div>
                <div className="font-playfair text-xl text-[#064E3B]">+91 9607621025</div>
                <div className="font-playfair text-xl text-[#064E3B]">+91 8600068599</div>
              </div>
              
              <div>
                <div className="font-poppins font-bold text-[10px] text-charcoal/40 uppercase tracking-widest mb-2">Email</div>
                <div className="font-playfair text-xl text-[#064E3B]">info@theexpatlives.com</div>
              </div>
              
              <div>
                <div className="font-poppins font-bold text-[10px] text-charcoal/40 uppercase tracking-widest mb-2">Address</div>
                <div className="font-inter text-[15px] text-charcoal/80 leading-relaxed max-w-[250px]">
                  245, Ijmima Building, Mindspace,<br />Malad West, Mumbai 400064
                </div>
              </div>
              
              <div>
                <div className="font-poppins font-bold text-[10px] text-charcoal/40 uppercase tracking-widest mb-2">Hours</div>
                <div className="font-inter text-[15px] text-charcoal/80 leading-relaxed">
                  Monday–Saturday<br />9 AM – 7 PM IST
                </div>
              </div>
            </div>

            <div className="font-playfair italic text-[#064E3B] text-[20px] leading-relaxed border-l-2 border-green-em pl-6 py-2 mt-8">
              "We have helped 1,000+ students begin their Australian journey. Yours could be next."
            </div>
            
          </div>
          
        </div>
      </section>

      {/* Trust Indicators — Pure Typography */}
      <section ref={revealTrust} className="py-24 bg-white opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8 text-center md:text-left">
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="font-playfair italic text-[72px] lg:text-[100px] text-green-em leading-none">24h</div>
              <div className="font-poppins font-bold text-xs uppercase tracking-widest text-muted md:max-w-[100px] leading-relaxed">
                Response<br/>Time
              </div>
            </div>
            
            <div className="hidden md:block w-px h-24 bg-bdr" />
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="font-playfair italic text-[72px] lg:text-[100px] text-green-em leading-none">15+</div>
              <div className="font-poppins font-bold text-xs uppercase tracking-widest text-muted md:max-w-[100px] leading-relaxed">
                Years<br/>Experience
              </div>
            </div>
            
            <div className="hidden md:block w-px h-24 bg-bdr" />
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="font-playfair italic text-[72px] lg:text-[100px] text-green-em leading-none">Free</div>
              <div className="font-poppins font-bold text-xs uppercase tracking-widest text-muted md:max-w-[100px] leading-relaxed">
                First<br/>Consultation
              </div>
            </div>

          </div>
        </div>
      </section>

      <MiniCTABar />
    </div>
  );
}
