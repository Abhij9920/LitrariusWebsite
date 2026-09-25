import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { date: 'August 2026',     title: 'Top 9 Australian Universities — QS Rankings 2025 Guide' },
  { date: 'August 2026',     title: 'IELTS vs PTE: Which Should You Take for Australian Visa?' },
  { date: 'July 2026',       title: 'Australia Post-Study Work Visa: Everything Indian Students Need to Know' },
];

export default function ArticlesSection() {
  return (
    <section className="py-16 bg-dark-section">
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-[32px] md:text-[44px] font-playfair tracking-tight mb-4 lg:mb-0">Study Australia: Resources &amp; Guides</h2>
          <Link to="/blog" className="btn btn-outline-white btn-sm">View All Resources</Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-5">
          {/* Featured */}
          <div className="rounded-xl overflow-hidden relative min-h-[340px]">
            <img src="/images/article-scholarship.webp" alt="Scholarship Guide" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,30,20,0.92)] via-[rgba(0,0,0,0.2)] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-green-em text-white text-[10.5px] font-semibold px-3 py-1 rounded-full mb-3">
                Scholarship Guide
              </span>
              <div className="font-poppins font-semibold text-[19px] text-white leading-snug mb-2">
                Complete Guide to Australian University Scholarships for Indian Students
              </div>
              <div className="text-xs text-white/45">Updated September 2026</div>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-3">
            {articles.map(({ date, title }) => (
              <div
                key={title}
                className="bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3.5 cursor-pointer
                           hover:bg-white/[0.12] transition-colors group"
              >
                <div className="text-[11px] text-white/40 mb-1.5">{date}</div>
                <div className="font-poppins font-semibold text-sm text-white/88 leading-snug
                               group-hover:text-green-em transition-colors">
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
