"use client";

import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { usePostContactMutation } from "@/service/api";

export interface Contact {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormInputs {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const [postContact, { isLoading, isSuccess, isError }] = usePostContactMutation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const { t } = useTranslation();

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      await postContact(data).unwrap();
      reset();
      alert(t("contactpage.success_message"));
    } catch (err) {
      console.error("Xatolik:", err);
      alert(t("contactpage.error_message"));
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center xl:mt-40 px-4 md:px-0">
      <div className="w-full relative flex flex-col items-start md:items-end">
        {/* Desktop Rectangle */}
        <div
          className="w-full min-w-[1317px] min-h-[605px] rounded-[30px] flex-col hidden justify-end self-start xl:flex"
          style={{
            backgroundImage: "url('/rectangle.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="font-sfpro font-bold text-[44px] leading-[60px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-[131px]">
            {t("contactpage.title")}
          </p>
          <p className="font-circular font-normal text-[20px] leading-[30px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-[131px] xl:max-w-[400px]">
            {t("contactpage.descr")}
          </p>
          <div className="ml-[131px] mt-4 w-[284px] h-[284px] relative">
            <Image src={"/logo.png"} alt="Logotip" fill className="object-contain" />
          </div>
        </div>

        {/* Desktop Form */}
        <form
          className="absolute top-[-80px] hidden left-[620px] w-[584px] h-[620px] rounded-2xl flex-col items-center justify-center gap-10 shadow-xl bg-white xl:flex"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-[90%] mx-auto">
            <input
              type="text"
              placeholder={t("contactpage.name")}
              className={`h-[60px] px-5 text-black w-full rounded-[5px] border-2 ${errors.fullname ? "border-red-500" : "border-gray-400"}`}
              {...register("fullname", {
                required: t("contactpage.errors.name_required"),
              })}
            />
            {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname.message}</p>}
          </div>
          <div className="w-[90%] mx-auto">
            <input
              type="email"
              placeholder={t("contactpage.email")}
              className={`h-[60px] px-5 text-black w-full rounded-[5px] border-2 ${errors.email ? "border-red-500" : "border-gray-400"}`}
              {...register("email", {
                required: t("contactpage.errors.email_required"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("contactpage.errors.email_invalid"),
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="w-[90%] mx-auto">
            <input
              type="text"
              placeholder={t("contactpage.phone")}
              className={`h-[60px] px-5 text-black w-full rounded-[5px] border-2 ${errors.phone ? "border-red-500" : "border-gray-400"}`}
              {...register("phone", {
                required: t("contactpage.errors.phone_required"),
                pattern: {
                  value: /^[0-9+\-()\s]{9,15}$/,
                  message: t("contactpage.errors.phone_invalid"),
                },
              })}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          <div className="w-[90%] mx-auto">
            <textarea
              placeholder={t("contactpage.message")}
              className={`h-[130px] border-gray-400 p-5 text-black rounded-[5px] w-full border-2 ${errors.message ? "border-red-500" : "border-gray-400"}`}
              {...register("message", {
                required: t("contactpage.errors.message_required"),
                minLength: {
                  value: 10,
                  message: t("contactpage.errors.message_min_length"),
                },
                maxLength: {
                  value: 500,
                  message: t("contactpage.errors.message_max_length"),
                },
              })}
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-[155px] h-[50px] cursor-pointer rounded-[10px] bg-gradient-to-l from-[#3EFEA1] to-[#259860] text-white disabled:opacity-50"
          >
            {isLoading ? t("contactpage.sending") : t("contactpage.btn")}
          </button>
          {isSuccess && <p className="text-green-600">{t("contactpage.success_message")}</p>}
          {isError && <p className="text-red-600">{t("contactpage.error_message")}</p>}
        </form>

        {/* Mobile Rectangle */}
        <div className="w-full xl:hidden min-h-[300px] rounded-[30px] flex flex-col justify-end self-start mt-6 bg-white">
          <p className="font-sfpro font-bold text-[24px] leading-[32px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-4 mt-4">
            {t("contactpage.title")}
          </p>
          <p className="font-circular font-normal text-[16px] leading-[22px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-4 mt-2">
            {t("contactpage.descr")}
          </p>
          <div className="ml-4 mt-4 w-[120px] h-[120px] relative">
            <Image src={"/logo.png"} alt="Logotip" fill className="object-contain" />
          </div>
        </div>

        {/* Mobile Form */}
        <form
          className="w-full xl:hidden mt-4 flex flex-col items-center justify-center gap-4 shadow-xl bg-white rounded-2xl p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder={t("contactpage.name")}
            className={`h-[50px] px-4 text-black w-full rounded-[5px] border-2 ${errors.fullname ? "border-red-500" : "border-gray-400"}`}
            {...register("fullname", {
              required: t("contactpage.errors.name_required"),
            })}
          />
          {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname.message}</p>}
          <input
            type="email"
            placeholder={t("contactpage.email")}
            className={`h-[50px] px-4 text-black w-full rounded-[5px] border-2 ${errors.email ? "border-red-500" : "border-gray-400"}`}
            {...register("email", {
              required: t("contactpage.errors.email_required"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("contactpage.errors.email_invalid"),
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          <input
            type="text"
            placeholder={t("contactpage.phone")}
            className={`h-[50px] px-4 text-black w-full rounded-[5px] border-2 ${errors.phone ? "border-red-500" : "border-gray-400"}`}
            {...register("phone", {
              required: t("contactpage.errors.phone_required"),
              pattern: {
                value: /^[0-9+\-()\s]{9,15}$/,
                message: t("contactpage.errors.phone_invalid"),
              },
            })}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          <textarea
            placeholder={t("contactpage.message")}
            className={`h-[100px] border-gray-400 p-4 text-black rounded-[5px] w-full border-2 resize-none ${errors.message ? "border-red-500" : "border-gray-400"}`}
            {...register("message", {
              required: t("contactpage.errors.message_required"),
              minLength: {
                value: 10,
                message: t("contactpage.errors.message_min_length"),
              },
              maxLength: {
                value: 500,
                message: t("contactpage.errors.message_max_length"),
              },
            })}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="w-[155px] h-[50px] cursor-pointer rounded-[10px] bg-gradient-to-l from-[#3EFEA1] to-[#259860] text-white disabled:opacity-50"
          >
            {isLoading ? t("contactpage.sending") : t("contactpage.btn")}
          </button>
          {isSuccess && <p className="text-green-600">{t("contactpage.success_message")}</p>}
          {isError && <p className="text-red-600">{t("contactpage.error_message")}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;