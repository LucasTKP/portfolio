'use client'
import React, { useState } from 'react'

function ChangeText() {
    var  [state, setState] = useState(true)

    return (
    <>
        {state ?
            <p onAnimationEnd={() => setState(false)} style={{overflow:'hidden', whiteSpace:'nowrap'}} id='notSelect' className='text-[18px] max-lg:text-[16px] max-md:text-[13px] max-sm:text-[16px] text-[#ABB2BF] border-r border-r-[#aab2bf] duration-200 animate-typewriter'>
                Buscando uma vaga de estágio
            </p>
        :
            <h1 onAnimationEnd={() => setState(true)} style={{overflow:'hidden', whiteSpace:'nowrap'}} id='notSelect' className='text-[18px] max-lg:text-[16px] max-md:text-[13px] max-sm:text-[16px] text-[#ABB2BF] border-r border-r-[#aab2bf] duration-200 animate-typewriter'>
                Estudando Next js e tailwind
            </h1>
        }
    </>
    )
}

export default ChangeText