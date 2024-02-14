import React from 'react'
import Image from 'next/image'
import iconEmail from '@/assets/icons/email.svg'
import iconHouse from '@/assets/icons/house.svg'
import iconClipBoard from '@/assets/icons/clipboard.svg'
import iconInfo from '@/assets/icons/info.svg'

function NavBar() {
  return (
    <section className='flex items-center justify-center fixed w-[100%] left-0 bottom-[20px] sm:hidden z-50'>
      <div className='w-[100%] max-w-[300px] bg-gradient-to-b from-primary to-white rounded-full p-[2px]'>
        <div className='bg-background flex items-center justify-between p-[10px] rounded-full'>
          <a href='#house'>
            <Image src={iconHouse} alt='casa' width={30} className='duration-200 hover:brightness-75'/>
          </a>

          <a href='#projects'>
            <Image src={iconClipBoard} alt='prancheta' width={30} className='duration-200 hover:brightness-75'/>
          </a>

          <a href='#about'>
            <Image src={iconInfo} alt='informação' width={30} className='duration-200 hover:brightness-75'/>
          </a>

          <a href='#contact'>
            <Image src={iconEmail} alt='email' width={30} className='duration-200 hover:brightness-75'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NavBar