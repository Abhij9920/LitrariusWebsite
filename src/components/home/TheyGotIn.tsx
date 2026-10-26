import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const cards = [
  { uni: 'University of Melbourne',       label: 'Masters in Business Administration', img: '/images/campus-melbourne.webp' },
  { uni: 'UNSW Sydney',                   label: 'Computer Science',                   img: '/images/campus-unsw.webp' },
  { uni: 'Monash University',             label: 'Business Management',                img: '/images/campus-monash.webp' },
  { uni: 'University of Queensland',      label: 'Engineering',                        img: '/images/campus-uq.webp' },
  { uni: 'Australian National University',label: 'International Relations',            img: '/images/campus-anu.webp' },
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
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-16"
        >
          {cards.map(({ uni, label, img }) => (
            <SwiperSlide key={uni}>
              <div className="relative rounded-2xl overflow-hidden h-[450px] group cursor-pointer shadow-md">
                <img src={img} alt={uni} className="w-full h-full object-cover transition-transform duration-[1400ms] ease-cinematic-slow group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,30,20,0.95)] via-[rgba(6,30,20,0.4)] to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-cinematic">
                    <div className="bg-emerald-500 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-sm w-fit mb-4 shadow-sm">
                      Admitted
                    </div>
                    <h3 className="font-playfair text-2xl lg:text-3xl text-white mb-2">{uni}</h3>
                    <div className="font-poppins font-semibold text-[14px] text-emerald-300 mb-4">{label}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
