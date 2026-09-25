import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/shared/FAQAccordion';
import MiniCTABar from '../components/shared/MiniCTABar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Mousewheel } from 'swiper/modules';
import { useReveal } from '../hooks/useReveal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const whyCards = [
  { title: 'Global Academic Excellence',     body: '9 universities in the global top 100. Rigorous standards, cutting-edge research, and internationally recognised qualifications.', img: '/images/campus-monash.webp' },
  { title: 'Diverse Academic Landscape',     body: '4,000+ accredited institutions offering specialised programs in marine biology, renewable energy, and indigenous studies.', img: '/images/campus-uq.webp' },
  { title: 'Work While You Study',           body: 'Work up to 48 hours per fortnight during term and full-time during breaks. Gain real-world experience while covering living costs.', img: '/images/student-3.webp' },
  { title: 'Innovation & Research Hub',      body: 'Global leader in climate science, AI, medical research, and sustainable technologies with world-class facilities.', img: '/images/campus-anu.webp' },
  { title: 'Post-Study Work Visa',           body: 'Gain valuable post-study work experience on a Temporary Graduate visa — a clear pathway to permanent residency.', img: '/images/student-2.webp' },
];

const universities = [
  { rank: 'QS #13',  name: 'The University of Melbourne',  body: "Victoria's leading research university with world-class faculty and innovative programs.", img: '/images/campus-uwa.webp', location: 'Melbourne, Victoria' },
  { rank: 'QS #18',  name: 'The University of Sydney',     body: "Australia's first university with exceptional programs across all disciplines.", img: '/images/campus-monash.webp', location: 'Sydney, NSW' },
  { rank: 'QS #19',  name: 'UNSW Sydney',                  body: 'Excels in engineering, technology, and business with strong global employer recognition.', img: '/images/campus-unsw.webp', location: 'Sydney, NSW' },
  { rank: 'QS #22',  name: 'Australian National University',body: 'Home to Nobel laureates and leading researchers in science, law, and policy.', img: '/images/campus-anu.webp', location: 'Canberra, ACT' },
  { rank: 'QS #28',  name: 'Monash University',            body: 'Global top-30 university renowned for pharmacy, engineering, and business.', img: '/images/campus-monash.webp', location: 'Melbourne, Victoria' },
  { rank: 'QS #40',  name: 'University of Queensland',     body: 'Leader in research commercialisation and health sciences — beautiful Brisbane campus.', img: '/images/campus-uq.webp', location: 'Brisbane, Queensland' },
  { rank: 'QS #82',  name: 'University of Western Australia', body: 'Perth-based research university known for mining, agriculture, and medical sciences.', img: '/images/campus-uwa.webp', location: 'Perth, WA' },
];

const courses = [
  { name: 'Business Management', img: '/images/course-business.webp', size: 'large' },
  { name: 'Engineering',         img: '/images/course-engineering.webp', size: 'tall' },
  { name: 'Computer Science',    img: '/images/course-cs.webp', size: 'regular' },
  { name: 'Law',                 img: '/images/course-law.webp', size: 'wide' },
  { name: 'Finance',             img: '/images/course-finance.webp', size: 'regular' },
];

const faqs = [
  { q: 'What are the popular courses to study in Australia?', a: 'Australia offers engineering, IT, business, health sciences, and arts. Business Management, Computer Science, Engineering, Law, Finance, and Architecture are most popular for international students.' },
  { q: 'What are the English language requirements?', a: 'Most universities require IELTS (Band 6.0–7.5) or PTE Academic. Literarius provides expert IELTS and PTE coaching to help you reach your target score.' },
  { q: 'Can I work while studying in Australia?', a: 'Yes. International students can work up to 20 hours per week during studies and full-time during semester breaks.' },
  { q: 'What is the cost of living in Australia?', a: 'Average AUD 20,000–30,000 per year depending on lifestyle and location, including accommodation (AUD 800–1,500/month), food, and transport.' },
  { q: 'How can I apply for a student visa?', a: 'Apply online via the Australian Department of Home Affairs. You need an offer letter, health and character checks, funds proof, and English test results. Literarius provides end-to-end support.' },
];

const scholarshipsList = [
  { name: 'Australia Awards', desc: 'Fully funded scholarships by the Australian Government covering tuition, travel, and living expenses.' },
  { name: 'Destination Australia', desc: 'Funding for students choosing to study in regional Australia, offering up to AUD 15,000 per year.' },
  { name: 'University-Specific Grants', desc: 'Direct financial aid provided by top institutions based on academic excellence or need.' },
  { name: 'Research Training Program (RTP)', desc: 'Block grants provided to universities to support both domestic and overseas students undertaking Research degrees.' }
];

const timeline = [
  ['Arrange OSHC Cover', 'Valid Overseas Student Health Cover before applying.'],
  ['Prepare Academic Documents', 'All transcripts, certificates, and resumes.'],
  ['Gather Work Experience Docs', 'Relevant documents if you have a gap year.'],
  ['Prepare GS Statement', 'Proof of Genuine Student — critical for approval.'],
  ['Schedule Visa Interview', 'Book with the Australian embassy.'],
  ['Await Visa Decision', 'Processing: 2–6 weeks. We track every step.'],
];

function RevealItem({ children, delay = 0, className = '', type = 'fade-up' }: { children: React.ReactNode, delay?: number, className?: string, type?: 'fade-up' | 'fade-in' | 'slide-left' }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('opacity-100', '!translate-y-0', '!translate-x-0', '!scale-100');
        obs.unobserve(el);
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  let baseClass = 'opacity-0 transition-all ease-cinematic ';
  if (type === 'fade-up') baseClass += 'translate-y-12 duration-[1000ms]';
  if (type === 'fade-in') baseClass += 'scale-[0.98] duration-[1200ms]';
  if (type === 'slide-left') baseClass += '-translate-x-12 duration-[1000ms]';

  return <div ref={ref} className={`${baseClass} ${className}`}>{children}</div>;
}

function AnimatedNumber({ value, prefix = '', suffix = '', className = "font-poppins font-black text-[56px] text-[#064E3B] leading-none" }: { value: number; prefix?: string; suffix?: string; className?: string }) {
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
    <div className="bg-[#FAF9F6]">
      {/* Editorial Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-5 z-10 relative">
            <RevealItem delay={0} type="slide-left">
              <span className="font-poppins font-bold tracking-widest uppercase text-green-em text-xs mb-4 block">The Ultimate Destination</span>
              <h1 className="font-playfair text-[56px] md:text-[76px] lg:text-[96px] leading-[1.05] text-[#064E3B] mb-6 tracking-tight">
                Study in<br /><span className="italic text-green-em">Australia.</span>
              </h1>
              <p className="text-lg text-charcoal/80 mb-10 max-w-md leading-relaxed">
                World-class universities, an incredible lifestyle, and a clear pathway to global career opportunities.
              </p>
              <Link to="/contact" className="btn btn-coral px-8 py-4">Start Your Application</Link>
              
              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-bdr pt-8">
                <div>
                  <div className="font-poppins font-black text-3xl text-green-em mb-1">42+</div>
                  <div className="text-xs uppercase tracking-widest text-charcoal/60">Universities</div>
                </div>
                <div>
                  <div className="font-poppins font-black text-3xl text-green-em mb-1">Post-Study</div>
                  <div className="text-xs uppercase tracking-widest text-charcoal/60">Work Visas</div>
                </div>
              </div>
            </RevealItem>
          </div>
          <div className="lg:col-span-7 relative h-[50vh] lg:h-[750px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <RevealItem delay={300} type="fade-in" className="w-full h-full">
              <video 
                src="https://videos.pexels.com/video-files/3737970/3737970-uhd_2732_1440_25fps.mp4"
                poster="/images/hero-australia.webp"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover"
              />
            </RevealItem>
          </div>
        </div>
      </section>

      {/* Why Australia — Editorial Layout */}
      <section ref={revealWhy} className="py-24 bg-white opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] mb-4 tracking-tight">Why Australia?</h2>
            <p className="text-muted max-w-2xl mx-auto">The world's #3 destination for international students, combining rigorous academics with unparalleled lifestyle.</p>
          </div>
          
          <div className="flex flex-col gap-12 lg:gap-0">
            {whyCards.map(({ title, body, img }, i) => (
              <RevealItem key={title} delay={0} type="fade-up" className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 lg:py-16 py-12 border-b border-bdr last:border-0`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group">
                    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-[1500ms] ease-cinematic-slow group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[#064E3B]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="font-playfair italic text-6xl text-green-em/10 mb-4 select-none">
                    0{i + 1}
                  </div>
                  <h3 className="font-poppins font-bold text-2xl lg:text-3xl text-charcoal mb-4">{title}</h3>
                  <p className="font-inter text-[16px] text-muted leading-relaxed">{body}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Universities — Horizontal Showcase */}
      <section ref={revealUni} className="py-32 bg-[#064E3B] overflow-hidden opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out text-white">
        <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-poppins uppercase tracking-widest text-emerald-300 text-xs mb-3 block">Premium Institutions</span>
            <h2 className="font-playfair text-[44px] md:text-[56px] text-white tracking-tight">Where Ambition Meets Excellence</h2>
          </div>
          <p className="text-white/70 max-w-sm text-sm">We partner with Australia's most prestigious universities to give you access to world-class faculty and facilities.</p>
        </div>
        
        <div className="ml-6 md:ml-[calc((100vw-1400px)/2+24px)] pr-6">
          <Swiper 
            modules={[Navigation, FreeMode, Mousewheel]} 
            slidesPerView="auto" 
            spaceBetween={32} 
            freeMode={{ enabled: true, sticky: true, momentumRatio: 0.25 }}
            mousewheel={{ forceToAxis: true, sensitivity: 1 }}
            grabCursor={true}
            className="!overflow-visible"
          >
            {universities.map(({ rank, name, body, img, location }, i) => (
              <SwiperSlide key={name} className="!w-[300px] md:!w-[500px]">
                <RevealItem delay={i * 200} type="slide-left" className="group cursor-pointer">
                  <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden mb-6">
                    <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-[1500ms] ease-cinematic-slow group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 ease-cinematic" />
                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-poppins font-bold text-xs px-4 py-2 rounded-full">
                      {rank}
                    </div>
                  </div>
                  <h3 className="font-playfair text-2xl lg:text-3xl mb-2">{name}</h3>
                  <div className="flex items-center gap-2 text-emerald-300 text-sm font-medium mb-3">
                    <span className="uppercase tracking-widest">{location}</span>
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed max-w-sm">{body}</p>
                </RevealItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Courses — Visual Gallery */}
      <section ref={revealCourses} className="py-24 bg-white opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] mb-4 tracking-tight">Discover Your Discipline</h2>
            <p className="text-muted">Explore fields where Australian institutions globally lead.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {courses.map(({ name, img, size }, i) => {
              let spanClass = 'md:col-span-1 md:row-span-1';
              if (size === 'large') spanClass = 'md:col-span-2 md:row-span-2';
              if (size === 'wide') spanClass = 'md:col-span-2 md:row-span-1';
              if (size === 'tall') spanClass = 'md:col-span-1 md:row-span-2';
              
              return (
                <RevealItem key={name} delay={i * 150} type="fade-in" className={`${spanClass} relative rounded-xl overflow-hidden group`}>
                  <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-[1500ms] ease-cinematic-slow group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-cinematic" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-poppins font-bold text-xl text-white tracking-wide">{name}</h3>
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* Costs — Image & Typography Led */}
      <section ref={revealCosts} className="relative py-32 border-y border-bdr opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/campus-uwa.webp')] bg-cover bg-center mix-blend-luminosity" />
        <div className="absolute inset-0 bg-[#FAF9F6]/80 backdrop-blur-[2px]" />
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-24">
            <span className="font-poppins uppercase tracking-widest text-green-em text-xs mb-3 block">Investment</span>
            <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] tracking-tight">The Cost of Excellence</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8 mb-24">
            <RevealItem delay={0} className="text-center">
              <AnimatedNumber value={45} prefix="AUD 12–" suffix="k" />
              <div className="text-sm font-medium text-muted mt-3 uppercase tracking-widest">Annual Tuition</div>
            </RevealItem>
            <RevealItem delay={200} className="text-center">
              <AnimatedNumber value={16000} prefix="AUD " />
              <div className="text-sm font-medium text-muted mt-3 uppercase tracking-widest">Avg Living Cost</div>
            </RevealItem>
            <RevealItem delay={400} className="text-center">
              <AnimatedNumber value={1500} prefix="AUD 500–" />
              <div className="text-sm font-medium text-muted mt-3 uppercase tracking-widest">Monthly Stay</div>
            </RevealItem>
          </div>
          
          <div className="max-w-2xl mx-auto text-center border-t border-bdr pt-12">
            <p className="font-playfair italic text-xl text-charcoal/70 leading-relaxed mb-8">
              "While costs vary by city and institution, studying in Australia represents an investment with lifelong returns in global employability."
            </p>
          </div>
        </div>
      </section>

      {/* Scholarships — Structured List */}
      <section ref={revealSchol} className="py-24 bg-white opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] mb-6 tracking-tight">Funding Your Journey</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Australia offers extensive funding for international students. Through government and university partnerships, financial barriers can be significantly reduced.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-video w-full mb-8 shadow-sm">
              <img src="/images/article-scholarship.webp" alt="Scholarships in Australia" className="w-full h-full object-cover" />
            </div>
            <Link to="/contact" className="text-coral font-poppins font-bold uppercase tracking-widest text-sm hover:text-orange-700 transition-colors flex items-center gap-2">
              Evaluate Your Eligibility <span className="text-xl">→</span>
            </Link>
          </div>
          <div className="flex flex-col">
            {scholarshipsList.map((schol, i) => (
              <RevealItem key={schol.name} delay={i * 150} className="border-b border-bdr py-6 first:pt-0">
                <h3 className="font-poppins font-semibold text-lg text-[#064E3B] mb-2">{schol.name}</h3>
                <p className="text-sm text-muted">{schol.desc}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Visa — Visual Process */}
      <section ref={revealVisa} className="py-24 bg-[#064E3B] opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.webp')] opacity-10 mix-blend-overlay" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-[44px] md:text-[56px] text-white mb-4 tracking-tight">The Visa Pathway</h2>
            <p className="text-white/60">A structured, secure process to your Australian Student Visa.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px] w-full">
              <img src="/images/student-5.webp" alt="Student Visa Process" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-6">
              {timeline.map(([title, desc], i) => (
                <RevealItem key={title} delay={i * 100} type="fade-up" className="flex gap-6 items-start group">
                  <div className="font-playfair italic text-4xl text-white/20 group-hover:text-emerald-400 transition-colors">
                    0{i+1}
                  </div>
                  <div className="flex-1 pb-6 border-b border-white/10 group-last:border-0 group-last:pb-0">
                    <h3 className="font-poppins font-bold text-white text-lg mb-1">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — Keep Component */}
      <section ref={revealFaq} className="py-24 bg-[#FAF9F6] opacity-0 translate-y-10 transition-all duration-[1000ms] ease-out">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] mb-4 tracking-tight">Common Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Custom Final CTA for Australia */}
      <section className="relative py-32 bg-[#064E3B] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/bg-pattern.webp')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-playfair text-[44px] md:text-[56px] mb-6 tracking-tight">Begin Your Application</h2>
          <p className="text-lg text-white/80 mb-10">Our expert counsellors are ready to design your roadmap to Australia.</p>
          <Link to="/contact" className="btn bg-white text-[#064E3B] hover:bg-gray-100 px-8 py-4">
            Book Free Consultation
          </Link>
        </div>
      </section>
      
      <MiniCTABar />
    </div>
  );
}
