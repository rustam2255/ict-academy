'use client'
import Image from 'next/image'
import React from 'react'
import { CourseCard } from '../(home)/home-components/courses'
import { Courses } from '@/interfaces'
import { useGetCoursesQuery } from '@/service/api'
import Loading from '../_components/loading'
import Error from '../_components/error'
import { motion } from 'framer-motion'
import { getCurrentLang } from '@/utils/getCurrentLang'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // easeOut
    },
  },
}



const CorsePage = () => {
  const lang = getCurrentLang();
  const { data, error, isLoading } = useGetCoursesQuery({
    limit: 6,
    offset: 0,
    lang
  })
  if (isLoading) return <Loading />
  if (error) return <Error />

  return (
    <motion.div
      className="overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Hero Image */}
      <motion.div
        className="w-full relative"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          src="/images/hero_courses.png"
          alt="Courses Hero"
          width={1440}
          height={282}
          className="w-full h-[200px] sm:h-[250px] md:h-[282px] object-cover"
        />
        <motion.div
          className="absolute top-2 left-4 sm:top-4 sm:left-6 md:left-8 lg:left-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Image
            src={'/logolight.png'}
            alt="logo"
            width={204}
            height={204}
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[204px] lg:h-[204px]"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12"
          variants={itemVariants}
        >
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white text-center">
            Explore Our Categories
          </h2>
          <p className="font-medium text-sm sm:text-base lg:text-lg text-center text-[#BFBABA] max-w-4xl leading-relaxed">
            ICT Academy is a place of learning that has more than 10,000 students to date, fully specializing in numerous areas of programming.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12"
          variants={containerVariants}
        >
          {data?.results.map((course: Courses) => (
            <motion.div
              key={course.id}
              className="w-full"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default CorsePage
