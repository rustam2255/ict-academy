"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const PartnersSlider = () => {
  const logos = [
    "/images/org1.png",
    "/images/org1.png",
    "/images/org1.png",
    "/images/org1.png",
    "/images/org1.png",
    "/images/org1.png",
    "/images/org1.png",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6 md:mt-8 bg-gradient-to-l h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[130px] lg:min-h-[160px] flex items-center bg-[linear-gradient(90deg,rgba(62,189,128,0.34)_0%,rgba(29,87,59,0.34)_100%)] rounded-lg p-2 sm:p-4 md:p-5">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.2}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <Image
              src={logo}
              alt={`logo-${i}`}
              width={150}
              height={150}
              className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[180px] h-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;