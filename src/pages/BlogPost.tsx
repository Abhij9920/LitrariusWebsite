import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MiniCTABar from '../components/shared/MiniCTABar';
import { articles } from '../data/articles';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const progressBarRef = useRef<HTMLDivElement>(null);
  const article = articles.find(a => a.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (progressBarRef.current) {
      progressBarRef.current.style.width = '0%';
    }
  }, [slug]);

  // Track scroll progress without triggering React re-renders
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (progressBarRef.current) {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = (totalScroll / windowHeight) * 100;
            progressBarRef.current.style.width = `${scroll}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-playfair text-4xl text-[#064E3B] mb-4">Article Not Found</h1>
        <p className="text-muted mb-8">The article you are looking for does not exist or has been moved.</p>
        <button onClick={() => navigate('/blog')} className="btn btn-coral">Back to Blog</button>
      </div>
    );
  }

  // Get related articles (just picking the next two for demo purposes, excluding current)
  const related = articles.filter(a => a.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen relative">
      
      {/* Scroll Progress Bar */}
      <div 
        ref={progressBarRef}
        className="fixed top-0 left-0 h-1 bg-emerald-500 z-50 transition-all duration-150 ease-out"
        style={{ width: '0%' }}
      />

      {/* Editorial Article Hero */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-20 px-6 max-w-[1000px] mx-auto text-center opacity-0 animate-fadeUp" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center justify-center gap-3 text-xs font-poppins font-bold uppercase tracking-widest mb-8">
          <span className="text-[#064E3B] bg-emerald-100 px-3 py-1.5 rounded-sm">{article.category}</span>
          <span className="text-muted">{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-bdr" />
          <span className="text-muted">{article.readTime}</span>
        </div>
        
        <h1 className="font-playfair text-[44px] md:text-[64px] lg:text-[76px] leading-[1.05] text-[#064E3B] mb-12 tracking-tight">
          {article.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-charcoal/80 font-playfair italic max-w-3xl mx-auto leading-relaxed">
          {article.excerpt}
        </p>
      </section>

      {/* Featured Image */}
      <section className="px-6 max-w-[1200px] mx-auto mb-20 opacity-0 animate-fadeUp" style={{ animationDelay: '300ms' }}>
        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-md">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 max-w-[750px] mx-auto mb-32 opacity-0 animate-fadeUp" style={{ animationDelay: '500ms' }}>
        <div className="prose prose-lg prose-emerald max-w-none 
          prose-headings:font-playfair prose-headings:text-[#064E3B] prose-headings:font-normal prose-headings:tracking-tight
          prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6
          prose-p:font-inter prose-p:text-charcoal/80 prose-p:leading-[1.8] prose-p:mb-8
          prose-blockquote:font-playfair prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:text-green-em 
          prose-blockquote:border-l-4 prose-blockquote:border-green-em prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-12
          prose-blockquote:bg-emerald-50 prose-blockquote:rounded-r-lg"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
        
        <div className="mt-16 pt-8 border-t border-bdr flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#064E3B] flex items-center justify-center text-white font-playfair italic text-xl">
            L
          </div>
          <div>
            <div className="font-poppins font-bold text-sm text-[#064E3B] uppercase tracking-widest">{article.author}</div>
            <div className="text-xs text-muted">Literarius Education Experts</div>
          </div>
        </div>
      </section>

      {/* In-Article CTA */}
      <section className="px-6 max-w-[1000px] mx-auto mb-32">
        <div className="bg-[#064E3B] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/bg-pattern.webp')] bg-cover mix-blend-overlay" />
          <div className="relative z-10">
            <h3 className="font-playfair text-3xl md:text-5xl text-white mb-6">Ready to apply?</h3>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              Our experts can evaluate your profile and map out your personalized journey to Australia's top institutions.
            </p>
            <Link to="/contact" className="btn bg-white text-[#064E3B] hover:bg-gray-100 px-8 py-4 uppercase font-bold tracking-widest text-sm">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-24 bg-[#FAF9F6] border-t border-bdr">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-playfair text-[32px] md:text-[44px] text-[#064E3B] tracking-tight">Keep Reading</h2>
            <Link to="/blog" className="text-sm font-poppins font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors hidden md:block">
              View All Insights →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {related.map(rel => (
              <Link key={rel.slug} to={`/blog/${rel.slug}`} className="group flex gap-6 items-center bg-white p-4 rounded-xl border border-bdr hover:shadow-md transition-shadow">
                <div className="w-1/3 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                  <img src={rel.img} alt={rel.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div>
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-widest text-muted mb-2">
                    {rel.category}
                  </div>
                  <h4 className="font-playfair text-xl md:text-2xl text-[#064E3B] leading-tight group-hover:text-green-em transition-colors tracking-tight">
                    {rel.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/blog" className="btn btn-outline-dark">View All Insights</Link>
          </div>
        </div>
      </section>

      <MiniCTABar />
    </div>
  );
}
