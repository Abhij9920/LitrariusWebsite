import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCTABar from '../components/shared/MiniCTABar';

const categories = ['All', 'Study in Australia', 'Universities', 'IELTS & PTE', 'Scholarships', 'Student Visa', 'Courses', 'Student Life'];

const articles = [
  {
    slug: 'top-australian-universities-indian-students',
    title: 'Top Australian Universities for Indian Students in 2026',
    excerpt: 'A comprehensive breakdown of the Group of Eight and emerging institutions that offer the best ROI and student experience for Indian applicants.',
    category: 'Universities',
    date: 'Sep 24, 2026',
    readTime: '6 min read',
    img: '/images/campus-monash.webp',
    featured: true
  },
  {
    slug: 'ielts-vs-pte-australia',
    title: 'IELTS vs PTE: Which Should You Take for Your Australian Visa?',
    excerpt: 'We analyze scoring systems, test formats, and university acceptance rates to help you decide which English test aligns with your strengths.',
    category: 'IELTS & PTE',
    date: 'Sep 18, 2026',
    readTime: '5 min read',
    img: '/images/coaching-mock.webp'
  },
  {
    slug: 'australian-scholarships-guide',
    title: 'The Complete Guide to Australian University Scholarships',
    excerpt: 'From government-funded Destination Australia grants to university-specific merit awards—how to fund your education down under.',
    category: 'Scholarships',
    date: 'Sep 12, 2026',
    readTime: '8 min read',
    img: '/images/article-scholarship.webp'
  },
  {
    slug: 'studying-computer-science-australia',
    title: 'Why Australia is the New Hub for Computer Science Degrees',
    excerpt: 'With massive investments in AI and cybersecurity, Australian universities are producing highly sought-after tech graduates globally.',
    category: 'Courses',
    date: 'Sep 05, 2026',
    readTime: '6 min read',
    img: '/images/course-cs.webp'
  },
  {
    slug: 'student-visa-application-guide',
    title: 'Australian Student Visa Application Guide 2026',
    excerpt: 'Step-by-step instructions on compiling your Genuine Student (GS) documents, financial evidence, and navigating the new visa rules.',
    category: 'Student Visa',
    date: 'Aug 28, 2026',
    readTime: '10 min read',
    img: '/images/student-5.webp'
  },
  {
    slug: 'post-study-work-options',
    title: 'Post-Study Work Options: Pathway to Permanent Residency',
    excerpt: 'Understanding the Temporary Graduate visa (subclass 485) and how regional study can extend your right to work in Australia.',
    category: 'Study in Australia',
    date: 'Aug 15, 2026',
    readTime: '7 min read',
    img: '/images/campus-unsw.webp'
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = articles.find(a => a.featured);
  
  const filteredArticles = articles.filter(a => {
    if (a.featured && activeCategory === 'All' && !searchQuery) return false; // Hide featured from grid if no filters applied
    const matchCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Blog Editorial Hero */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 border-b border-bdr bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/bg-pattern.webp')] opacity-5 mix-blend-multiply pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="font-poppins uppercase tracking-widest text-green-em text-xs font-bold mb-6 block">The Literarius Journal</span>
            <h1 className="font-playfair text-[56px] md:text-[76px] lg:text-[96px] leading-[1.05] text-[#064E3B] mb-8 tracking-tight">
              Study Australia.<br />
              <span className="italic text-charcoal/80">Insights that move you forward.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Expert advice, policy updates, and strategic guidance on university admissions, visa processing, and building a life in Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article (only shows when 'All' is selected and no search query) */}
      {activeCategory === 'All' && !searchQuery && featuredArticle && (
        <section className="py-24 px-6 max-w-[1200px] mx-auto border-b border-bdr">
          <span className="font-poppins uppercase tracking-widest text-charcoal/50 text-xs font-bold mb-8 block">Featured Story</span>
          <Link to={`/blog/${featuredArticle.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-video lg:aspect-[4/3] relative">
                <img src={featuredArticle.img} alt={featuredArticle.title} className="w-full h-full object-cover transition-transform duration-[2000ms] ease-cinematic-slow group-hover:scale-105" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-poppins font-bold uppercase tracking-widest text-[#064E3B]">
                  {featuredArticle.category}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 text-xs font-semibold text-muted uppercase tracking-widest mb-6">
                  <span>{featuredArticle.date}</span>
                  <span className="w-1 h-1 rounded-full bg-green-em" />
                  <span>{featuredArticle.readTime}</span>
                </div>
                <h2 className="font-playfair text-[40px] lg:text-[52px] leading-[1.1] text-[#064E3B] mb-6 group-hover:text-green-em transition-colors tracking-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <span className="font-poppins font-bold text-sm tracking-widest uppercase text-emerald-500 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  Read Article <span className="text-lg">→</span>
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid & Filters */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          
          {/* Categories */}
          <div className="flex gap-3 flex-wrap flex-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300
                  ${activeCategory === cat 
                    ? 'bg-[#064E3B] text-white shadow-md' 
                    : 'bg-white border border-bdr text-charcoal hover:border-[#064E3B] hover:text-[#064E3B]'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-[320px]">
            <input 
              type="text" 
              placeholder="Search insights..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-bdr rounded-full px-6 py-3.5 text-sm text-charcoal focus:outline-none focus:border-[#064E3B] transition-colors"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-charcoal/30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>
          
        </div>

        {/* The Grid (Asymmetrical / Editorial) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {filteredArticles.map((article, i) => (
              <Link key={article.slug} to={`/blog/${article.slug}`} className={`group flex flex-col ${i % 2 !== 0 ? 'md:mt-16' : ''}`}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-8 shadow-sm relative">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-[2000ms] ease-cinematic-slow group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-poppins font-bold uppercase tracking-widest text-[#064E3B] rounded-sm shadow-sm">
                    {article.category}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-semibold text-muted uppercase tracking-widest mb-4">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-green-em" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-playfair text-[28px] md:text-[32px] leading-[1.2] text-[#064E3B] mb-4 group-hover:text-green-em transition-colors tracking-tight">
                  {article.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <span className="font-poppins font-bold text-xs tracking-widest uppercase text-emerald-500 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5 mt-auto">
                  Read Article <span className="text-sm">→</span>
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-bdr rounded-2xl">
            <h3 className="font-playfair text-2xl text-[#064E3B] mb-2">No articles found</h3>
            <p className="text-muted">Try adjusting your search or category filters.</p>
          </div>
        )}
      </section>

      <MiniCTABar />
    </div>
  );
}
