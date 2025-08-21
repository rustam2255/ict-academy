import Image from 'next/image'
import React from 'react'

const ProjectsSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-0">
      {/* Mobile Layout - Single Column Stack */}
      <div className="block sm:hidden space-y-4 mt-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-full">
            <Image 
              src={'/images/project.png'} 
              alt={`Project ${index + 1}`} 
              width={350} 
              height={200} 
              className='w-full h-48 object-cover rounded-[12px]' 
            />
          </div>
        ))}
      </div>

      {/* Tablet Layout - 2 Column Grid */}
      <div className="hidden sm:block lg:hidden">
        {/* First Row - 2 equal columns */}
        <div className="grid grid-cols-2 gap-4 mb-4 mt-5">
          <Image 
            src={'/images/project.png'} 
            alt='Project 1' 
            width={350} 
            height={250} 
            className='w-full h-60 object-cover rounded-[12px]' 
          />
          <Image 
            src={'/images/project.png'} 
            alt='Project 2' 
            width={350} 
            height={250} 
            className='w-full h-60 object-cover rounded-[12px]' 
          />
        </div>
        
        {/* Second Row - 3 columns in 2 column grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Image 
            src={'/images/project.png'} 
            alt='Project 3' 
            width={350} 
            height={200} 
            className='w-full h-48 object-cover rounded-[12px]' 
          />
          <div className="grid grid-rows-2 gap-4">
            <Image 
              src={'/images/project.png'} 
              alt='Project 4' 
              width={350} 
              height={120} 
              className='w-full h-28 object-cover rounded-[12px]' 
            />
            <Image 
              src={'/images/project.png'} 
              alt='Project 5' 
              width={350} 
              height={120} 
              className='w-full h-28 object-cover rounded-[12px]' 
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Asl kod ko'rinishi */}
      <div className="hidden lg:block">
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
      </div>

      {/* All Projects Button */}
      <div className='flex items-center justify-center mt-7'>
        <button className='w-[240px] h-[50px] text-center cursor-pointer items-center rounded-[45px] border-2 border-green-700 bg-gradient-to-l from-[#3EFEA1] to-[#259860] hover:from-[#2FE091] hover:to-[#1F8050] transition-all duration-300 hover:scale-105'>
          All Projects
        </button>
      </div>
    </div>
  )
}

export default ProjectsSection