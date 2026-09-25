import React, { useState } from 'react';

interface FAQ { q: string; a: string; }

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-2.5">
      {faqs.map(({ q, a }, i) => (
        <div
          key={i}
          className={`border-[1.5px] rounded-xl transition-colors ${open === i ? 'border-green-em' : 'border-bdr'}`}
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white rounded-xl hover:bg-gray-50"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-inter font-semibold text-[14.5px] text-ink pr-4">{q}</span>
            <span
              className={`w-6 h-6 flex items-center justify-center rounded-full text-[17px] flex-shrink-0 transition-all duration-300
                ${open === i ? 'bg-coral text-white rotate-45' : 'bg-gray-100 text-green-logo'}`}
            >
              +
            </span>
          </button>
          <div
            className="faq-answer"
            style={{ maxHeight: open === i ? '200px' : '0' }}
          >
            <p className="px-5 pb-4 text-muted text-[13.5px] leading-relaxed">{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
