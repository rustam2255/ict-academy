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
    <div className="w-full mt-8 bg-gradient-to-l h-[185px] flex items-center  bg-[linear-gradient(90deg,rgba(62,189,128,0.34)_0%,rgba(29,87,59,0.34)_100%)] rounded-lg p-5">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}   // bir vaqtda nechta logo ko‘rinsin
        spaceBetween={30}  // logolar orasidagi masofa
        loop={true}
        autoplay={{
          delay: 2000,      // har 2 sekundda slayd o‘tsin
          disableOnInteraction: false,
        }}
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <Image src={logo} alt={`logo-${i}`} width={221} height={208} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;
