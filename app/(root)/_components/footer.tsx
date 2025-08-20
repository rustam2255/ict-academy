import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#0B2234] to-[#1D573B] opacity-100'>
      <div className="w-full relative flex items-center flex-col justify-center mt-40   ">
        <div className=''>
          <div className='w-[1317px] min-h-[605px]  rounded-[30px]   flex flex-col  justify-end self-start' style={{
            backgroundImage: "url('/rectangle.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <p className='font-sfpro font-bold text-[44px] leading-[60px] tracking-[0] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent  ml-[131px]'>Danos un toque para<br /> más información</p>
            <p className="font-circular font-normal text-[20px] leading-[30px] tracking-[0] bg-gradient-to-b from-[#0B2234] to-[#1D573B] bg-clip-text text-transparent ml-[131px]">Regístrate y disfruta de todas las ventajas que te<br /> ofrecemos, introduce tus platos y empieza la<br /> transformación de tu restaurante:  </p>
            <Image src={'/logo.png'} alt='Logo' width={284} height={284} className='ml-[131px] m-0 p-0' />
          </div>
          <div className='absolute top-[-40px] pt-6 left-[780px] rounded-2xl flex flex-col items-center justify-center gap-10  shadow-xl z-1  w-[584px] h-[620px] bg-white'>
            <div className='w-[90%] mx-auto '>
              <input type="text" placeholder='Ismingiz...' className='h-[60px] px-5 text-black w-full rounded-[5px] border-2 border-gray-400  ' />
            </div>
            <div className='w-[90%] mx-auto '>
              <input type="text" placeholder='Familiyangiz...' className='h-[60px] px-5 text-black w-full rounded-[5px] border-2 border-gray-400 ' />
            </div>
            <div className='w-[90%] mx-auto '>
              <input type="number" placeholder='Telefon Raqamingiz...' className='h-[60px] px-5 text-black w-full rounded-[5px] border-2 border-gray-400 ' />
            </div>
            <div className='w-[90%] mx-auto'>
              <textarea name="message" id="message" placeholder='Xabar...' className='h-[130px] border-gray-400 p-5 text-back rounded-[5px]  text-black w-full  border-2'>

              </textarea>
            </div>
            <button className='w-[155px] h-[50px] cursor-pointer rounded-[10px] bg-gradient-to-l from-[#3EFEA1] to-[#259860] '>Jo`natish</button>
          </div>
        </div>
        <div className='m-5'>
          <p className='text-[14px] text-white'>© 2025 ICT Academy. All rights reserved. </p>
          <div className='mt-3'>
            <div className="flex  gap-6 justify-center items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Facebook className="text-[#0B2234]" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Instagram className="text-[#0B2234]" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Twitter className="text-[#0B2234]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer