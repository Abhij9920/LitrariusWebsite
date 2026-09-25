import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const words = ['Melbourne', 'Sydney', 'UNSW', 'Monash', 'ANU'];

export default function ImageBreak() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[380px] overflow-hidden">
      <img src="/Uploads/australia.png" alt="Australian landmark" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[rgba(6,30,20,0.65)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-sm text-white/65 mb-3">Meet Our Australia Admissions Experts Getting Students Into</p>
        <div
          className="font-poppins font-black text-white text-[clamp(36px,6vw,60px)] min-h-[1.2em] transition-all duration-350 ease-in-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)' }}
        >
          {words[idx]}
        </div>
        <div className="mt-5">
          <Link to="/about" className="btn btn-outline-white">Meet Our Team</Link>
        </div>
      </div>
    </section>
  );
}
