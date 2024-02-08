import React from 'react'

interface Props {
    title: string;
    description: string;
}
function Skill({title, description}: Props){
  return (
    <div className='border-[2px] border-secondary bg-[#282C33]'>
        <h4 className='text-[20px] max-xl:text-[18px] max-lg:text-[17px] max-sm:text-[15px] font-semibold max-sm:font-medium border-b-[1px] border-b-secondary  p-[10px] max-xl:p-[8px] max-lg:p-[5px]'>{title}</h4>
        <p className='text-[18px] max-xl:text-[17px] max-lg:text-[16px] max-sm:text-[14px] text-secondary  p-[10px] max-xl:p-[8px] max-lg:p-[5px]'>{description}</p>
    </div>
  )
}

export default Skill