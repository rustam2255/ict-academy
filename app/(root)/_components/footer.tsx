import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='opacity-100'>
      <div className='mt-5 pb-5 text-center'>
        <p className='text-[14px] text-white'>© 2025 ICT Academy. All rights reserved.</p>
        <div className='mt-3 flex gap-6 justify-center items-center'>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition">
            <Facebook className="text-[#0B2234]" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition">
            <Instagram className="text-[#0B2234]" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition">
            <Twitter className="text-[#0B2234]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
