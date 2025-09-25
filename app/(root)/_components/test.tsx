"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();

  // i18n fayldan matnlarni olish
  const messages = [
    t("test.mes-first"),
    t("test.mes-second"),
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // 3 soniyada yozuv almashadi
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-gradient-to-b from-[#1d573b]/75 to-[#0D2537]/75 h-12 flex items-center justify-center overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute text-white text-lg font-medium"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Test;
