'use client'
import React from 'react'
import Image from 'next/image'
import photo2 from '@/assets/images/photo2.webp'
import { RevealWrapper } from 'next-reveal'

function Aboutme() {
    return (
        <RevealWrapper rotate={{ x: 0, y: 40, z: 0 }} origin='left' delay={150} duration={500} distance='100%' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
            <section className='mt-[75px]'>
                <div className='mt-[20px] flex gap-x-[20%] max-2xl:gap-x-[15%] max-xl:gap-x-[10%] max-lg:gap-x-[3%] max-md:gap-x-[3%] items-center max-sm:flex-wrap'>
                    <div>
                        <div className='flex items-center gap-x-[20px]'>
                            <h2 className='whitespace-nowrap text-[36px] max-2xl:text-[34px] max-xl:text-[30px] max-lg:text-[23px] max-md:text-[19px] max-sm:text-[24px] max-lsm:text-[22px] font-medium'>
                                <span className='text-primary'>#</span>
                                Sobre mim
                            </h2>
                            <div className='h-[2px] w-full bg-primary' />
                        </div>
                        <div className='text-[20px] max-xl:text-[18px] max-lg:text-[17px] max-md:text-[14px] max-sm:text-[16px] max-lsm:text-[14px] text-secondary mt-[20px]'>
                            <p>
                                Sou desenvolvedor, moro em Franca, São Paulo. Tive meu primeiro contato com algumas linhas de código em janeiro de 2020 quando comecei a cursar o ensino médio integrado ao técnico em Desenvolvimento de Sistemas na Etec. Desde então não parei de buscar informação e sempre me desafiar a fazer projetos.
                            </p>
                            <p>Atualmente estou cursando Desenvolvimento de Software Multiplataforma na Fatec de Franca.</p>
                        </div>
                    </div>

                    <Image src={photo2} alt='imagem 2' className='min-w-[400px] max-lg:min-w-[350px] max-md:min-w-[240px] max-sm:w-[300px] max-sm:mx-auto max-sm:mt-[20px]' />
                </div>

            </section>
        </RevealWrapper>
    )
}

export default Aboutme
