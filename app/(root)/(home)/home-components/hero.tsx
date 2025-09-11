'use client'
import { useGetCoursesQuery } from '@/service/api'
import { Play } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const HeroSection = () => {
    const { i18n } = useTranslation()
    const lang = i18n.language;
  const {data, isLoading, error} = useGetCoursesQuery({
    limit: 6,
    offset: 0,
    lang
  })
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
   const selectedVideo = data?.results.find(c => c.id === selectedCourse)?.video || null
  return (
    // Responsiv versiya
    <div className='w-full mx-auto relative shadow-[7px_4px_4px_0px_rgba(0,0,0,0.25)] h-[50vh] md:h-[70vh] lg:h-[80vh] rounded-[23px]'>
      <Image
        src={'/images/hero.jpg'}
        alt='hero'
        fill
        className="rounded-[23px]"
      />
      <div className='w-full max-w-[350px] flex justify-center items-center flex-col  sm:max-w-[450px] md:max-w-[630px] rounded-[23px] rounded-tr-[150px] md:rounded-tr-[250px] shadow-[32px_4px_4px_0px_rgba(0,0,0,0.25)] h-[50vh] md:h-[70vh] lg:h-[80vh] absolute top-0 left-0  bg-gradient-to-b from-[#1d573b]/75 to-[#0D2537]/75'>
        <h3 className='font-semibold text-[48px]  text-white'>Design the Future<br />
          Code the Change.</h3>
        <p className='font-semibold text-[20px] mr-10'>Master UX/UI principles and bring your<br /> creativity
          to life through real-world<br /> projects. Perfect for
          future designers<br /> and developers</p>
        <div className='flex mt-9 items-center justify-center gap-2'>
          <button className='px-[10px] py-[5px] sm:px-[14px] sm:py-[6px] lg:px-[30px] lg:py-[8px] bg-[#0B2234] rounded-[15px] sm:rounded-[20px] lg:rounded-[45px] border-2 border-green-400 cursor-pointer hover:scale-105 transition'>
            <p className='text-[14px] sm:text-[16px] lg:text-[24px] text-white font-semibold'>Get Started</p>
          </button>
          <button className='px-[10px] py-[5px] sm:px-[14px] sm:py-[6px] lg:px-[30px] lg:py-[8px] bg-[#0B2234] rounded-[15px] sm:rounded-[20px] lg:rounded-[45px] border-2 border-green-400 cursor-pointer hover:scale-105 transition'>
            <p className='text-[14px] sm:text-[16px] lg:text-[24px] text-white font-semibold'>Watch Video</p>
          </button>
        </div>
      </div>
      <div className='absolute rounded-l-full w-[221px] h-[84px] bg-[#D9D9D9]  bottom-0 right-0'>
        <div className="flex -space-x-4">
          {data?.results.map(course => (
            <Image
              key={course.id}
              src={'/images/hero.jpg'} 
              alt={course.name}
              width={60}
              height={60}
              className={`rounded-full border-2 w-[60px] h-[60px] mt-3 ml-4 border-white cursor-pointer transition ${
                selectedCourse === course.id ? "ring-4 ring-green-400" : ""
              }`}
              onClick={() => {
                setSelectedCourse(course.id)
                setIsPlaying(false)
              }}
            />
          ))}
        </div>
      </div>
      <div className='absolute  rounded-full flex text-center opacity-[67%] items-center justify-center top-[40%] left-[70%] bg-[#D9D9D9] w-[100px] h-[100px] '>
        <Play className='w-[67px] h-[75px] text-black object-fill ' />
      </div>
    </div>
  )
}

export default HeroSection