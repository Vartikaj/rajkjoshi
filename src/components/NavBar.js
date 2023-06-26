import Logo from './Logo';
import Link from 'next/link'
import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, MoonIcon, SunIcon} from './Icons';
import { useRouter } from 'next/router';
import React from 'react';
import {motion} from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

/**
 * 
 * CREATE SUCH COMPONENT FOR ADDING THE CUSTOM CLASS TO THE LINKS
 */
const CoustomLink = ({href, title, className}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group` } >
            {title}
            <span className={`h-[1px] inline-block left-0 -bottom-0 bg-dark absolute group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}
const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
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
                <GithubIcon />
            </motion.a>
            <motion.a href="https://linkedin.com" target={"_blank"} className="w-6 mx-3" whileHover = {{
                y:-2
            }} whileTap ={{
                scale: 0.9
            }}>
                <LinkedInIcon />
            </motion.a>
            <motion.a href="https://pinterest.com" target={"_blank"} className="w-6 mx-3" whileHover = {{
                y:-2
            }} whileTap ={{
                scale: 0.9
            }}>
                <PinterestIcon />
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

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
        </div>
    </header>
  )
}

export default NavBar