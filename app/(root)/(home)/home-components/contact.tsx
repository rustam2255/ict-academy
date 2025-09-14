'use client'
import { usePostContactMutation } from '@/service/api';
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
interface ContactFormInputs {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}
const ContactSection = () => {
  const [postContact, { isLoading, isSuccess, isError }] = usePostContactMutation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>();
  const {t} = useTranslation()
  const onSubmit = async (data: ContactFormInputs) => {
    try {
      await postContact(data).unwrap();
      reset();
      alert("Xabar yuborildi ✅");
    } catch (err) {
      console.error(err);
      alert("Xatolik yuz berdi ❌");
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center xl:mt-40 px-4 md:px-0">
      <div className="w-full relative flex flex-col items-start md:items-end">

        {/* Desktop Rectangle */}
        <div
          className='w-full min-w-[1317px] min-h-[605px] rounded-[30px]  flex-col hidden justify-end self-start  xl:flex'
          style={{
            backgroundImage: "url('/rectangle.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className='font-sfpro font-bold text-[44px] leading-[60px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-[131px]'>
            {t("contactpage.title")}
          </p>
          <p className="font-circular font-normal text-[20px] leading-[30px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-[131px] xl:max-w-[400px]">
            {t("contactpage.descr")}
          </p>
          <div className="ml-[131px] mt-4 w-[284px] h-[284px] relative">
            <Image src={'/logo.png'} alt='Logo' fill className="object-contain" />
          </div>
        </div>

        {/* Desktop Form */}
        <form className='absolute top-[-80px] hidden left-[620px] w-[584px] h-[620px] rounded-2xl  flex-col items-center justify-center gap-10 shadow-xl bg-white  xl:flex' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-[90%] mx-auto'>
            <input type="text" placeholder={t("contactpage.name")} className='h-[60px] px-5 text-black w-full rounded-[5px] border-2 border-gray-400'
              {...register("fullname", {
                required: "Ism kiritish  shart",
              })} />
          </div>
          <div className='w-[90%] mx-auto'>
            <input type="email" placeholder={t("contactpage.email")} className='h-[60px] px-5 text-black w-full rounded-[5px] border-2 border-gray-400'
              {...register("email", {
                required: "Email shart",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email noto‘g‘ri" }
              })} />
          </div>
          <div className='w-[90%] mx-auto'>
            <input type="number" placeholder={t("contactpage.phone")} className='h-[60px] px-5 text-black w-full rounded-[5px] border-2 border-gray-400'  {...register("phone", {
              required: "Telefon raqam shart",
              pattern: {
                value: /^[0-9+\-()\s]{9,15}$/, // 9–15 belgili raqam, +, -, () qo‘yish mumkin
                message: "To‘g‘ri raqam kiriting",
              },
            })} />
          </div>
          <div className='w-[90%] mx-auto'>
            <textarea placeholder={t("contactpage.message")} className='h-[130px] border-gray-400 p-5 text-black rounded-[5px] w-full border-2'
              {...register("message", {
                required: "Xabar yozish shart",
                minLength: {
                  value: 10,
                  message: "Xabar kamida 10 ta belgidan iborat bo‘lishi kerak",
                },
                maxLength: {
                  value: 500,
                  message: "Xabar 500 ta belgidan oshmasligi kerak",
                },
              })}></textarea>
          </div>
          <button className='w-[155px] h-[50px] cursor-pointer rounded-[10px] bg-gradient-to-l from-[#3EFEA1] to-[#259860] text-white'>
            {t("contactpage.btn")}
          </button>
          {isLoading && <p>Yuborilmoqda...</p>}
          {isSuccess && <p className="text-green-600">Xabar yuborildi ✅</p>}
          {isError && <p className="text-red-600">Xatolik yuz berdi ❌</p>}
        </form>

        {/* Mobile Rectangle */}
        <div
          className='w-full xl:hidden min-h-[300px] rounded-[30px] flex flex-col justify-end self-start  mt-6 bg-white'
        >
          <p className='font-sfpro font-bold text-[24px] leading-[32px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-4 mt-4'>
            Danos un toque para<br /> más información
          </p>
          <p className="font-circular font-normal text-[16px] leading-[22px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-4 mt-2">
            Regístrate y disfruta de todas las ventajas que te<br /> ofrecemos, introduce tus platos y empieza la<br /> transformación de tu restaurante:
          </p>
          <div className="ml-4 mt-4 w-[120px] h-[120px] relative">
            <Image src={'/logo.png'} alt='Logo' fill className="object-contain" />
          </div>
        </div>

        {/* Mobile Form */}
        <div className='w-full xl:hidden mt-4 flex flex-col items-center justify-center gap-4 shadow-xl bg-white rounded-2xl p-4'>
          <input type="text" placeholder='Ismingiz...' className='h-[50px] px-4 text-black w-full rounded-[5px] border-2 border-gray-400' />
          <input type="text" placeholder='Familiyangiz...' className='h-[50px] px-4 text-black w-full rounded-[5px] border-2 border-gray-400' />
          <input type="number" placeholder='Telefon Raqamingiz...' className='h-[50px] px-4 text-black w-full rounded-[5px] border-2 border-gray-400' />
          <textarea placeholder='Xabar...' className='h-[100px] border-gray-400 p-4 text-black rounded-[5px] w-full border-2 resize-none'></textarea>
          <button className='w-[155px] h-[50px] cursor-pointer rounded-[10px] bg-gradient-to-l from-[#3EFEA1] to-[#259860] text-white'>
            Jo‘natish
          </button>
        </div>

      </div>
    </div>
  )
}

export default ContactSection
