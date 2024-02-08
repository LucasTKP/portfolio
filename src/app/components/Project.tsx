'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import iconGithub from "@/assets/icons/github.svg"


interface Props {
    srcMedia: string
    technology: string
    title: string
    urlDeploy: string
    urlGithub: string
}

function Project({ srcMedia, technology, title, urlDeploy, urlGithub }: Props) {
    const [showControls, setShowControls] = useState(false);
    return (
        <div className='border-secondary border-[1px] rounded-[4px] w-[32%] max-md:w-[48%] max-sm:w-full'
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}>
            <video controls={showControls} className='relative'>

                <source src={srcMedia} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </video>



            <div className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] mt-[2px] outline outline-[1px] outline-offset-0 p-[5px] text-secondary'>
                {technology}
            </div>

            <div className='p-[10px]'>
                <h3 className='text-[28px] max-xl:text-[24px] max-lg:text-[22px] font-medium'>{title}</h3>
                <div className='flex justify-between items-center mt-[20px] max-lg:mt-[10px] text-[20px] max-xl:text-[17px] max-lg:text-[13px]'>
                    <a href={urlDeploy} target='__blank' className='relative px-[10px] max-lg:px-[5px] py-[5px] border border-primary rounded-[4px]
                            after:w-0 hover:after:w-full after:h-full after:bg-primary/10 after:absolute after:left-0 after:bottom-0 after:rounded-[4px] after:duration-200'>
                        {"Deploy <~>"}
                    </a>
                    <a href={urlGithub} target='__blank' className='relative px-[10px] max-lg:px-[5px] py-[5px] border border-secondary rounded-[4px] flex items-center gap-x-[10px]
                            after:w-0 hover:after:w-full after:h-full after:bg-secondary/10 after:absolute after:left-0 after:bottom-0 after:rounded-[4px] after:duration-200
                            '>
                        <Image src={iconGithub} alt="" width={30} className='w-[25px]' />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project