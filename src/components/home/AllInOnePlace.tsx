import React from 'react';
import { Link } from 'react-router-dom';
import StudentCard from '../shared/StudentCard';

const students = [
  { name: 'Priya Sharma',  university: 'Admitted to University of Melbourne', course: 'MBA · Class of 2025',              img: '/images/student-3.webp' },
  { name: 'Arjun Patel',   university: 'Admitted to UNSW Sydney',             course: 'Computer Science · Class of 2025',  img: '/images/student-4.webp' },
  { name: 'Meera Iyer',    university: 'Admitted to Monash University',        course: 'Business Management',               img: '/images/student-5.webp', badge: 'Scholarship Recipient' },
  { name: 'Rohit Verma',   university: 'Admitted to University of Queensland', course: 'Engineering · Class of 2025',        img: '/images/student-1.webp' },
];

const subs = [
  {
    h3: 'Get in With the Right University Strategy',
    body: "Our expert counsellors match your academic profile to Australia's best programs, craft a personalised roadmap, and guide you through a flawless application.",
  },
  {
    h3: 'Achieve Your IELTS / PTE Target Score',
    body: 'With personalised coaching, mock tests, and expert feedback — our students consistently achieve Band 7+ in IELTS and 65+ in PTE on their first attempt.',
  },
  {
    h3: 'Seamless Visa and Post-Landing Support',
    body: 'From student visa documentation to OSHC and accommodation guidance — we support you even after you land in Australia.',
  },
];

export default function AllInOnePlace() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — sticky */}
          <div className="lg:sticky lg:top-20">
            <span className="eyebrow-italic">Everything You Need.</span>
            <h2 className="mb-4">All in One Place.</h2>
            <p className="text-[16px] text-charcoal leading-relaxed mb-9">
              We guide students through every step — from university selection to visa approval.
              Trusted by 1,000+ Indian students at Australia's top universities.
            </p>
            {subs.map(({ h3, body }) => (
              <div key={h3} className="mb-7">
                <h3 className="text-[18px] mb-2">{h3}</h3>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
            <Link to="/contact" className="btn btn-coral mt-2">Book Free Consultation</Link>
          </div>

          {/* RIGHT — staggered student cards */}
          <div className="flex flex-col gap-5 pt-8">
            {students.map(({ name, university, course, img, badge }, i) => (
              <StudentCard
                key={name}
                name={name}
                university={university}
                course={course}
                imageSrc={img}
                badge={badge}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
