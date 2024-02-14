import React from 'react'
import Image from 'next/image';
import iconGithub from "@/assets/icons/github.svg"
import IconArrowLeft from '@/assets/icons/arrowLeft.svg'

interface Props {
    srcMedia: string
    technology: string
    title: string
    urlDeploy: string
    urlGithub: string
    urlThumbnail: string
}

function Project({srcMedia, technology, title, urlDeploy, urlGithub, urlThumbnail }: Props) {
    return (
        <div className='border-secondary border-[1px] rounded-[4px] aspect-video w-[32%] max-md:w-[48%] max-sm:w-full'>
            <Image src={urlThumbnail} alt='project' quality={100} width={500} height={281.25}/>

            <div className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] mt-[2px] outline outline-[1px] outline-offset-0 p-[5px] text-secondary'>
                {technology}
            </div>

            <div className='p-[10px]'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-[28px] max-xl:text-[24px] max-lg:text-[22px] font-medium'>{title}</h3>
                    <a href={srcMedia} target='__blank' className='group flex items-center gap-x-[5px] underline hover:brightness-75 duration-200'>
                        <p className='text-[18px]'>Assistir</p>
                        <Image src={IconArrowLeft} alt='arrow' className='rotate-180 mr-[10px] group-hover:mr-[0px] group-hover:ml-[10px] duration-200'/>
                    </a>
                </div>
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