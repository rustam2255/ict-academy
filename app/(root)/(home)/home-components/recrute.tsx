import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

const RecrutingSection = () => {
  return (
    <div className="relative w-full h-[630px] bg-cover bg-center" style={{ backgroundImage: "url('/images/recrute.jpg')" }}>
      {/* Overlay qavat */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative flex flex-col gap-5 mt-10 items-center justify-center">
        <h2 className="mt-8 text-white text-[24px] font-semibold">Recruting</h2>
        <p className="text-[20px] text-white">Finding a job or hiring the right people is now faster and easier — with us.</p>

        <div className="flex gap-30 justify-center items-center">
          <div className="w-[450px] h-[470px] bg-[#081A28] rounded-[28px] shadow-[0px_4px_4px_0px_#00000040] flex  flex-col items-center justify-center gap-3">
            <p className='text-[36px] font-bold text-white mb-0 pb-0'>Job Providers</p>
            <Image src={'/images/recrutelogo.png'} alt='logo' width={321} height={227} className='mr-9 mt-0 pt-0  ' />
            <p className='text-center text-[12px]'>Looking for that one game-changing hire? <br /> They might already be here — searching for you.</p>
            <button className='w-[240px] h-[60px] rounded-[45px] border-2 bg-gradient-to-l from-[#3EFEA1] to-[#259860] border-green-400 items-center'>Job Providers</button>
          </div>
          <div className="w-[450px] h-[470px] bg-[#081A28] rounded-[28px] shadow-[0px_4px_4px_0px_#00000040] flex  flex-col items-center justify-center gap-3">
            <p className='text-[36px] font-bold text-white mb-0 pb-0'>Job Seekers</p>
            <Image src={'/images/relogo.png'} alt='logo' width={321} height={227} className=' mt-0 pt-0 w-[321px] h-[227px] ' />
            <p className='text-center text-[12px]'>Looking for that one game-changing hire? <br /> They might already be here — searching for you.</p>
            <button className='w-[240px] h-[60px] rounded-[45px] border-2 bg-gradient-to-l from-[#3EFEA1] to-[#259860] border-green-400 items-center'>Job Providers</button>
          </div>

        </div>
      </div>
    </div>

  )
}

export default RecrutingSection