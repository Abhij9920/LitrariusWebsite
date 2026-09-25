import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import FAQAccordion from '../components/shared/FAQAccordion';
import FinalCTA from '../components/shared/FinalCTA';
import MiniCTABar from '../components/shared/MiniCTABar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useReveal } from '../hooks/useReveal';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const whyCards = [
  { title: 'Global Academic Excellence',     body: '9 universities in the global top 100. Rigorous standards, cutting-edge research, and internationally recognised qualifications.' },
  { title: 'Diverse Academic Landscape',     body: '4,000+ accredited institutions offering specialised programs in marine biology, renewable energy, and indigenous studies.' },
  { title: 'Work While You Study',           body: 'Work 20 hours/week during term and full-time during breaks. Gain real-world experience while covering living costs.' },
  { title: 'Comprehensive Scholarships',     body: 'Australia Awards and Endeavour Scholarships provide substantial assistance to international students.' },
  { title: 'Innovation & Research Hub',      body: 'Global leader in climate science, AI, medical research, and sustainable technologies with world-class facilities.' },
  { title: 'Post-Study Work Visa',           body: 'Stay up to 4 years after graduation on a Temporary Graduate visa — a clear pathway to permanent residency.' },
];

const universities = [
  { rank: 'QS #13',  name: 'The University of Melbourne',  body: "Victoria's leading research university with world-class faculty and innovative programs.", img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80' },
  { rank: 'QS #18',  name: 'The University of Sydney',     body: "Australia's first university with exceptional programs across all disciplines.", img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&q=80' },
  { rank: 'QS #19',  name: 'UNSW Sydney',                  body: 'Excels in engineering, technology, and business with strong global employer recognition.', img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80' },
  { rank: 'QS #22',  name: 'Australian National University',body: 'Home to Nobel laureates and leading researchers in science, law, and policy.', img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80' },
  { rank: 'QS #28',  name: 'Monash University',            body: 'Global top-30 university renowned for pharmacy, engineering, and business.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80' },
  { rank: 'QS #40',  name: 'University of Queensland',     body: 'Leader in research commercialisation and health sciences — beautiful Brisbane campus.', img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80' },
  { rank: 'QS #82',  name: 'University of Western Australia', body: 'Perth-based research university known for mining, agriculture, and medical sciences.', img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80' },
  { rank: 'QS #89',  name: 'University of Adelaide',       body: 'Rich history of excellence in research and education, located in a vibrant city.', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80' },
  { rank: 'QS #113', name: 'University of Technology Sydney', body: 'Practice-oriented, renowned for design, IT, and business innovation in the heart of Sydney.', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80' },
];

const courses = [
  { name: 'Business Management', img: '/Uploads/business manegement.jpg' },
  { name: 'Engineering',         img: '/Uploads/engineering img for study in.jpg' },
  { name: 'Computer Science',    img: '/Uploads/computer science.jpg' },
  { name: 'Law',                 img: '/Uploads/law.jpg' },
  { name: 'Finance',             img: '/Uploads/finance.jpg' },
  { name: 'Architecture',        img: '/Uploads/architecture.jpg' },
];

const faqs = [
  { q: 'What are the popular courses to study in Australia?', a: 'Australia offers engineering, IT, business, health sciences, and arts. Business Management, Computer Science, Engineering, Law, Finance, and Architecture are most popular for international students.' },
  { q: 'What are the English language requirements?', a: 'Most universities require IELTS (Band 6.0–7.5) or PTE Academic. Literarius provides expert IELTS and PTE coaching to help you reach your target score.' },
  { q: 'Can I work while studying in Australia?', a: 'Yes. International students can work up to 20 hours per week during studies and full-time during semester breaks.' },
  { q: 'What is the cost of living in Australia?', a: 'Average AUD 20,000–30,000 per year depending on lifestyle and location, including accommodation (AUD 800–1,500/month), food, and transport.' },
  { q: 'How can I apply for a student visa?', a: 'Apply online via the Australian Department of Home Affairs. You need an offer letter, health and character checks, funds proof, and English test results. Literarius provides end-to-end support.' },
];

const pills = ['Fellowships', 'Assistantships', 'Sports Scholarships', 'Need Based', 'Australia Awards', 'Endeavour Scholarships', 'Merit Based', 'University Grants'];
const visa_docs = ['Confirmation of Enrolment', 'Student Visa', 'Academic Transcripts and Certificates', 'Statement of Purpose', 'Letter of Recommendation', 'English Language Proficiency (IELTS / PTE)', 'Valid Passport', 'Visa Application Fee', 'Financial Documents'];
const timeline = [
  ['Arrange OSHC Cover', 'Valid Overseas Student Health Cover before applying.'],
  ['Prepare Academic Documents', 'All transcripts, certificates, and resumes.'],
  ['Gather Work Experience Docs', 'Relevant documents if you have a gap year.'],
  ['Prepare GS Statement', 'Proof of Genuine Student — critical for approval.'],
  ['Schedule Visa Interview', 'Book with the Australian embassy.'],
  ['Await Visa Decision', 'Processing: 2–6 weeks. We track every step.'],
];

function RevealItem({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('opacity-100', '!translate-y-0');
        obs.unobserve(el);
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`opacity-0 translate-y-10 transition-all duration-[900ms] ease-out ${className}`}>{children}</div>;
}

function AnimatedNumber({ value, prefix = '', suffix = '', className = "font-poppins font-black text-[48px] text-green-em leading-none" }: { value: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        obs.unobserve(el);
        const duration = 2000;
        const startTime = performance.now();
        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.floor(easeOut * value));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <div ref={ref} className={className}>{prefix}{current.toLocaleString()}{suffix}</div>;
}

export default function Australia() {
  const revealWhy = useReveal();
  const revealUni = useReveal();
  const revealCourses = useReveal();
  const revealCosts = useReveal();
  const revealSchol = useReveal();
  const revealVisa = useReveal();
  const revealFaq = useReveal();

  return (
    <>
      <Hero
        imageSrc="/Uploads/australia.jpg"
        videoSrc="https://videos.pexels.com/video-files/3737970/3737970-uhd_2732_1440_25fps.mp4"
        imageAlt="Australian university campus"
        italicLine="Your Australian Education Journey Starts Here."
        heading={<>World-Class Australian Universities.<br />Personalised Guidance.</>}
        subText="42+ partner universities · Post-study work visa up to 4 years · 95% visa success rate"
        ctaLabel="Get Free Consultation"
        ctaTo="/contact"
        short
      >
        <div className="px-8 md:px-20 pb-12 w-full mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/20 border-t border-white/20 pt-8">
            {[
              ['42+', 'Universities'],
              ['AUD 20–45k', 'Avg Fees'],
              ['700k+', 'Intl Students'],
              ['4yr', 'Post-Study Visa']
            ].map(([val, label], i) => (
              <div key={label} className={i !== 0 ? 'pl-6' : ''}>
                <div className="font-poppins font-black text-2xl text-white">{val}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Hero>

      {/* Why Australia — cream */}
      <section ref={revealWhy} className="py-20 bg-cream opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="eyebrow-italic">Why Australia?</span>
              <h2>Why Study in Australia?</h2>
              <p className="mt-4 text-muted leading-relaxed mb-6">The world's #3 destination for international students — combining world-class education with an incredible lifestyle.</p>
              <Link to="/contact" className="btn btn-coral">Book Free Consultation</Link>
            </div>
            <div className="flex flex-col">
              {whyCards.map(({ title, body }, i) => (
                <RevealItem key={title} delay={i * 180} className="border-b border-bdr last:border-b-0 py-6 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-5">
                    <div className="font-poppins font-black text-[44px] text-green-em leading-none mt-0.5 tracking-tighter">0{i + 1}</div>
                    <div>
                      <h3 className="font-poppins font-semibold text-[19px] mb-2">{title}</h3>
                      <p className="font-inter text-[14.5px] text-muted">{body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Universities carousel — white */}
      <section ref={revealUni} className="py-20 bg-white opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <span className="eyebrow-italic">Our Partner Universities.</span>
            <h2>Top Australian Universities</h2>
          </div>
          <Swiper modules={[Pagination, Autoplay, Navigation]} slidesPerView={1} spaceBetween={20} loop autoplay={{ delay: 4500 }} navigation pagination={{ clickable: true }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-12">
            {universities.map(({ rank, name, body, img }, i) => (
              <SwiperSlide key={name}>
                <RevealItem delay={i * 180} className="bg-white border border-bdr rounded-xl overflow-hidden shadow-sm h-full group">
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent pointer-events-none" />
                    <span className="absolute top-4 right-4 inline-flex bg-black/60 backdrop-blur-sm text-white text-[10.5px] font-semibold px-3 py-1 rounded-full z-10">{rank}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-poppins font-semibold text-[15px] mb-2">{name}</h3>
                    <p className="font-inter text-[13px] text-muted">{body}</p>
                  </div>
                </RevealItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Courses — dark green */}
      <section ref={revealCourses} className="py-20 bg-dark-section opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <span className="font-playfair italic text-lg text-emerald-300 block mb-2">Top Programs.</span>
            <h2 className="text-white mb-3">Popular Courses in Australia</h2>
            <p className="text-white/60">Studying in Australia provides excellent career opportunities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map(({ name, img }, i) => (
              <RevealItem key={name} delay={i * 180} className="relative h-60 rounded-xl overflow-hidden cursor-pointer group">
                <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,78,59,0.88)] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 font-poppins font-bold text-sm tracking-widest uppercase text-white">{name}</div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Costs — cream */}
      <section ref={revealCosts} className="py-20 bg-cream opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <span className="eyebrow-italic">The Investment.</span>
            <h2>Cost of Studying in Australia</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <RevealItem delay={0}>
              <AnimatedNumber value={45} prefix="AUD 12–" suffix="k" />
              <div className="text-[13px] text-muted mt-2 uppercase tracking-wide">Annual Tuition</div>
            </RevealItem>
            <RevealItem delay={180}>
              <AnimatedNumber value={16000} prefix="AUD " />
              <div className="text-[13px] text-muted mt-2 uppercase tracking-wide">Avg Annual Living Cost</div>
            </RevealItem>
            <RevealItem delay={360}>
              <AnimatedNumber value={1500} prefix="AUD 500–" />
              <div className="text-[13px] text-muted mt-2 uppercase tracking-wide">Monthly Accommodation</div>
            </RevealItem>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="mb-4">Tuition Fees Breakdown</h3>
              <table className="w-full rounded-xl overflow-hidden shadow-md">
                <thead><tr className="bg-blue-acc text-white"><th className="p-3 text-left text-xs tracking-wide">Degree Level</th><th className="p-3 text-left text-xs tracking-wide">Annual Tuition</th></tr></thead>
                <tbody>
                  {[['Associate Degree','AUD 12,000 – 20,000'],['Bachelor\'s Degree','AUD 20,000 – 45,000'],['Master\'s Degree','AUD 22,000 – 50,000']].map(([d,t],i) => (
                    <tr key={d} className={i%2===1 ? 'bg-gray-50' : ''}><td className="p-3 text-sm border-b border-bdr">{d}</td><td className="p-3 text-sm border-b border-bdr">{t}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="mb-4">Living Expenses Breakdown</h3>
              <div className="flex flex-col gap-2.5">
                {[['On-Campus','AUD 800–900/month'],['Off-Campus','AUD 500–1,500/month'],['Homestay','AUD 1,000–1,200/month']].map(([l,v]) => (
                  <div key={l} className="flex justify-between items-center px-4 py-3 border border-bdr rounded-lg bg-white shadow-sm">
                    <span className="font-semibold text-sm">{l}</span><span className="text-blue-acc font-semibold text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships — white */}
      <section ref={revealSchol} className="py-20 bg-white opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10"><span className="eyebrow-italic">Financial Support.</span><h2>Scholarships in Australia</h2></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="mb-4 text-[14.5px]">Australia's scholarships are offered based on academic merit, financial need, or community involvement.</p>
              <p className="mb-4 text-[14.5px]">Types: Fellowships, Assistantships, Sports Scholarships, Need Based, and government programs.</p>
              <p className="mb-7 text-[14.5px]">Australia Awards and Endeavour Scholarships provide substantial financial assistance to international students.</p>
              <Link to="/contact" className="btn btn-coral">Check Scholarship Eligibility</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-playfair italic text-[20px] text-green-em leading-tight">"Australia offers extensive funding for international students"</h3>
              <div className="flex flex-wrap gap-2.5 mt-2">
                {pills.map((p, i) => (
                  <RevealItem key={p} delay={i * 180} className="inline-block">
                    <span className="bg-emerald-50 text-green-em border border-green-em text-xs font-medium px-3.5 py-1.5 rounded-full block">{p}</span>
                  </RevealItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa — dark green */}
      <section ref={revealVisa} className="py-20 bg-dark-section opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-playfair italic text-lg text-emerald-300 block mb-2">Your Pathway to Australia.</span>
            <h2 className="text-white">Visa &amp; Documents</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white text-[19px] mb-3">Documents Required</h3>
              <p className="text-white/55 text-sm mb-4">When applying as an international student, you typically need:</p>
              <div className="flex flex-col gap-2.5 mb-7">
                {visa_docs.map((d, i) => (
                  <RevealItem key={d} delay={i * 180} className="flex items-center gap-3 text-white/85 text-sm">
                    <span className="w-5 h-5 bg-green-em rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">✓</span>{d}
                  </RevealItem>
                ))}
              </div>
              <Link to="/contact" className="btn btn-coral">Get Free Visa Guidance</Link>
            </div>
            <div>
              <h3 className="text-white text-[19px] mb-3">Australia Study Visa Process</h3>
              <p className="text-white/55 text-sm mb-5">We provide comprehensive visa guidance — bank statements, latest updates, and mock interviews.</p>
              <div className="flex flex-col">
                {timeline.map(([h, b], i) => (
                  <RevealItem key={h} delay={i * 180} className="flex gap-3.5 relative">
                    {i < timeline.length - 1 && <div className="absolute left-4 top-8 w-0.5 h-full bg-white/10" />}
                    <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center font-poppins font-bold text-white text-[12.5px] flex-shrink-0 z-10">{i+1}</div>
                    <div className="pb-6">
                      <h4 className="text-white text-sm font-semibold">{h}</h4>
                      <p className="text-white/50 text-xs mt-0.5">{b}</p>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — cream */}
      <section ref={revealFaq} className="py-20 bg-cream opacity-0 translate-y-10 transition-all duration-[900ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow-italic">Your Questions, Answered.</span>
            <h2>Frequently Asked Questions</h2>
            <div className="mt-4 mb-6 font-playfair italic text-[22px] text-green-em">"Every question answered. Every step supported."</div>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <FinalCTA heading={<>Book Your Free Consultation<br />with Trusted Counsellors.</>} italic="Your Australian journey begins today." btnLabel="Book Free Consultation" />
      <MiniCTABar />
    </>
  );
}
