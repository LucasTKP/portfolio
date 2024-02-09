import React from 'react'
import Image from 'next/image'
import logo from '@/assets/icons/logo.png'
import instagram from '@/assets/icons/instagram.svg'
import github from '@/assets/icons/github.svg'
import linkedin from '@/assets/icons/linkedin.svg'

function Footer() {
    return (
        <footer className='pt-[40px] pb-[20px] max-sm:pb-[100px] px-[15%] max-lg:px-[11%] max-md:px-[8%] max-sm:px-[6%] border-t-[2px] border-t-secondary mt-[50px]'>
            <div className='flex max-lsm:flex-wrap max-lsm:justify-center justify-between items-start gap-x-[50px]'>
                <div>
                    <div className='flex items-center gap-x-[10px]'>
                        <div className='group flex items-center gap-x-[10px]'>
                            <Image src={logo} alt='logo' className='duration-200 group-hover:rotate-180' />
                            <p id='notSelect' className='text-white font-bold duration-200 group-hover:scale-[1.05] cursor-pointer'>Lucas</p>
                        </div>
                        <p className='text-secondary max-sm:text-[14px]'>lucasgeansantos@gmail.com</p>
                    </div>
                    <p className='mt-[15px] max-md:mt-[10px] max-lsm:mt-[5px] max-sm:text-[14px]'>Desenvolvedor Front-End Web</p>
                </div>
                <div>
                    <p className='text-[20px] font-medium text-center max-lsm:mt-[20px]'>Media</p>
                    <div className='flex items-center gap-x-[10px]'>
                        <a href='https://www.instagram.com/lucas_tkp/' target='__blank'><Image src={instagram} alt='instagram' className='w-[30px] max-md:w-[26px] hover:brightness-75 cursor-pointer duration-200' /></a>
                        <a href='https://github.com/LucasTKP' target='__blank'><Image src={github} alt='github' className='w-[24px] max-md:w-[22px] hover:brightness-75 cursor-pointer duration-200' /></a>
                        <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='__blank'><Image src={linkedin} alt='linkedin' className='w-[24px] max-md:w-[22px] hover:brightness-75 cursor-pointer duration-200' /></a>
                    </div>
                </div>
            </div>

            <p className='mt-[30px] text-secondary text-center'>© Copyright 2024. Made by Lucas</p>

        </footer>
    )
}

export default Footer