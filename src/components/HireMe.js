import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

export const HireMe = () => {
  return (
    <div className = "absolute left-4 bottom-4 flex items-center justify-center overflow-hidden">
        <div className='w-40 h-auto flex items-center justify-center relative'>
            <CircularText className = {"fill-dark animate-spin-slow"}></CircularText>
            <Link href="mailto:rajkjoshi@aries.res.in" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-light bg-dark h-20 w-20 rounded-full border border-solid border-transparent shadow-md hover:bg-light hover:text-dark">Hire Me</Link>
        </div>
        
    </div>
  )
}
