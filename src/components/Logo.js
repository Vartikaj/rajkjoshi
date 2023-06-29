import Link from 'next/link'
import React from 'react'
//this is for importing the hover effect on the content
import {motion} from "framer-motion"


//here we define it because we use motion event with the next.js element
const MotionLink = motion(Link); 
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
        <MotionLink href="/" className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light md:w-14 md:h-14 md:text-[20px]"
        whileHover={{
            backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: {duration:1,repeat:Infinity},

        }}>RJ</MotionLink>
    </div>
  )
}

export default Logo