import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import StudentCard from '../components/shared/StudentCard';
import FinalCTA from '../components/shared/FinalCTA';
import MiniCTABar from '../components/shared/MiniCTABar';

const services = [
  { icon: '🎓', title: 'Overseas Education',   body: 'Personalised counselling on university selection, scholarships, and financial aid for top Australian institutions.' },
  { icon: '🧪', title: 'Career Counselling',   body: 'Psychometric testing and expert guidance to help students make the right academic and career decisions.' },
  { icon: '🎯', title: 'Campus to Corporate',  body: 'Programs that bridge academia and industry, equipping students with practical skills for the Australian job market.' },
];

const whyUs = [
  { icon: '🎆', h: 'Expert Team',         body: 'Certified consultants with deep experience in Australian university admissions and visa processes.' },
  { icon: '📈', h: 'Proven Track Record', body: '1,000+ students placed at Australian universities with a 95% visa success rate.' },
  { icon: '👤', h: 'Personalised Approach', body: 'Every student receives a tailored roadmap — from profile assessment to visa approval.' },
  { icon: '🤝', h: 'Ongoing Support',     body: 'We support you from your first enquiry all the way through to your arrival in Australia.' },
];

const teamStudents = [
  { name: 'Priya Sharma',  university: 'University of Melbourne', course: 'MBA · Class of 2025',              img: '/Uploads/australia.jpg' },
  { name: 'Arjun Patel',   university: 'UNSW Sydney',             course: 'Computer Science · Class of 2025',  img: '/Uploads/computer science.jpg' },
  { name: 'Meera Iyer',    university: 'Monash University',        course: 'Business Management · Scholarship', img: '/Uploads/business manegement.jpg', badge: 'Scholarship Recipient' },
];

export default function About() {
  return (
    <>
      <Hero
        imageSrc="/Uploads/Group1.webp"
        imageAlt="Literarius counsellors team"
        italicLine="India's Most Trusted Partner."
        heading={<>15+ Years Guiding Students<br />to Australia's Best Universities.</>}
        subText="From goal setting to graduation — we are with you every step of the way."
        ctaLabel="Get Started"
        ctaTo="/contact"
        short
      />

      {/* Services — cream */}
      <section className="py-20 bg-cream">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow-italic">What We Do.</span>
            <h2>Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map(({ icon, title, body }) => (
              <div key={title} className="card-base p-7 text-center hover:border-green-em">
                <div className="text-4xl mb-3">{icon}</div>
                <div className="font-poppins font-bold text-sm uppercase tracking-wider text-ink mb-2.5">{title}</div>
                <p className="text-[13.5px] text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — dark green */}
      <section className="py-20 bg-dark-section">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-playfair italic text-lg text-emerald-300 block mb-2">Our Story.</span>
              <h2 className="text-white mb-4">15+ Years Guiding Students to Australia</h2>
              <p className="text-white/65 text-[16px] leading-relaxed mb-8">
                Since our founding, Literarius has been committed to making Australian education accessible to ambitious Indian students. Our certified counsellors and visa experts have helped over 1,000 students begin their Australian journey.
              </p>
              <div className="grid grid-cols-2 gap-3.5">
                {[['15+','Years Experience'],['1,000+','Students Placed'],['42+','Universities'],['95%','Success Rate']].map(([n,l]) => (
                  <div key={l} className="bg-white/[0.09] border border-white/12 rounded-xl p-5 text-center">
                    <div className="font-poppins font-black text-[32px] text-emerald-300">{n}</div>
                    <div className="text-[11px] text-white/45 uppercase tracking-wider mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-coral mt-7 inline-flex">Book Free Consultation</Link>
            </div>
            <div className="flex flex-col gap-5 pt-4">
              {teamStudents.map(({ name, university, course, img, badge }, i) => (
                <StudentCard key={name} name={name} university={university} course={course} imageSrc={img} badge={badge} delay={i * 120} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us — white */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12"><span className="eyebrow-italic">Why Literarius?</span><h2>Why Choose Us</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUs.map(({ icon, h, body }) => (
              <div key={h} className="card-base p-5 flex gap-3.5 hover:border-green-em">
                <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="text-[15px] mb-1.5">{h}</h3>
                  <p className="text-sm text-muted">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        heading={<>Ready to Start Your<br />Australian Journey?</>}
        italic="We Are Here for You."
        btnLabel="Book Free Consultation"
      />
      <MiniCTABar />
    </>
  );
}
