import Image from 'next/image'
import React from 'react'

const ProjectsSection = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-2 gap-x-12 gap-y-6 mt-5">
        <Image src={'/images/project.png'} alt='Project' width={690} height={425} className='col-span-6 rounded-[12px] row-span-2 object-cover' />
        <Image src={'/images/project.png'} alt='Project' width={292} height={203} className='col-span-3 rounded-[12px] row-span-1 object-cover' />
        <Image src={'/images/project.png'} alt='Project' width={292} height={203} className='col-span-3 rounded-[12px] row-span-1 object-cover' />
        <Image src={'/images/project.png'} alt='Project' width={292} height={203} className='col-span-3 rounded-[12px] row-span-1 object-cover' />
        <Image src={'/images/project.png'} alt='Project' width={292} height={203} className='col-span-3 rounded-[12px] row-span-1 object-cover' />
      </div>
      <div className='grid grid-cols-12 gap-6 mt-5'>
        <Image src={'/images/project.png'} alt='Project' width={292} height={203} className='col-span-3 w-full h-full object-cover rounded-[12px] row-span-1' />
        <Image src={'/images/project.png'} alt='Project' width={1005} height={425} className='col-span-9 w-full h-[425px] object-cover rounded-[12px] row-span-2' />
        <Image src={'/images/project.png'} alt='Project' width={292} height={203} className='col-span-3 w-full h-full object-cover rounded-[12px] row-span-1' />
      </div>
      <div className='flex items-center justify-center mt-7'>
        <button className='w-[240px] h-[50px] text-center cursor-pointer items-center rounded-[45px] border-2 border-green-700 bg-gradient-to-l from-[#3EFEA1] to-[#259860]'>All Projects</button>
      </div>
    </>
  )
}

export default ProjectsSection