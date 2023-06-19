import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute' 
            whileHover = {{scale:1.05}}
            initial = {{x:0,y:0}}
            whileInView = {{x:x, y:y}}
            transition = {{ duration: 1.5}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-6xl mt-44 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer' 
                whileHover = {{scale:1.05}}
            >
                Astronomy
            </motion.div>
            <Skill name="Numerical Simulation" x = "20vw" y = "2vw"/>
            <Skill name="Fluid Dynamics" x = "-10vw" y = "-15vw" />
            <Skill name="Fotron" x = "-13vw" y = "10vw" />
            <Skill name="Python" x = "-23vw" y = "5vw" />
            <Skill name="C" x = "23vw" y = "-15vw" />
            
        </div>
    </>
  )
}

export default Skills