'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import logo from '@/assets/icons/logo.png'

function Header() {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if (scrollY > 75) {
      ref.current?.classList.add("backdrop-blur-md")
      ref.current?.classList.add("bg-background/50")
    } else if (scrollY < 75) {
      ref.current?.classList.remove("backdrop-blur-md")
      ref.current?.classList.remove("bg-background/50")
    }
  };

  // Adiciona um event listener para o evento de scroll quando o componente é montado
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={ref} className='sm:fixed px-[10%] max-xl:px-[7%] max-lg:px-[5%] left-0 w-full top-0 py-[20px] flex justify-between text-[#ABB2BF] text-[20px] max-lg:text-[18px] max-md:text-[17px] z-50'>
      <a href='#house' id='notSelect2'  className='group flex items-center gap-x-[10px]'>
        <Image src={logo} alt='logo' className='duration-200 group-hover:rotate-180' />
        <p className='text-white font-bold duration-200 group-hover:scale-[1.05]'>Lucas</p>
      </a>

      <div className='flex gap-x-[32px] max-lg:gap-x-[26px] max-sm:hidden'>
        <a href='#house' className='group flex items-center'>
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