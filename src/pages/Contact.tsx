import React, { useState, useRef, useEffect } from 'react';
import Hero from '../components/shared/Hero';
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
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="mb-4"><label className="form-label">Full Name *</label><input className="form-input" placeholder="John Smith" required /></div>
      <div className="mb-4"><label className="form-label">Email Address *</label><input type="email" className="form-input" placeholder="john@example.com" required /></div>
      <div className="mb-4"><label className="form-label">Phone Number *</label><input type="tel" className="form-input" placeholder="+91 9xxxxxxxxx" required /></div>
      <div className="mb-4">
        <label className="form-label">Service Needed *</label>
        <select className="form-input" required>
          <option value="">Select a service</option>
          <option>Study in Australia</option><option>IELTS Coaching</option>
          <option>PTE Coaching</option><option>Both Coaching + Admission</option>
        </select>
      </div>
      <div className="mb-4"><label className="form-label">Country of Residence *</label><input className="form-input" placeholder="India" required /></div>
      <div className="mb-6"><label className="form-label">Your Message *</label><textarea className="form-input min-h-[120px] resize-y" placeholder="Tell us about your goals and how we can help..." required /></div>
      <button type="submit" className="btn btn-coral w-full justify-center text-base py-3.5">Send Message</button>
      {success && <div className="mt-4 bg-emerald-50 border border-green-em text-emerald-700 font-medium text-sm rounded-lg px-4 py-3">✓ Thank you! We will get back to you within 24 hours.</div>}
    </form>
  );
}

export default function Contact() {
  const revealContact = useReveal();
  const revealTrust = useReveal();

  return (
    <>
      <Hero
        imageSrc="/Uploads/australia.png"
        imageAlt="Australian cityscape"
        italicLine="We Are Here for You."
        heading={<>Get in Touch<br />with Our Experts.</>}
        subText="We respond within 24 hours. Monday–Saturday, 9 AM to 7 PM IST."
        ctaLabel=""
        ctaTo=""
        short
      />

      {/* Contact Split — white */}
      <section ref={revealContact} id="contact-section" className="py-24 bg-white opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl border border-bdr">
            
            {/* Left Form Panel */}
            <div className="bg-white p-10 md:p-14 lg:p-16">
              <span className="eyebrow-italic">Send a Message.</span>
              <h2 className="font-poppins font-bold text-3xl mb-8">Let's Talk</h2>
              <ContactForm />
            </div>
            
            {/* Right Dark Panel */}
            <div className="bg-dark-section p-10 md:p-14 lg:p-16 flex flex-col h-full text-white">
              <div className="font-poppins font-bold text-xl mb-12 flex items-center gap-2">🌿 Literarius</div>
              
              <div className="flex flex-col gap-6 flex-1">
                <div className="border-b border-white/10 pb-6">
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Phone</div>
                  <div className="text-[14px] leading-relaxed">+91 9607621025<br />+91 8600068599</div>
                </div>
                
                <div className="border-b border-white/10 pb-6">
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Email</div>
                  <div className="text-[14px]">info@theexpatlives.com</div>
                </div>
                
                <div className="border-b border-white/10 pb-6">
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Address</div>
                  <div className="text-[14px] leading-relaxed">245, Ijmima Building, Mindspace,<br />Malad West, Mumbai 400064</div>
                </div>
                
                <div className="border-b border-white/10 pb-6">
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Hours</div>
                  <div className="text-[14px] leading-relaxed">Monday–Saturday<br />9 AM – 7 PM IST</div>
                </div>
              </div>

              <div className="mt-12 font-playfair italic text-white/70 text-[16px] leading-relaxed border-l-2 border-green-em pl-4">
                "We have helped 1,000+ students begin their Australian journey. Yours could be next."
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Indicators — cream */}
      <section ref={revealTrust} className="py-16 bg-cream opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="bg-gray-100 rounded-xl py-10 px-6 flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-bdr text-center">
            
            <div className="w-full md:w-1/3 py-4 md:py-0 md:px-8">
              <div className="font-poppins font-bold text-[36px] text-green-em leading-none mb-1.5">24h</div>
              <div className="font-inter text-[12px] text-muted uppercase tracking-wider">Response</div>
            </div>
            
            <div className="w-full md:w-1/3 py-4 md:py-0 md:px-8">
              <div className="font-poppins font-bold text-[36px] text-green-em leading-none mb-1.5">15+</div>
              <div className="font-inter text-[12px] text-muted uppercase tracking-wider">Years Experience</div>
            </div>
            
            <div className="w-full md:w-1/3 py-4 md:py-0 md:px-8">
              <div className="font-poppins font-bold text-[36px] text-green-em leading-none mb-1.5">Free</div>
              <div className="font-inter text-[12px] text-muted uppercase tracking-wider">First Consultation</div>
            </div>

          </div>
        </div>
      </section>

      <MiniCTABar />
    </>
  );
}
