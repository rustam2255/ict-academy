import { Dot, Facebook } from 'lucide-react'
import React from 'react'

const CourseCard = () => {
  return (
    <div className='w-full h-full rounded-[12px] flex flex-col p-3 sm:p-4 lg:p-5 bg-[#0A1E2E] min-h-[280px] sm:min-h-[320px] lg:min-h-[350px]'>
      {/* Header */}
      <div className='flex items-center justify-between mb-3 sm:mb-4'>
        <div className='flex items-center gap-2 sm:gap-3'>
          <Facebook className='w-5 h-5 sm:w-6 sm:h-6 text-blue-500' />
          <p className='font-semibold text-[16px] sm:text-[20px] lg:text-[24px] text-white'>Python</p>
        </div>
        <button className='flex items-center justify-center text-[10px] sm:text-[12px] lg:text-[14px] font-semibold bg-green-400 text-black px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-[6px] sm:rounded-[8px] hover:bg-green-300 transition-colors duration-300 whitespace-nowrap'>
          Continue
        </button>
      </div>

      {/* Divider */}
      <div className='w-full h-[1px] bg-green-400 mb-3 sm:mb-4'></div>

      {/* Content */}
      <div className='flex flex-col flex-1'>
        <h3 className='font-semibold text-[14px] sm:text-[16px] lg:text-[18px] text-white mb-2 sm:mb-3'>
          Python Learning Roadmap
        </h3>
        
        {/* Learning items */}
        <div className='space-y-1 sm:space-y-2'>
          {[
            'Basics',
            'Control Flow', 
            'Data Structures',
            'Functions',
            'Modules & File handling'
          ].map((item, index) => (
            <div key={index} className='flex items-center'>
              <Dot className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-400 flex-shrink-0' />
              <p className='text-[12px] sm:text-[14px] text-gray-300'>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const CourseSection = () => {
  return (
    <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
      {/* Header Section */}
      <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12'>
        <h2 className='font-bold text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-white text-center'>
          Explore Our Categories
        </h2>
        <p className='font-medium text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] text-center text-[#BFBABA] max-w-4xl leading-relaxed'>
          ICT Academy is a place of learning that has more than 10,000 students to date, fully specializing in numerous areas of programming.
        </p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 xl:gap-7 mb-8 sm:mb-10 lg:mb-12'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className='w-full'>
            <CourseCard />
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className='flex items-center justify-center'>
        <button className='w-[200px] sm:w-[220px] lg:w-[240px] h-[40px] sm:h-[45px] lg:h-[50px] text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-black text-center cursor-pointer flex items-center justify-center rounded-[35px] sm:rounded-[40px] lg:rounded-[45px] border-2 border-green-700 bg-gradient-to-l from-[#3EFEA1] to-[#259860] hover:from-[#2FE091] hover:to-[#1F8050] transition-all duration-300 hover:scale-105'>
          Explore Categories
        </button>
      </div>
    </div>
  )
}

export default CourseSection