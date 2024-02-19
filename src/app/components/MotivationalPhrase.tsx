'use client'
import React from 'react'
import Image from 'next/image'
import iconQuotationMarks from '@/assets/icons/quotationMarks.svg'
import { RevealWrapper } from 'next-reveal'

function MotivationalPhrase() {
    return (
        <RevealWrapper rotate={{ x: 0, y: 40, z: 0 }} origin='left' delay={0} duration={500} distance='100%' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
            <section className='mt-[100px] flex flex-col items-center'>
                <div className='flex flex-col'>
                    <div className='relative border-[2px] max-sm:border-[1px] border-[#ABB2BF] rounded-[6px] p-[25px] max-lg:p-[15px]'>
                        <Image src={iconQuotationMarks} alt='aspas' className='absolute top-[-10px] max-lg:top-[-9px] max-md:top-[-8px] max-lsm:top-[-7px] left-[15px] bg-background px-[10px] w-fit max-lg:w-[45px] max-md:w-[40px] max-lsm:w-[35px]' />
                        <Image src={iconQuotationMarks} alt='aspas' className='absolute bottom-[-10px] max-lg:bottom-[-9px] max-md:bottom-[-8px] max-lsm:bottom-[-7px] right-[15px] bg-background px-[10px] w-fit max-lg:w-[45px] max-md:w-[40px] max-lsm:w-[35px] z-10' />
                        <p className='text-[26px] max-xl:text-[20px] max-lg:text-[16px] max-lsm:text-[14px]'>A felicidade de sua vida depende da qualidade de seus pensamentos.</p>
                    </div>

                    <div className='mt-[-2px] max-sm:mt-[-1px] relative border-[2px] max-sm:border-[1px] border-[#ABB2BF] rounded-[6px] p-[15px] max-lg:p-[8px] self-end'>
                        <p className='text-[22px] max-xl:text-[18px] max-lg:text-[14px] max-lsm:text-[12px]'>- Marco Aurélio</p>
                    </div>
                </div>

            </section>
        </RevealWrapper >
    )
}

export default MotivationalPhrase