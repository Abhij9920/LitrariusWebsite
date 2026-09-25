import React, { useState, useRef } from 'react';
import Hero from '../components/shared/Hero';
import MiniCTABar from '../components/shared/MiniCTABar';

const details = [
  { icon: '📞', h: 'Phone Numbers',  body: '+91 9607621025\n+91 8600068599' },
  { icon: '✉️', h: 'Email Address',  body: 'info@theexpatlives.com' },
  { icon: '📍', h: 'Office Address', body: '245, Ijmima Building, Mindspace,\nMalad West, Mumbai 400064' },
  { icon: '🕐', h: 'Office Hours',   body: 'Monday–Saturday\n9 AM – 7 PM IST' },
];

const trust = [
  { icon: '⚡', h: 'Quick Response',   body: 'We reply to all enquiries within 24 hours — Monday to Saturday, 9 AM to 7 PM IST.' },
  { icon: '🎓', h: 'Expert Guidance',  body: 'Certified counsellors with 15+ years of experience in Australian admissions and IELTS/PTE coaching.' },
  { icon: '🆓', h: 'Free Consultation', body: 'Your first consultation is completely free. Get a personalised roadmap at no cost.' },
];

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
      <div className="mb-5"><label className="form-label">Your Message *</label><textarea className="form-input min-h-[120px] resize-y" placeholder="Tell us about your goals and how we can help..." required /></div>
      <button type="submit" className="btn btn-coral w-full justify-center text-base py-3.5">Send Message</button>
      {success && <div className="mt-4 bg-emerald-50 border border-green-em text-emerald-700 font-medium text-sm rounded-lg px-4 py-3">✓ Thank you! We will get back to you within 24 hours.</div>}
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <Hero
        imageSrc="/Uploads/australia.png"
        imageAlt="Australian cityscape"
        italicLine="We Are Here for You."
        heading={<>Get in Touch<br />with Our Experts.</>}
        subText="Questions about studying in Australia or need IELTS/PTE coaching? We respond within 24 hours."
        ctaLabel="Call Us Now"
        ctaTo="#contact-section"
        short
      />

      {/* Contact form + details — white */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — form */}
            <div>
              <span className="eyebrow-italic">Send a Message.</span>
              <h2 className="text-3xl mb-7">Let's Talk</h2>
              <ContactForm />
            </div>
            {/* Right — details */}
            <div>
              <span className="eyebrow-italic">Find Us.</span>
              <h2 className="text-3xl mb-6">Our Details</h2>
              <div className="flex flex-col gap-3 mb-4">
                {details.map(({ icon, h, body }) => (
                  <div key={h} className="flex gap-3 p-4 border border-bdr rounded-xl bg-white shadow-sm hover:border-green-em hover:translate-x-1 transition-all">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
                    <div>
                      <h4 className="font-semibold text-sm text-ink mb-0.5">{h}</h4>
                      <p className="text-xs text-muted whitespace-pre-line">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-40 bg-gray-100 border-2 border-dashed border-bdr rounded-xl flex flex-col items-center justify-center text-muted gap-1.5">
                <span className="text-3xl">🗺️</span>
                <span className="font-semibold text-sm">Map Coming Soon</span>
                <span className="text-xs">245 Ijmima Building, Mindspace, Malad West</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust cards — cream */}
      <section className="py-20 bg-cream">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12"><span className="eyebrow-italic">What to Expect.</span><h2>Why Contact Us?</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trust.map(({ icon, h, body }) => (
              <div key={h} className="card-base p-6 text-center hover:border-coral">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="text-[16px] mb-2">{h}</h3>
                <p className="text-[13.5px] text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MiniCTABar />
    </>
  );
}
