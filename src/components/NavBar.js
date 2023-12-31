import Logo from './Logo';
import Link from 'next/link'
import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, MoonIcon, SunIcon, ResearchGate, InstagramIcon} from './Icons';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {motion} from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

/**
 * 
 * CREATE SUCH COMPONENT FOR ADDING THE CUSTOM CLASS TO THE LINKS
 */
const CoustomLink = ({href, title, className}) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(href)
    }
    return(
        <button href={href} className={`${className} relative group` } onClick={handleClick} >
            {title}
            <span className={`h-[1px] inline-block left-0 -bottom-0 bg-dark absolute group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </button>
    )
}

const CoustomMobileLink = ({href, title, className= "", toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    }
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick} >
            {title}
            <span className={`h-[1px] inline-block left-0 -bottom-0 bg-light absolute group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

        <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
            <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className ={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className = {`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className="w-full flex justify-between items-center lg:hidden">
            <nav>
            <CoustomLink href="/" title="Home" className = "mr-4" />
            <CoustomLink href="/about" title="About" className = "mx-4" />
            {/* <CoustomLink href="/Papers" title="Papers" className = "mx-4" /> */}
            <CoustomLink href="/Articles" title="Articles" className = "ml-4" />
        </nav>
        
        <nav className = "flex items-center justify-center flex-wrap">
            <motion.a href="https://twitter.com" target={"_blank"} className="w-6 mr-3" whileHover = {{
                y:-2
            }} whileTap ={{
                scale: 0.9
            }}>
                <TwitterIcon />
            </motion.a>
            <motion.a href="https://github.com" target={"_blank"} className="w-6 mx-3" whileHover = {{
                y:-2
            }} whileTap ={{
                scale: 0.9
            }}>
                <InstagramIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/raj-kishor-joshi-324a1b208/" target={"_blank"} className="w-6 mx-3" whileHover = {{
                y:-2
            }} whileTap ={{
                scale: 0.9
            }}>
                <LinkedInIcon />
            </motion.a>
            <motion.a href="https://www.researchgate.net/profile/Raj-Joshi-14" target={"_blank"} className="w-6 mx-3 mr-4" whileHover = {{
                y:-2
            }} whileTap ={{
                scale: 0.9
            }}>
                <ResearchGate />
            </motion.a>

            <button 
                onClick = {() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}
                `}
            >
                {
                    mode === "dark" ?
                        <SunIcon className={"fill-dark"} />
                        : <MoonIcon className={"fill-light"} />
                }
            </button>
            {/* <a href="/" target={"_blank"} className="ml-2">
                <MoonIcon />
            </a> */}
        </nav>
        </div>
        { isOpen ? 
            <motion.div 
                initial = {{scale:0, opacity:0, x:"-50%", y:"-50%" }}
                animate = {{scale:1, opacity:1}}

            className="min-w-[70vw] flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 hidden lg:flex">
                <nav className = "flex items-center flex-col justify-center">
                <CoustomMobileLink href="/" title="Home" toggle={handleClick} />
                <CoustomMobileLink href="/about" title="About" toggle={handleClick} />
                {/* <CoustomMobileLink href="/Papers" title="Papers" className = "mx-4" toggle={handleClick} /> */}
                <CoustomMobileLink href="/Articles" title="Articles" toggle={handleClick} />
                </nav>
            
                <nav className = "flex items-center justify-center flex-wrap mt-2">
                    <motion.a href="https://twitter.com" target={"_blank"} className="w-6 mr-3 sm:mx-1 " whileHover = {{
                        y:-2
                    }} whileTap ={{
                        scale: 0.9
                    }}>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href="https://github.com" target={"_blank"} className="w-6 mx-3 sm:mx-1" whileHover = {{
                        y:-2
                    }} whileTap ={{
                        scale: 0.9
                    }}>
                        <InstagramIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/raj-kishor-joshi-324a1b208/" target={"_blank"} className="w-6 mx-3 sm:mx-1" whileHover = {{
                        y:-2
                    }} whileTap ={{
                        scale: 0.9
                    }}>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://www.researchgate.net/profile/Raj-Joshi-14" target={"_blank"} className="w-8 mx-3 sm:mx-1 mr-4 bg-light dark:bg-dark" whileHover = {{
                        y:-2
                    }} whileTap ={{
                        scale: 0.9
                    }}>
                        <ResearchGate />
                    </motion.a>

                <button 
                    onClick = {() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}
                    `}
                >
                    {
                        mode === "dark" ?
                            <SunIcon className={"fill-dark"} />
                            : <MoonIcon className={"fill-light"} />
                    }
                </button>
                {/* <a href="/" target={"_blank"} className="ml-2">
                    <MoonIcon />
                </a> */}
                </nav>
            </motion.div>
        :
            null}

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
        </div>
    </header>
  )
}

export default NavBar