"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useGetStudentQuery } from "@/service/api";
import { Students } from "@/interfaces";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function truncateWords(text: string | null, limit: number = 20): string {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "...";
}

interface StudentCardProps {
  course: Students;
}

const StudentCard: React.FC<StudentCardProps> = ({ course }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <motion.div
      className="w-full min-h-[205px] relative p-3 sm:p-4 md:p-5 mt-3 sm:mt-4 md:mt-5 rounded-[7px] bg-[#0A1E2E]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-3">
        <Image
          src={course.avatar || "/images/student.jpg"}
          alt="Talaba"
          width={131}
          height={131}
          className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[131px] lg:h-[131px] object-cover mx-auto sm:mx-0 flex-shrink-0"
        />
        <div className="flex flex-col justify-between gap-3 sm:gap-4 md:gap-5 flex-1 text-center sm:text-left">
          <div>
            <p className="font-semibold text-lg sm:text-xl md:text-[24px] text-white">
              {course.first_name} {course.last_name}
            </p>

            {/* Bio */}
            <p
              className={`font-medium text-xs sm:text-sm md:text-[12px] text-gray-300 mt-1 sm:mt-2 leading-relaxed overflow-hidden ${
                !showFull ? "line-clamp-2" : ""
              }`}
            >
              {course.bio || ""}
            </p>

            {/* Barchasini ko'rish tugmasi (bio uchun) */}
            {course.bio && course.bio.split(" ").length > 20 && (
              <button
                onClick={() => setShowFull(!showFull)}
                className="mt-1 text-xs sm:text-sm text-green-400 font-semibold hover:underline"
              >
                {showFull ? "Yashirish" : "Barchasini ko‘rish"}
              </button>
            )}
          </div>

          <p className="text-base sm:text-lg md:text-[20px] font-bold bg-gradient-to-l from-[#3EFEA1] to-[#259860] bg-clip-text text-transparent self-center sm:self-end">
            {course.job}
          </p>
        </div>
      </div>

      <Image
        src={"/logolight.png"}
        alt="Logotip"
        width={70}
        height={70}
        className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-0 md:right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
      />
    </motion.div>
  );
};

const StudentPage = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { data, isLoading, error } = useGetStudentQuery({ limit: 10, offset: 0, lang });
  const [showAllCards, setShowAllCards] = useState(false);

  const courses = data?.results || [];
  const visibleCourses = showAllCards ? courses.slice(1) : courses.slice(1, 3); // 2 ta karta ko‘rinadi

  return (
    <div className="px-2 sm:px-4">
      <div className="grid gap-4 sm:gap-6 md:gap-9 grid-cols-1 sm:grid-cols-2">
        {visibleCourses.map((course) => (
          <StudentCard key={course.id} course={course} />
        ))}
      </div>
      {courses.length > 3 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAllCards(!showAllCards)}
            className="text-sm sm:text-base text-green-400 font-semibold hover:underline"
          >
            {showAllCards ? "Yashirish" : "Barchasini ko‘rish"}
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentPage;