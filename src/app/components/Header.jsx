import React from 'react'
import Image from 'next/image'
import logo from '@/assets/icons/logo.png'

function Header() {
  return (
    <header className='mt-[30px] max-sm:mt-[20px] flex justify-between text-[#ABB2BF] text-[20px] max-lg:text-[18px] max-md:text-[17px]'>
      <div className='group flex items-center gap-x-[10px]'>
        <Image src={logo} alt='logo' className='duration-200 group-hover:rotate-180' />
        <p id='notSelect' className='text-white font-bold duration-200 group-hover:scale-[1.05] cursor-pointer'>Lucas</p>
      </div>

      <div className='flex gap-x-[32px] max-lg:gap-x-[26px] max-sm:hidden'>
        <a href='#hero' className='group flex items-center'>
          <span className='text-primary'>#</span>
          <p className='relative after:w-[0px] after:h-[2px] after:bg-primary after:absolute after:rounded-full after:duration-200 group-hover:after:w-full after:bottom-[2px] after:left-0'>
            Home
          </p>
        </a>

        <a href='#projects' className='group flex items-center'>
          <span className='text-primary'>#</span>
          <p className='relative after:w-[0px] after:h-[2px] after:bg-primary after:absolute after:rounded-full after:duration-200 group-hover:after:w-full after:bottom-[2px] after:left-0'>
            Projetos
          </p>
        </a>

        <a href='#about' className='group flex items-center'>
          <span className='text-primary'>#</span>
          <p className='relative after:w-[0px] after:h-[2px] after:bg-primary after:absolute after:rounded-full after:duration-200 group-hover:after:w-full after:bottom-[2px] after:left-0'>
            Sobre
          </p>
        </a>

        <a href='#contact' className='group flex items-center'>
          <span className='text-primary'>#</span>
          <p className='relative after:w-[0px] after:h-[2px] after:bg-primary after:absolute after:rounded-full after:duration-200 group-hover:after:w-full after:bottom-[2px] after:left-0'>
            Contato
          </p>
        </a>
      </div>
    </header>
  )
}

export default Header