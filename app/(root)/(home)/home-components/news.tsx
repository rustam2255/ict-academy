"use client";

import Image from "next/image";
import React from "react";
import { useGetNewsQuery } from "@/service/api";
import { News } from "@/interfaces";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const NewsSection = () => {
    const { i18n } = useTranslation()
    const lang = i18n.language;
  const { data, isLoading, isError } = useGetNewsQuery({ limit: 3, offset: 0, lang });

  if (isLoading) {
    return <p className="text-center py-10">Yuklanmoqda...</p>;
  }

  if (isError) {
    return <p className="text-center py-10 text-red-500">Xatolik yuz berdi ❌</p>;
  }

  if (!data || data.results.length === 0) {
    return <p className="text-center py-10">Yangiliklar topilmadi</p>;
  }

  return (
    <div className="w-full flex flex-col gap-5 mt-5 h-full">
      {data.results[0] && (
        <motion.div
          className="w-full h-full relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={data.results[0].image || "/images/new_first.png"}
            alt={data.results[0].name}
            width={1440}
            height={399}
            className="rounded-lg object-cover  h-[399px] w-[1440px]"
          />
        </motion.div>
      )}

      {/* Keyingi 3 ta kichik yangilik */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-11">
        {data.results.slice(1, 4).map((item: News, index: number) => (
          <motion.div
            key={item.id}
            className="flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={item.image || "/images/new_second.png"}
              alt={item.name}
              width={429}
              height={245}
              className="rounded-lg object-cover w-[429px] h-[245px]"
            />
            <div className="mt-2">
              <p className="text-[14px] text-[#C4C4C4]">
                {new Date().toLocaleDateString("uz-UZ")}
              </p>
              <p className="text-[16px] font-bold line-clamp-2">{item.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
