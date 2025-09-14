'use client'
import { CourseBanner } from '@/interfaces'
import { useGetCoursesBannerQuery } from '@/service/api'
import { truncateWords } from '@/utils/words'
import { Play, Pause } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Loading from '../../_components/loading'
import Error from '../../_components/error'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HeroSection = () => {
  
  const { data, isLoading, error } = useGetCoursesBannerQuery({
    limit: 6,
    offset: 0,

  })
  const courses: CourseBanner[] = data?.results || []
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (courses.length > 0 && selectedCourse === null) {
      setSelectedCourse(courses[0].id)
    }
  }, [selectedCourse, courses])

  if (isLoading) return <Loading />
  if (error) return <Error />

  const activeCourse = courses.find(c => c.id === selectedCourse) || null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative group w-full mx-auto shadow-[7px_4px_4px_0px_rgba(0,0,0,0.25)] h-[50vh] md:h-[70vh] lg:h-[80vh] rounded-[23px] overflow-hidden"
    >
      {/* video yoki image */}
      {!isPlaying ? (
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={activeCourse?.banner || '/images/hero.jpg'}
            alt={activeCourse?.name || 'hero'}
            fill
            className="rounded-[23px] "
          />
        </motion.div>
      ) : (
        <motion.video
          src={activeCourse?.video}
          className="w-full h-full object-fill rounded-[23px]"
          autoPlay
          onEnded={() => setIsPlaying(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}

      {/* soya */}
      {!isPlaying && (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-[350px] hidden xl:flex justify-center items-center flex-col sm:max-w-[450px] md:max-w-[630px] rounded-[23px] rounded-tr-[150px] md:rounded-tr-[250px] shadow-[32px_4px_4px_0px_rgba(0,0,0,0.25)] h-[50vh] md:h-[70vh] lg:h-[80vh] absolute top-0 left-0 bg-gradient-to-b from-[#1d573b]/75 to-[#0D2537]/75"
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-semibold text-[48px] text-white"
          >
            {activeCourse?.name || 'Select a course'}
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-medium text-[16px] md:text-[20px] text-gray-200 text-center mt-3"
          >
            {activeCourse?.description
              ? truncateWords(activeCourse.description, 20)
              : 'Choose a course to see its description here.'}
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex mt-9 items-center justify-center gap-2"
          >
            <button className="px-[10px] py-[5px] sm:px-[14px] sm:py-[6px] lg:px-[30px] lg:py-[8px] bg-[#0B2234] rounded-[15px] sm:rounded-[20px] lg:rounded-[45px] border-2 border-green-400 cursor-pointer hover:scale-105 transition">
              <Link href={'/contact'}>
                <p className="text-[14px] sm:text-[16px] lg:text-[24px] text-white font-semibold">
                  Get Started
                </p>
              </Link>
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* play/pause ikonalar */}
      {!isPlaying && (
        <motion.div
          onClick={() => setIsPlaying(true)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="absolute rounded-full flex text-center opacity-[90%]  items-center justify-center top-[40%] left-1/2 -translate-x-1/2 bg-[#D9D9D9] w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] cursor-pointer"
        >
          <Play className="w-[35px] h-[40px] sm:w-[55px] sm:h-[65px] lg:w-[67px] lg:h-[75px] text-black relative z-10" />
        </motion.div>
      )}

      {isPlaying && (
        <motion.div
          onClick={() => setIsPlaying(false)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="absolute rounded-full flex text-center items-center justify-center top-[40%] left-1/2 -translate-x-1/2 bg-[#D9D9D9] w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] cursor-pointer opacity-0 group-hover:opacity-100 transition"
        >
          <Pause className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] text-black" />
        </motion.div>
      )}

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute rounded-l-full w-[180px] sm:w-[200px] lg:w-[221px] h-[70px] sm:h-[80px] lg:h-[84px] bg-[#D9D9D9] bottom-0 right-0 flex items-center pl-12"
      >
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              setSelectedCourse(course.id);
              setIsPlaying(false);
            }}
            className={`relative z-${courses.length - index}`} 
            style={{ marginLeft: index === 0 ? 0 : '-50%' }} 
          >
            <Image
              src={course.banner}
              alt={course.name}
              width={45}
              height={45}
              className={`rounded-full border-2 w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] lg:w-[60px]  lg:h-[60px] border-white cursor-pointer transition ${selectedCourse === course.id ? 'ring-2 sm:ring-3 lg:ring-4 ring-green-400' : ''
                }`}
            />
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default HeroSection
