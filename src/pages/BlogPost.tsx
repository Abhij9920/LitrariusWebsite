import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MiniCTABar from '../components/shared/MiniCTABar';

const mockArticle = {
  slug: 'top-australian-universities-indian-students',
  title: 'Top Australian Universities for Indian Students in 2026',
  excerpt: 'A comprehensive breakdown of the Group of Eight and emerging institutions that offer the best ROI and student experience for Indian applicants.',
  category: 'Universities',
  date: 'Sep 24, 2026',
  readTime: '6 min read',
  img: '/images/campus-monash.webp',
  content: `
    <p>Australia has cemented its position as the third most popular study destination in the world, and for Indian students, the appeal is stronger than ever. Beyond the famous sunny lifestyle and stunning landscapes, Australia offers an educational infrastructure that prioritizes practical outcomes, high employability, and world-class research facilities.</p>
    
    <h2>The Group of Eight (Go8) Advantage</h2>
    <p>The Group of Eight represents Australia's leading research-intensive universities. For Indian students aiming for degrees in STEM, Business, or Healthcare, these institutions provide unparalleled ROI. They consistently rank in the global top 100 and boast the highest employment rates in the country.</p>
    <p>When you graduate from a Go8 university, you carry a brand that is instantly recognized by employers from Silicon Valley to Bangalore.</p>
    
    <h2>Cost vs. Value</h2>
    <p>While Go8 universities carry a premium tuition fee (typically ranging from AUD 45,000 to AUD 55,000 annually), the post-study work rights and the sheer quality of the alumni network often offset the initial investment. Furthermore, institutions like the University of Melbourne and UNSW Sydney offer substantial merit-based scholarships specifically designed for high-achieving South Asian applicants.</p>
    
    <h2>Emerging Tech Hubs</h2>
    <p>Beyond the Go8, universities like RMIT, UTS, and Macquarie University are gaining massive popularity among Indian students. Why? Their deep integration with industry. These universities often co-design their curriculums with tech giants, ensuring that graduates possess exactly the skills required by the current market.</p>
    
    <blockquote>"The best university isn't always the highest-ranked one; it's the one that aligns perfectly with your career trajectory and budget."</blockquote>
    
    <h2>Making the Right Choice</h2>
    <p>When selecting your university, look beyond the overall QS ranking. Analyze the subject-specific rankings, the availability of industry placements (internships), the cost of living in that specific city, and the strength of the Indian student community on campus.</p>
  `,
  author: 'Literarius Editorial Team'
};

const related = [
  {
    slug: 'studying-computer-science-australia',
    title: 'Why Australia is the New Hub for Computer Science Degrees',
    img: '/images/course-cs.webp',
    category: 'Courses'
  },
  {
    slug: 'post-study-work-options',
    title: 'Post-Study Work Options: Pathway to Permanent Residency',
    img: '/images/campus-unsw.webp',
    category: 'Study in Australia'
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  
  // In a real app, fetch article by slug. Here we use mock data.
  const article = mockArticle;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Editorial Article Hero */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-20 px-6 max-w-[1000px] mx-auto text-center">
        <div className="flex items-center justify-center gap-3 text-xs font-poppins font-bold uppercase tracking-widest mb-8">
          <span className="text-[#064E3B] bg-emerald-100 px-3 py-1.5 rounded-sm">{article.category}</span>
          <span className="text-muted">{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-bdr" />
          <span className="text-muted">{article.readTime}</span>
        </div>
        
        <h1 className="font-playfair text-[44px] md:text-[64px] lg:text-[76px] leading-[1.05] text-[#064E3B] mb-12 tracking-tight">
          {article.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-charcoal/70 font-playfair italic max-w-3xl mx-auto leading-relaxed">
          {article.excerpt}
        </p>
      </section>

      {/* Featured Image */}
      <section className="px-6 max-w-[1200px] mx-auto mb-20">
        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-md">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 max-w-[750px] mx-auto mb-32">
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
                  <img src={rel.img} alt={rel.title} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
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
