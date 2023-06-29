import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-light dark:xs:bg-dark xs:text-dark xs:rounded-none xs:py-0 xs:px-0 xs:dark:text-light xs:font-bold' 
            whileHover = {{scale:1.05}}
            initial = {{x:0,y:0}}
            whileInView = {{x:x, y:y, transition: {duration: 1.5}}}
            // transition = {{ duration: 1.5}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-6xl mt-44 w-full text-center md:text-5xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2' 
                whileHover = {{scale:1.05}}
            >
                Astronomy
            </motion.div>
            <Skill name="Numerical Simulation" x = "25vw" y = "10vw"/>
            <Skill name="Fluid Dynamics" x = "-10vw" y = "-15vw" />
            <Skill name="Fotron" x = "-13vw" y = "10vw" />
            <Skill name="Python" x = "-23vw" y = "5vw" />
            <Skill name="C" x = "23vw" y = "-15vw" />
            
        </div>
    </>
  )
}

export default Skills