'use client'

import { navLinks } from '@/const'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathName = usePathname()

  return (
    <div className='h-[13.5vh] fixed inset-0 z-40 bg-gradient-to-r from-[#3EBD80] to-[#1D573B] '>
      <div className='h-[13.5vh] w-full flex items-center justify-between'>
        {/* Logo */}
        <Link href={'/'}>
          <div className='w-[200px] h-[80px] rounded-tr-[23px] rounded-br-[45px] pl-[50px] bg-white flex items-center'>
            <Image src={'/logo.png'} alt='Logo' width={97} height={97} />
          </div>
        </Link>

        {/* Links */}
        <div className='xl:gap-9 gap-3 hidden md:flex text-[16px] xl:text-[20px] font-medium'>
          {navLinks.map(nav => {
            const isActive = pathName === nav.route
            return (
              <Link
                href={nav.route}
                key={nav.route}
                className={`relative transition duration-300 ${
                  isActive 
                    ? "text-white after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-white after:rounded-full"
                    : "text-gray-100 hover:text-white"
                }`}
              >
                {nav.name}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className='gap-7 flex items-center pr-10'>
          <Languages className="text-white w-6 h-6 cursor-pointer hover:text-gray-200 transition" />

          <div className='w-[157px] h-[46px] flex items-center justify-center bg-[#0B2234] rounded-[23px] border-2 border-green-400 cursor-pointer hover:scale-105 transition'>
            <p className='text-[20px] text-white font-medium'>Signup</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
