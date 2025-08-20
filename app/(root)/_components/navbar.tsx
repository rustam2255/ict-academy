import { navLinks } from '@/const'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[13.5vh] fixed inset-0 z-40 bg-gradient-to-r from-[#3EBD80] to-[#1D573B] '>
      <div className=' h-[13.5vh] w-full flex items-center justify-between'>
        <Link href={'/'}>
          <div className='w-[200px] h-[80px]  rounded-tr-[23px] rounded-br-[45px]  pl-[50px] bg-white'>
            <Image src={'/logo.png'} alt='Logo' width={97} height={97} />
          </div>
        </Link>
        <div className='xl:gap-9 gap-3 hidden md:flex text-[16px]  xl:text-[20px]'>
          {navLinks.map(nav => (
            <Link href={nav.route} key={nav.route}>{nav.name}</Link>
          ))}
        </div>
        <div className='gap-7 flex items-center pr-10'>
          <div>
            <Languages />
          </div>
          <div className=' w-[157px] h-[46px] flex items-center justify-center bg-[#0B2234] rounded-[23px] border-2 border-green-400'>
            <p className='text-[20px]'>Signup</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar