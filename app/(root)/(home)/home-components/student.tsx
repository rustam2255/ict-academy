import Image from 'next/image'
import React from 'react'

const StudentCard = () => {
  return (
    <div className='with-[639px] height-[205px] relative  p-5 mt-5 rounded-[7px] bg-[#0A1E2E]'>
      <div className='flex gap-3'>
        <Image src={'/images/student.jpg'} alt='Student' width={131} height={131} className='rounded-full' />
        <div className="flex flex-col justify-between gap-5">
          <div>
            <p className="font-semibold text-[24px]">Last name First name</p>
            <p className="font-medium text-[12px]">
              Lorem Ipsum is a scrambled piece of text derived from classical Latin
              literature, used as placeholder content. It helps designers and developers
              focus on visual elements like layout and typography without being
              distracted by actual content.
            </p>
          </div>
          <p className="text-[20px] font-bold bg-gradient-to-l from-[#3EFEA1] to-[#259860] bg-clip-text text-transparent self-end">
            Backend Developer
          </p>
        </div>

      </div>
      <Image src={'/logolight.png'} alt='Logo' width={70} height={70} className='absolute top-0 right-4' />
    </div>
  )
}

const StudentPage = () => {
  return (
    <div className='grid gap-9 grid-cols-12'>
      <div className='col-span-6'>
        <StudentCard />
        <StudentCard />
      </div>
        <div className='col-span-6'>
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  )
}

export default StudentPage