import React from 'react'

const TeacherSection = () => {
  return (
    <div className='flex mt-3 sm:mt-4 lg:mt-5 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10'>
      <h2 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-white text-center'>
        Our Teachers
      </h2>
      <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-300 text-center max-w-2xl leading-relaxed mt-2 sm:mt-3 lg:mt-4'>
        Our teachers are real heroes, you can get acquainted with them below
      </p>
      <div className='flex gap-3 mt-4 sm:mt-6 lg:mt-8'>
        {/* Bu yerda teacher kartalar qo'shilishi mumkin */}
      </div>
    </div>
  )
}

export default TeacherSection