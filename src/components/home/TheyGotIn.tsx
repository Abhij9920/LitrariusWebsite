import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cards = [
  { uni: 'University of Melbourne',    name: 'Priya Sharma',  major: 'Masters in Business Administration', img: '/images/student-1.webp' },
  { uni: 'UNSW Sydney',                name: 'Arjun Patel',   major: 'Computer Science',                    img: '/images/student-2.webp' },
  { uni: 'Monash University',          name: 'Meera Iyer',    major: 'Business Management',                 img: '/images/student-3.webp' },
  { uni: 'University of Queensland',   name: 'Rohit Verma',   major: 'Engineering',                         img: '/images/student-4.webp' },
  { uni: 'Australian National University', name: 'Sneha Kapoor', major: 'International Relations',         img: '/images/student-5.webp' },
];

export default function TheyGotIn() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-12">
          <span className="eyebrow-italic">They Got In.</span>
          <h2>You Can Too.</h2>
        </div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-12"
        >
          {cards.map(({ uni, name, major, img }) => (
            <SwiperSlide key={name}>
              <div className="bg-white border border-bdr rounded-xl overflow-hidden h-full group hover:-translate-y-1.5 transition-all duration-500 ease-cinematic hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <div className="p-4 text-center border-b border-bdr relative z-10 bg-white">
                  <p className="text-xs text-muted mb-1">Accepted to</p>
                  <div className="font-poppins font-bold text-[18px] text-green-em">{uni}</div>
                </div>
                <div className="h-60 overflow-hidden relative z-0">
                  <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-cinematic-slow" />
                </div>
                <div className="p-4 border-t border-bdr">
                  <div className="text-[10.5px] text-muted uppercase tracking-wider mb-0.5">Name</div>
                  <div className="font-playfair italic text-[16px] text-ink mb-2">{name}</div>
                  <div className="text-[10.5px] text-muted uppercase tracking-wider mb-0.5">Major</div>
                  <div className="font-playfair italic text-[13.5px] text-charcoal">{major}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
