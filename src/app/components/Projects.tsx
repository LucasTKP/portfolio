import React from 'react';
import Project from './Project';


function Projects() {


    return (
        <section id='projects' className='pt-[75px]'>
            <div className='flex items-center gap-x-[20px]'>
                <h2 className='text-[36px] max-2xl:text-[34px] max-xl:text-[30px] max-lg:text-[23px] max-md:text-[19px] max-sm:text-[24px] max-lsm:text-[22px] font-medium'>
                    <span className='text-primary'>#</span>
                    Projetos
                </h2>
                <div className='h-[2px] w-full bg-primary' />
            </div>
            <div className='flex justify-between max-md:flex-wrap max-md:gap-y-[20px] mt-[40px] max-lg:mt-[30px]'>
                <Project urlThumbnail='/thumbnail2Docs.webp' srcMedia='https://youtu.be/2kh4mK4FS-4' technology='Next Tailwind Firebase Node' title='2Docs' urlDeploy='https://dashboard.2docs.app/' urlGithub='https://github.com/LucasTKP/2Docs' />
                <Project urlThumbnail='/thumbnail2Dash.webp' srcMedia='https://youtu.be/tFd77Rjhjjg' technology='Next Tailwind Stripe Firebase Node' title='2Dash' urlDeploy='https://www.2docs.app/' urlGithub='https://github.com/LucasTKP/2Dash' />
                <Project urlThumbnail='/thumbnail2Blog.webp' srcMedia='https://youtu.be/M7LSO1bU0cE' technology='Next Tailwind MarkDown' title='2Blog' urlDeploy='https://2-blog.vercel.app/' urlGithub='https://github.com/LucasTKP/2Blog' />
            </div>
        </section>
    )
}

export default Projects;