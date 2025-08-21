'use client'

import { navLinks } from '@/const'
import { Languages, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className='h-[10vh] sm:h-[12vh] lg:h-[13.5vh] fixed inset-0 z-40 bg-gradient-to-r from-[#3EBD80] to-[#1D573B]'>
        <div className='h-full w-full flex items-center justify-between px-4 sm:px-6 lg:px-0 '>
          {/* Logo */}
          <Link href={'/'}>
            <div className='w-[140px] sm:w-[170px] lg:w-[200px] h-[50px] sm:h-[65px] lg:h-[80px] rounded-tr-[15px] sm:rounded-tr-[20px] lg:rounded-tr-[23px] rounded-br-[25px] sm:rounded-br-[35px] lg:rounded-br-[45px] pl-[20px] sm:pl-[35px] lg:pl-[50px] bg-white flex items-center'>
              <Image 
                src={'/logo.png'} 
                alt='Logo' 
                width={60} 
                height={60}
                className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[97px] lg:h-[97px]'
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className='xl:gap-9 gap-3 hidden lg:flex text-[16px] xl:text-[20px] font-medium'>
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

          {/* Right side - Desktop */}
          <div className='gap-3 sm:gap-5 lg:gap-7 md:mr-10   flex items-center'>
            <Languages className="text-white w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-gray-200 transition" />
            
            {/* Signup button */}
            <div className='w-[100px] sm:w-[130px] lg:w-[157px] h-[35px] sm:h-[40px] lg:h-[46px] flex items-center justify-center bg-[#0B2234] rounded-[15px] sm:rounded-[20px] lg:rounded-[23px] border-2 border-green-400 cursor-pointer hover:scale-105 transition '>
              <p className='text-[14px] sm:text-[16px] lg:text-[20px] text-white font-medium'>Signup</p>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className='lg:hidden text-white p-2'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden' onClick={toggleMenu}>
          <div 
            className='fixed top-[10vh] sm:top-[12vh] right-0 w-[250px] sm:w-[300px] h-[calc(100vh-10vh)] sm:h-[calc(100vh-12vh)] bg-gradient-to-b from-[#3EBD80] to-[#1D573B] shadow-lg'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex flex-col p-6 space-y-6'>
              {/* Mobile Links */}
              <div className='flex flex-col space-y-4'>
                {navLinks.map(nav => {
                  const isActive = pathName === nav.route
                  return (
                    <Link
                      href={nav.route}
                      key={nav.route}
                      onClick={toggleMenu}
                      className={`text-[18px] font-medium py-2 px-4 rounded-lg transition duration-300 ${
                        isActive
                          ? "text-white bg-white bg-opacity-20"
                          : "text-gray-100 hover:text-white hover:bg-white hover:bg-opacity-10"
                      }`}
                    >
                      {nav.name}
                    </Link>
                  )
                })}
              </div>

              {/* Mobile Language & Signup */}
              <div className='border-t border-white border-opacity-20 pt-4 space-y-4'>
                <div className='flex items-center gap-3 text-white cursor-pointer hover:text-gray-200 transition'>
                  <Languages size={20} />
                  <span className='text-[16px]'>Tilni ozgartirish</span>
                </div>
                
                <div className='w-full h-[46px] flex items-center justify-center bg-[#0B2234] rounded-[23px] border-2 border-green-400 cursor-pointer hover:scale-105 transition'>
                  <p className='text-[18px] text-white font-medium'>Signup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className='h-[10vh] sm:h-[12vh] lg:h-[13.5vh]'></div>
    </>
  )
}

export default Navbar