import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

export const HireMe = () => {
  return (
    <div className = "absolute left-4 bottom-4 flex items-center justify-center overflow-hidden lg:right-8 lg:left-auto lg:top-0 lg:bottom-auto">
        <div className='w-40 h-auto flex items-center justify-center relative lg:w-24 md:w-20'>
            <CircularText className = {"fill-dark animate-spin-slow dark:fill-light"}></CircularText>
            <Link href="mailto:rajkjoshi@aries.res.in" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-light bg-dark h-20 w-20 rounded-full border border-solid border-transparent shadow-md hover:bg-light hover:text-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light lg:w-12 lg:h-12 lg:text-[10px] md:w-11 md:h-11 md:text-[10px]">Hire Me</Link>
        </div>
        
    </div>
  )
}
