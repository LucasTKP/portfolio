import React from 'react'
import Image from 'next/image'
import instagram from '@/assets/icons/instagram.svg'
import github from '@/assets/icons/github.svg'
import linkedin from '@/assets/icons/linkedin.svg'

function SocialMedia() {
  return (
    <section className='absolute right-[2%] max-lg:right-[3px] top-0 h-[300px] max-lg:h-[200px] max-sm:h-[120px] flex flex-col items-center'>
        <div className='w-[4px] h-[100%] bg-[#ABB2BF]'/>
        <a href='https://www.instagram.com/lucas_tkp/' target='__blank'><Image src={instagram} alt='instagram' className='w-[34px] max-lg:w-[30px] hover:brightness-75 cursor-pointer duration-200 mt-[-3px]'/></a>
        <a href='https://github.com/LucasTKP'  target='__blank'><Image src={github} alt='github' className='w-[30px] max-lg:w-[26px] hover:brightness-75 cursor-pointer duration-200 my-[10px]'/></a>
        <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'  target='__blank'><Image src={linkedin} alt='linkedin' className='w-[30px] max-lg:w-[26px] hover:brightness-75 cursor-pointer duration-200'/></a>
    </section>
  )
}

export default SocialMedia