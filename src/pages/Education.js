import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference = {ref}/>
        <motion.div
            initial = {{y:50}}
            whileInView = {{y:0}}
            transition= {{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}&nbsp;</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
  return (
    <div className='my-44 lg:my-30 md:my-25 sm:my-20'>
        <h2 className='font-bold text-6xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mg-16'>Education</h2>
        <div ref={ref} className='w-[75] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details type = "Bachelor of Science" time="2012-2015" place = "Delhi University" info = "Delhi University's B.Sc department offers a wide range of science specializations, providing a rigorous curriculum with theoretical and practical aspects of study. Graduates have opportunities for higher studies, research, and employment in various industries, research organizations, and educational institutions."/>

                <Details type = "Masters of Physics" time="2015-2017" place = "Delhi University" info = "Delhi University's B.Sc department offers a wide range of science specializations, providing a rigorous curriculum with theoretical and practical aspects of study. Graduates have opportunities for higher studies, research, and employment in various industries, research organizations, and educational institutions."/>
            </ul>
        </div>
    </div>
  )
}

export default Education