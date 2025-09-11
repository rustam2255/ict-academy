"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function AboutUs() {
  return (
    <div className="text-white w-[90%] mx-auto min-h-screen font-inter">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Biz haqimizda</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Bizning IT o‘quv markazimiz yoshlarni zamonaviy texnologiyalar bilan
            tanishtiradi, amaliy ko‘nikmalarni rivojlantiradi va ularni
            professional mutaxassislarga aylantiradi.
          </p>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#064E3B] px-6 py-3 rounded-lg font-semibold transition"
          >
            Kurslarimizni ko‘rish
          </motion.button>
        </motion.div>

        {/* 3D Animation / Lottie */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Player
            autoplay
            loop
            src="/images/3d.json"
            style={{ height: "400px", width: "400px" }}
          />
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="px-8 md:px-20 py-16 grid md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
      >
        {[
          {
            title: "Missiyamiz",
            text: "Yoshlar uchun sifatli IT ta’limini taqdim etish va ularni global texnologiya bozoriga tayyorlash.",
          },
          {
            title: "Vizyonimiz",
            text: "Innovatsion metodlar orqali o‘quvchilarimizni raqamli dunyoda yetakchi qilish.",
          },
          {
            title: "Qiymatlarimiz",
            text: "Sifat, innovatsiya va jamiyatga foyda – bizning asosiy qadriyatlarimiz.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#075F47] p-6 rounded-xl shadow-lg hover:scale-105 transition"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="px-8 md:px-20 py-16 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Bizning Jamoa</h2>
          <p className="text-lg leading-relaxed">
            Tajribali instruktorlardan iborat jamoamiz har bir talabaga
            individual yondashuv ko‘rsatadi va ularni IT olamida muvaffaqiyatga
            erishishga tayyorlaydi.
          </p>
        </motion.div>

        {/* 3D Object / Animation */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Player
            autoplay
            loop
            src="/images/Teacher.json"
            style={{ height: "350px", width: "350px" }}
          />
        </motion.div>
      </motion.section>
    </div>
  );
}
