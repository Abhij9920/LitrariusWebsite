import React from 'react';

const items = [
  { num: '42+',        lbl: 'Partner Universities' },
  { num: '1,000+',     lbl: 'Students Placed' },
  { num: '700,000+',   lbl: 'Intl Students in AU' },
  { num: '95%',        lbl: 'Visa Success Rate' },
  { num: '4 Years',    lbl: 'Post-Study Work Visa' },
  { num: 'AUD 20–45k', lbl: 'Annual Tuition Range' },
];

// Duplicate for seamless loop
const track = [...items, ...items];

export default function Ticker() {
  return (
    <div className="bg-white border-t border-bdr border-b border-bdr py-5 overflow-hidden ticker-wrap">
      <div className="flex whitespace-nowrap animate-marquee ticker-track">
        {track.map(({ num, lbl }, i) => (
          <React.Fragment key={i}>
            <span className="inline-flex items-baseline gap-1.5 px-10">
              <span className="font-poppins font-bold text-[18px] text-green-em">{num}</span>
              <span className="text-sm text-charcoal">{lbl}</span>
            </span>
            <span className="text-bdr text-xl px-1">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
