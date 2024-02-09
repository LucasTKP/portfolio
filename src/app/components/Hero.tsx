import React from 'react'
import Image from 'next/image'
import photo1 from '@/assets/images/photo1.png'
import ChangeText from './changeText'


function Hero() {
  return (
    <section className='flex max-sm:flex-wrap mt-[100px] max-sm:mt-[20px] gap-x-[100px] max-2xl:gap-x-[50px] max-xl:gap-x-[20px] max-lg:gap-x-[20px] max-md:gap-[10px]'>
        <div className='mt-[50px] max-2xl:mt-[0px] flex flex-col items-start'>
            <p className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-bold'>
                Olá, meu nome é
            </p>
            <p className='text-[36px] max-2xl:text-[34px] max-xl:text-[30px] max-lg:text-[23px] max-md:text-[19px] max-sm:text-[24px] max-lsm:text-[22px] font-semibold'>
                <span className='text-primary'>Lucas</span> e sou um <br /> <span className='text-primary'>Desenvolvedor</span> de <span className='text-primary'>software</span> 
            </p>

            <p className='text-[20px] max-xl:text-[18px] max-lg:text-[15px] max-md:text-[13px] max-sm:text-[16px] max-lsm:text-[14px] max-sm:pr-[10px] text-[#abb2bf] mt-[40px] max-lg:mt-[20px] max-md:mt-[10px]'>Possuo experiência tanto em desenvolvimento  front-end quanto back-end, sendo capaz de criar Websites responsivos utilizando as tecnologias React/Next.</p>
            
            <button className='max-sm:hidden font-medium relative outline outline-[2px] outline-primary outline-offset-[-1px] px-[40px] max-lg:px-[20px]  py-[10px] max-lg:py-[7px] text-[22px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[16px]  rounded-[8px] mt-auto m
            after:w-0 hover:after:w-full after:h-full after:bg-primary/10 after:absolute after:left-0 after:bottom-0 after:rounded-[8px] after:duration-200 z-0'>
               Contato
            </button>
        </div>
        <div className='flex flex-col items-center min-w-[45%] max-sm:w-full'>
            <Image src={photo1} alt='Lucas' priority quality={100} width={500} className='max-sm:w-[300px]'/>
            <div className='flex items-center border-[#ABB2BF] border-[1px] rounded-[5px] p-[10px] max-lg:p-[5px] gap-x-[10px] max-lg:gap-x-[5px]'>
                <div className='w-[20px] max-lg:w-[15px] h-[20px] max-lg:h-[15px] bg-primary rounded-full'/>
                <ChangeText />
            </div>
        </div>
    </section>
  )
}

export default Hero