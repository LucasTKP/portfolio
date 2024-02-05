import React from 'react'
import Image from 'next/image'
import iconEmail from '@/assets/icons/email.svg'
import iconHouse from '@/assets/icons/house.svg'
import iconClipBoard from '@/assets/icons/clipboard.svg'
import iconInfo from '@/assets/icons/info.svg'

function NavBar() {
  return (
    <section className='flex items-center justify-center fixed w-[100%] left-0 bottom-[30px] sm:hidden'>
      <div className='w-[100%] max-w-[300px] bg-gradient-to-b from-primary to-white rounded-full p-[2px]'>
        <div className='bg-[#282C33] flex items-center justify-between p-[10px] rounded-full'>
          <a href='#hero'>
            <Image src={iconHouse} alt='' width={30} className='duration-200 hover:brightness-75'/>
          </a>

          <a>
            <Image src={iconClipBoard} alt='' width={30} className='duration-200 hover:brightness-75'/>
          </a>

          <a>
            <Image src={iconInfo} alt='' width={30} className='duration-200 hover:brightness-75'/>
          </a>

          <a>
            <Image src={iconEmail} alt='' width={30} className='duration-200 hover:brightness-75'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NavBar