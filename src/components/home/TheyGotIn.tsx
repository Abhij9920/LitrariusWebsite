import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cards = [
  { uni: 'University of Melbourne',    name: 'Priya Sharma',  major: 'Masters in Business Administration', img: '/images/student-3.webp' },
  { uni: 'UNSW Sydney',                name: 'Arjun Patel',   major: 'Computer Science',                    img: '/images/student-2.webp' },
  { uni: 'Monash University',          name: 'Meera Iyer',    major: 'Business Management',                 img: '/images/student-1.webp' },
  { uni: 'University of Queensland',   name: 'Rohit Verma',   major: 'Engineering',                         img: '/images/student-5.webp' },
  { uni: 'Australian National University', name: 'Sneha Kapoor', major: 'International Relations',         img: '/images/coaching-mock.webp' },
];

export default function TheyGotIn() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <span className="eyebrow-italic">They Got In.</span>
          <h2 className="font-playfair text-[44px] md:text-[56px] text-[#064E3B] mb-6 tracking-tight">You Can Too.</h2>
        </div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-16"
        >
          {cards.map(({ uni, name, major, img }) => (
            <SwiperSlide key={name}>
              <div className="relative rounded-2xl overflow-hidden h-[450px] group cursor-pointer shadow-md">
                <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-[2000ms] ease-cinematic-slow group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,30,20,0.95)] via-[rgba(6,30,20,0.4)] to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="bg-emerald-500 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-sm w-fit mb-4 shadow-sm">
                    Admitted
                  </div>
                  <h3 className="font-playfair text-2xl text-white mb-1">{name}</h3>
                  <div className="font-poppins font-semibold text-[15px] text-emerald-300 mb-3">{uni}</div>
                  <div className="w-8 h-px bg-white/30 mb-3" />
                  <p className="text-sm text-white/80">{major}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
