'use client'
import React from 'react'
import Image from 'next/image'
import ImageSkills from '@/assets/images/skills.png'
import Skill from './Skill'
import { RevealWrapper } from 'next-reveal'
function Skills() {
    return (
        <section id='about' className='pt-[75px]'>
            <RevealWrapper rotate={{ x: 0, y: 40, z: 0 }} origin='left' delay={150} duration={500} distance='100%' reset={false} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
                <div className='flex items-center gap-x-[20px]'>
                    <h2 className='text-[36px] max-2xl:text-[34px] max-xl:text-[30px] max-lg:text-[23px] max-md:text-[19px] max-sm:text-[24px] max-lsm:text-[22px] font-medium'>
                        <span className='text-primary'>#</span>
                        Skills
                    </h2>
                    <div className='h-[2px] w-full bg-primary' />
                </div>
                <div className='flex justify-between mt-[40px] max-lg:mt-[30px] max-md:relative'>
                    <Image src={ImageSkills} alt='Detalhes' className='w-[40%] self-center max-md:absolute max-md:z-[-10] max-md:bottom-0 max-md:left-0 max-md:w-[30%] max-sm:w-[40%] max-lsm:hidden' />
                    <div className='grid grid-cols-3 max-lsm:grid-cols-2 grid-flow-col gap-[20px] max-lg:gap-x-[10px] items-start self-start' style={{ gridAutoRows: 'min-content' }}>
                        <div className='max-lsm:hidden'>
                            <Skill title='Linguagens' description='JavaScript TypeScript' />
                        </div>


                        <div className='flex flex-col gap-y-[20px] max-lsm:hidden'>
                            <Skill title='Banco de Dados' description='Mongo Supabase Firebase' />
                            <Skill title='Ferramentas' description='VSCode Figma GitHub' />
                        </div>

                        <div className='flex flex-col gap-y-[20px] max-lsm:hidden'>
                            <Skill title='Frameworks' description='React Next Node' />
                            <Skill title='Outros' description='Html Css Scss Sass Tailwind S.Components StyleSheet Express Fastify' />
                        </div>

                        <div className='flex flex-col gap-y-[10px] lsm:hidden'>
                            <Skill title='Linguagens' description='JavaScript TypeScript' />
                            <Skill title='Banco de Dados' description='Mongo Supabase Firebase' />
                            <Skill title='Ferramentas' description='VSCode Figma GitHub' />
                        </div>

                        <div className='flex flex-col gap-y-[10px] lsm:hidden'>
                            <Skill title='Frameworks' description='React Next Node' />
                            <Skill title='Outros' description='Html Css Scss Sass Tailwind S.Components StyleSheet Express Fastify' />
                        </div>


                    </div>

                </div>
            </RevealWrapper>
        </section>
    )
}

export default Skills