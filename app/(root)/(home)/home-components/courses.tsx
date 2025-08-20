import { Dot, Facebook } from 'lucide-react'
import React from 'react'

const CourseCard = () => {
  return (
    <div className='w-full h-full rounded-[12px] flex flex-col p-4 bg-[#0A1E2E]'>
      <div className='flex items-center '>
        <Facebook />
        <p className='font-semibold text-[24px]'>Python</p>
        <button className='items-center text-[14px] font-semibold bg-green-400 ml-38 w-[92px] h-[30px] rounded-[8px]'>Continue</button>
      </div>
      <div className='w-90% mt-4 h-0 border border-[rgba(62,189,128,1)]'></div>
      <div className='flex flex-col '>
        <h3 className='font-semibold text-[16px] leading-[-4%]'>Pyhon Learning Roadmap</h3>
        <div className='flex items-center'>
          <Dot className='w-10 h-10' />
          <p className='text-[14px]'>Basics</p>
        </div>
        <div className='flex items-center'>
          <Dot className='w-10 h-10' />
          <p  className='text-[14px]'>Control Flow</p>
        </div>
        <div className='flex items-center'>
          <Dot className='w-10 h-10' />
          <p  className='text-[14px]'>Data Structures</p>
        </div>
        <div className='flex items-center'>
          <Dot className='w-10 h-10' />
          <p  className='text-[14px]'>Functions</p>
        </div>
        <div className='flex items-center'>
          <Dot className='w-10 h-10' />
          <p   className='text-[14px]'>Modules & File handling</p>
        </div>
      </div>
    </div>
  )
}


const CourseSection = () => {
  return (
    <div className='w-full mx-auto'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <p className='font-bold text-[32px] text-[rgba(255, 255, 255, 1)]'>Explore  Our Categories</p>
        <p className='font-medium text-[20px] text-center text-[#BFBABA]'>Ict Academy is a place of learning that has more than 10,000 students to date, fully specializing<br />
          in numerous areas of programming.</p>
      </div>
      <div className='grid grid-cols-3 mt-10 gap-y-7 gap-x-5 grid-rows-2'>
        {Array.from({ length: 6 }).map((_, i) => (
         <CourseCard key={i} />
        ))}
      </div>
      <div className='flex items-center justify-center mt-7'>
        <button className='w-[240px] h-[50px] text-center cursor-pointer items-center rounded-[45px] border-2 border-green-700 bg-gradient-to-l from-[#3EFEA1] to-[#259860]'>Explore Categories</button>
      </div>
    </div>
  )
}

export default CourseSection