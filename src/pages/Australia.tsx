import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import FAQAccordion from '../components/shared/FAQAccordion';
import FinalCTA from '../components/shared/FinalCTA';
import MiniCTABar from '../components/shared/MiniCTABar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const whyCards = [
  { icon: '🏆', title: 'Global Academic Excellence',     body: '9 universities in the global top 100. Rigorous standards, cutting-edge research, and internationally recognised qualifications.' },
  { icon: '🌍', title: 'Diverse Academic Landscape',     body: '4,000+ accredited institutions offering specialised programs in marine biology, renewable energy, and indigenous studies.' },
  { icon: '💼', title: 'Work While You Study',           body: 'Work 20 hours/week during term and full-time during breaks. Gain real-world experience while covering living costs.' },
  { icon: '💰', title: 'Comprehensive Scholarships',     body: 'Australia Awards and Endeavour Scholarships provide substantial assistance to international students.' },
  { icon: '🔬', title: 'Innovation & Research Hub',      body: 'Global leader in climate science, AI, medical research, and sustainable technologies with world-class facilities.' },
  { icon: '📋', title: 'Post-Study Work Visa',           body: 'Stay up to 4 years after graduation on a Temporary Graduate visa — a clear pathway to permanent residency.' },
];

const universities = [
  { rank: 'QS #13',  name: 'The University of Melbourne',  body: "Victoria's leading research university with world-class faculty and innovative programs." },
  { rank: 'QS #18',  name: 'The University of Sydney',     body: "Australia's first university with exceptional programs across all disciplines." },
  { rank: 'QS #19',  name: 'UNSW Sydney',                  body: 'Excels in engineering, technology, and business with strong global employer recognition.' },
  { rank: 'QS #22',  name: 'Australian National University',body: 'Home to Nobel laureates and leading researchers in science, law, and policy.' },
  { rank: 'QS #28',  name: 'Monash University',            body: 'Global top-30 university renowned for pharmacy, engineering, and business.' },
  { rank: 'QS #40',  name: 'University of Queensland',     body: 'Leader in research commercialisation and health sciences — beautiful Brisbane campus.' },
  { rank: 'QS #82',  name: 'University of Western Australia', body: 'Perth-based research university known for mining, agriculture, and medical sciences.' },
  { rank: 'QS #113', name: 'University of Technology Sydney', body: 'Practice-oriented, renowned for design, IT, and business innovation in the heart of Sydney.' },
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

export default function Australia() {
  return (
    <>
      <Hero
        imageSrc="/Uploads/australia.jpg"
        imageAlt="Australian university campus"
        italicLine="Your Australian Education Journey Starts Here."
        heading={<>World-Class Australian Universities.<br />Personalised Guidance.</>}
        subText="42+ partner universities · Post-study work visa up to 4 years · 95% visa success rate"
        ctaLabel="Get Free Consultation"
        ctaTo="/contact"
        short
      />

      {/* Why Australia — cream */}
      <section className="py-20 bg-cream">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow-italic">Why Australia?</span>
            <h2>Why Study in Australia?</h2>
            <p className="max-w-xl mx-auto mt-3 text-muted">The world's #3 destination for international students — combining world-class education with an incredible lifestyle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyCards.map(({ icon, title, body }) => (
              <div key={title} className="card-base p-6 hover:border-green-em">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="font-poppins font-bold text-sm uppercase tracking-wide text-ink mb-2">{title}</div>
                <p className="text-[13.5px] text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities carousel — white */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <span className="eyebrow-italic">Our Partner Universities.</span>
            <h2>Top Australian Universities</h2>
          </div>
          <Swiper modules={[Pagination, Autoplay]} slidesPerView={1} spaceBetween={20} loop autoplay={{ delay: 3500 }} pagination={{ clickable: true }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-12">
            {universities.map(({ rank, name, body }) => (
              <SwiperSlide key={name}>
                <div className="bg-white border border-bdr rounded-xl p-5 shadow-sm h-full">
                  <span className="inline-flex bg-green-em text-white text-[10.5px] font-semibold px-3 py-1 rounded-full mb-3">{rank}</span>
                  <h3 className="text-[16px] mb-2">{name}</h3>
                  <p className="text-[13px] text-muted">{body}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Courses — cream */}
      <section className="py-20 bg-cream">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10"><span className="eyebrow-italic">Top Programs.</span><h2>Popular Courses in Australia</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map(({ name, img }) => (
              <div key={name} className="relative h-60 rounded-xl overflow-hidden cursor-pointer group">
                <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,78,59,0.88)] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 font-poppins font-bold text-sm tracking-widest uppercase text-white">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs — white */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10"><span className="eyebrow-italic">The Investment.</span><h2>Cost of Studying in Australia</h2></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="mb-4">Tuition Fees</h3>
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
              <h3 className="mb-3">Living Expenses</h3>
              <div className="font-poppins font-black text-[50px] text-green-em leading-none">AUD 16,000</div>
              <p className="text-sm text-muted mb-5">Average annual living cost for international students</p>
              {[['On-Campus','AUD 800–900/month'],['Off-Campus','AUD 500–1,500/month'],['Homestay','AUD 1,000–1,200/month']].map(([l,v]) => (
                <div key={l} className="flex justify-between items-center px-4 py-3 border border-bdr rounded-lg mb-2.5 bg-white">
                  <span className="font-semibold text-sm">{l}</span><span className="text-blue-acc font-semibold text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships — cream */}
      <section className="py-20 bg-cream">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10"><span className="eyebrow-italic">Financial Support.</span><h2>Scholarships in Australia</h2></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="mb-4 text-[14.5px]">Australia's scholarships are offered based on academic merit, financial need, or community involvement.</p>
              <p className="mb-4 text-[14.5px]">Types: Fellowships, Assistantships, Sports Scholarships, Need Based, and government programs.</p>
              <p className="mb-7 text-[14.5px]">Australia Awards and Endeavour Scholarships provide substantial financial assistance to international students.</p>
              <Link to="/contact" className="btn btn-coral">Check Scholarship Eligibility</Link>
            </div>
            <div>
              <h3 className="mb-4">Available Scholarships</h3>
              <div className="flex flex-wrap gap-2.5">
                {pills.map(p => <span key={p} className="bg-blue-acc text-white text-xs font-medium px-3.5 py-1.5 rounded-full">{p}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa — dark green */}
      <section className="py-20 bg-dark-section">
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
                {visa_docs.map(d => (
                  <div key={d} className="flex items-center gap-3 text-white/85 text-sm">
                    <span className="w-5 h-5 bg-green-em rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">✓</span>{d}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-coral">Get Free Visa Guidance</Link>
            </div>
            <div>
              <h3 className="text-white text-[19px] mb-3">Australia Study Visa Process</h3>
              <p className="text-white/55 text-sm mb-5">We provide comprehensive visa guidance — bank statements, latest updates, and mock interviews.</p>
              <div className="flex flex-col">
                {timeline.map(([h, b], i) => (
                  <div key={h} className="flex gap-3.5 relative">
                    {i < timeline.length - 1 && <div className="absolute left-4 top-8 w-0.5 h-full bg-white/10" />}
                    <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center font-poppins font-bold text-white text-[12.5px] flex-shrink-0 z-10">{i+1}</div>
                    <div className="pb-6">
                      <h4 className="text-white text-sm font-semibold">{h}</h4>
                      <p className="text-white/50 text-xs mt-0.5">{b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — white */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12"><span className="eyebrow-italic">Your Questions, Answered.</span><h2>Frequently Asked Questions</h2></div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <FinalCTA heading={<>Book Your Free Consultation<br />with Trusted Counsellors.</>} italic="Your Australian journey begins today." btnLabel="Book Free Consultation" />
      <MiniCTABar />
    </>
  );
}
