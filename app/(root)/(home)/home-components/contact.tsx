import Image from 'next/image'
import React from 'react'

const ContactSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-40 px-4 md:px-0">
      <div className="w-full relative flex flex-col items-start md:items-end">

        {/* Desktop Rectangle */}
        <div
          className='w-full min-w-[1317px] min-h-[605px] rounded-[30px] flex flex-col justify-end self-start hidden md:flex'
          style={{
            backgroundImage: "url('/rectangle.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className='font-sfpro font-bold text-[44px] leading-[60px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-[131px]'>
            Danos un toque para<br /> más información
          </p>
          <p className="font-circular font-normal text-[20px] leading-[30px] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-[131px]">
            Regístrate y disfruta de todas las ventajas que te<br /> ofrecemos, introduce tus platos y empieza la<br /> transformación de tu restaurante:
          </p>
          <div className="ml-[131px] mt-4 w-[284px] h-[284px] relative">
            <Image src={'/logo.png'} alt='Logo' fill className="object-contain" />
          </div>
        </div>

        {/* Desktop Form */}
        <div className='absolute top-[-80px] left-[620px] w-[584px] h-[620px] rounded-2xl flex flex-col items-center justify-center gap-10 shadow-xl bg-white hidden md:flex'>
          <div className='w-[90%] mx-auto'>
            <input type="text" placeholder='Ismingiz...' className='h-[60px] px-5 text-black w-full rounded-[5px] border-2 border-gray-400' />
          </div>
          <div className='w-[90%] mx-auto'>
            <input type="text" placeholder='Familiyangiz...' className='h-[60px] px-5 text-black w-full rounded-[5px] border-2 border-gray-400' />
          </div>
          <div className='w-[90%] mx-auto'>
            <input type="number" placeholder='Telefon Raqamingiz...' className='h-[60px] px-5 text-black w-full rounded-[5px] border-2 border-gray-400' />
          </div>
          <div className='w-[90%] mx-auto'>
            <textarea placeholder='Xabar...' className='h-[130px] border-gray-400 p-5 text-black rounded-[5px] w-full border-2'></textarea>
          </div>
          <button className='w-[155px] h-[50px] cursor-pointer rounded-[10px] bg-gradient-to-l from-[#3EFEA1] to-[#259860] text-white'>
            Jo‘natish
          </button>
        </div>

        {/* Mobile Rectangle */}
        <div
          className='w-full min-h-[300px] rounded-[30px] flex flex-col justify-end self-start md:hidden mt-6 bg-white'
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
        <div className='w-full md:hidden mt-4 flex flex-col items-center justify-center gap-4 shadow-xl bg-white rounded-2xl p-4 max-w-[584px]'>
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
