'use client'
import React from 'react'
import Image from 'next/image'
import IconWhatsApp from '@/assets/icons/whatsapp.svg'
import IconEmail from '@/assets/icons/email.svg'
import { RevealWrapper } from 'next-reveal'

function Contact() {
    return (
        <section id='contact' className='pt-[75px]'>
            <RevealWrapper rotate={{ x: 0, y: 40, z: 0 }} origin='left' delay={150} duration={500} distance='100%' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                <div className='flex items-center gap-x-[20px]'>
                    <h2 className='whitespace-nowrap text-[36px] max-2xl:text-[34px] max-xl:text-[30px] max-lg:text-[23px] max-md:text-[19px] max-sm:text-[24px] max-lsm:text-[22px] font-medium'>
                        <span className='text-primary'>#</span>
                        Contato
                    </h2>
                    <div className='h-[2px] w-full bg-primary' />
                </div>
                <div className='mt-[20px] flex gap-x-[20%] max-2xl:gap-x-[15%] max-xl:gap-x-[10%] max-lg:gap-x-[5%] max-md:gap-x-[3%] items-center max-sm:flex-wrap max-sm:justify-center'>
                    <p className='text-[20px] max-xl:text-[18px] max-lg:text-[17px] max-md:text-[14px] max-sm:text-[16px] max-lsm:text-[14px] text-secondary mt-[20px]'>
                        No momento busco minha primeira vaga na área de desenvolvimento para aplicar todos os conhecimentos que adquiri até o momento e continuar aprendendo.
                    </p>

                    <div className='border-[2px] border-secondary rounded-[4px] p-[15px] min-w-fit max-sm:mt-[20px]'>
                        <p className='whitespace-nowrap text-[18px] font-medium text-center'>Entre em contato</p>

                        <a href='https://wa.me/5516991614062' target='__blank' className='flex items-center gap-x-[5px] mt-[10px] hover:brightness-75 cursor-pointer'>
                            <Image src={IconWhatsApp} width={25} alt='whatsapp' />
                            <p>(16) 991614062</p>
                        </a>

                        <a href='mailto:lucasgeansantos@gmail.com?subject=&body=' target='__blank' className='flex items-center gap-x-[5px] mt-[15px] hover:brightness-75 cursor-pointer'>
                            <Image src={IconEmail} width={25} alt='Email' className='brightness-200' />
                            <p>lucasgeansantos@gmail.com</p>
                        </a>

                    </div>
                </div>
            </RevealWrapper>
        </section>

    )
}

export default Contact
