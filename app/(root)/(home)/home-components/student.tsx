"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const StudentCard = () => {
  return (
    <motion.div
      className="w-full  min-h-[205px] relative p-3 sm:p-4 md:p-5 mt-3 sm:mt-4 md:mt-5 rounded-[7px] bg-[#0A1E2E]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-3">
        <Image
          src={"/images/student.jpg"}
          alt="Student"
          width={131}
          height={131}
          className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[131px] lg:h-[131px] object-cover mx-auto sm:mx-0 flex-shrink-0"
        />
        <div className="flex flex-col justify-between gap-3 sm:gap-4 md:gap-5 flex-1 text-center sm:text-left">
          <div>
            <p className="font-semibold text-lg sm:text-xl md:text-[24px] text-white">
              Last name First name
            </p>
            <p className="font-medium text-xs sm:text-sm md:text-[12px] text-gray-300 mt-1 sm:mt-2 leading-relaxed">
              Lorem Ipsum is a scrambled piece of text derived from classical Latin
              literature, used as placeholder content. It helps designers and
              developers focus on visual elements like layout and typography
              without being distracted by actual content.
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-[20px] font-bold bg-gradient-to-l from-[#3EFEA1] to-[#259860] bg-clip-text text-transparent self-center sm:self-end">
            Backend Developer
          </p>
        </div>
      </div>
      <Image
        src={"/logolight.png"}
        alt="Logo"
        width={70}
        height={70}
        className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-0 md:right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
      />
    </motion.div>
  );
};

const StudentPage = () => {
  return (
    <div className="grid gap-4 sm:gap-6 md:gap-9 grid-cols-1 lg:grid-cols-12 px-2 sm:px-4">
      <div className="lg:col-span-6 space-y-4 sm:space-y-6 md:space-y-0">
        <StudentCard />
        <StudentCard />
      </div>
      <div className="lg:col-span-6 space-y-4 sm:space-y-6 md:space-y-0">
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  );
};

export default StudentPage;
