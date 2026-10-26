import React from 'react';
import { useReveal } from '../../hooks/useReveal';

export default function ProofSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-12">
          <span className="eyebrow-italic">Numbers Don't Lie.</span>
          <h2 className="font-playfair text-[32px] md:text-[44px] text-[#064E3B] mb-6 tracking-tight">Proven Success. Unmatched Results.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-bdr rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div className="font-poppins font-black text-[56px] text-green-em leading-none mb-4">1,000+</div>
            <p className="text-[14px] text-muted leading-relaxed">Total successful university placements at Australia's leading institutions.</p>
          </div>

          <div className="bg-white border border-bdr rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div className="font-poppins font-black text-[56px] text-green-em leading-none mb-4">42+</div>
            <p className="text-[14px] text-muted leading-relaxed">Partner universities across Australia, covering every major city and discipline.</p>
          </div>

          <div className="bg-white border border-bdr rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div className="font-poppins font-black text-[56px] text-green-em leading-none mb-4">15+</div>
            <p className="text-[14px] text-muted leading-relaxed">Years of experience guiding international students to their Australian university offer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
