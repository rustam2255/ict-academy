import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full mx-auto relative shadow-[7px_4px_4px_0px_rgba(0,0,0,0.25)] h-[80vh] rounded-[23px] '>
      <Image src={'/images/hero.jpg'} alt='hero' fill
        className="rounded-[23px] " />
        <div className='w-[630px] rounded-[23px] rounded-tr-[250px] shadow-[32px_4px_4px_0px_rgba(0,0,0,0.25)] h-[80vh] absolute t-0 l-0 bg-gradient-to-b from-[#1d573b] to-[#0D2537] opacity-[74%]'></div>
    </div>
  )
}

export default HeroSection