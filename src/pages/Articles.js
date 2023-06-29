import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { AnimatedText } from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon, ResearchGate } from '@/components/Icons'
import project1 from "../../public/images/projects/The-contours-of-the-Lorentz-factor-for-Models-C1-C4.png";


const FeaturedProject = ({type, title, summary, img, link}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5m]' />
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className='w-full h-auto'
                    priority
                    sizes='(max-width:768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl xs:text-base'>
                    {type}
                </span>
                <Link className='hover:underline underline-offset-2
                ' href={link} target="_blank">
                    <h2 className='my-2 w-full text-left  font-bold sm:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target="_blank" className='w-10 mr-5'><ResearchGate /></Link>
                    <Link href={link} className='flex items-center bg-dark text-light p-1.5 px-5 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark hover:bg-light hover:text-dark mr-3 dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light sm:px-4 sm:text-base' target="_blank">Visit</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link}) => {
    return (

        <article className='w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:border-light dark:bg-dark xs:p-4'>

            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'
                    priority
                    sizes='(max-width:768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-1xl lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link className='hover:underline underline-offset-2
                ' href={link} target="_blank">
                    <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                
                <div className='w-full mt-2 flex items-center justify-between'>
                    
                    <Link href={link} className="underline text-lg font-semibold md:text-base">Visit</Link>
                    <Link href={link} target="_blank" className='w-8 md:w-6'><ResearchGate /></Link>
                </div>
            </div>
        </article>
    )
}

const Articles = () => {
  return (
    <>
        <Head>
            <title>Rajkloshi | Articles</title>
            <meta name="description" content='any description' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light dark:bg-dark'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='!text-6xl mb-16 lg:!text-5xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <div className='grid grid-col-12 gap-24 gap-y-22 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        
                        <FeaturedProject
                        title="The Morphology and Dynamics of Relativistic Jets with Relativistic Equation of State"
                        img = {project1}
                        summary = "We study the effect of plasma composition on the dynamics and morphology of relativistic astrophysical jets. Our work is based on a relativistic total variation diminishing simulation code. We use a relativistic equation of state in the simulation code that accounts for the thermodynamics of a multispecies plasma, which is a mixture of electrons, p..."
                        link = "https://www.researchgate.net/publication/370380473_The_Morphology_and_Dynamics_of_Relativistic_Jets_with_Relativistic_Equation_of_State"
                        type = "The Astrophysical Journal"
                        github = "/" />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Shocks in Radiatively Driven Time-dependent, Relativistic Jets around Black Holes"
                        img = {project1}
                        link = "https://www.researchgate.net/publication/361843074_Shocks_in_Radiatively_Driven_Time-dependent_Relativistic_Jets_around_Black_Holes"
                        type = "The Astrophysical Journal"
                        github = "/" />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Shocks in Radiatively Driven Time-dependent, Relativistic Jets around Black Holes"
                        img = {project1}
                        link = "https://www.researchgate.net/publication/361843074_Shocks_in_Radiatively_Driven_Time-dependent_Relativistic_Jets_around_Black_Holes"
                        type = "The Astrophysical Journal"
                        github = "/" />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject
                        title="The Morphology and Dynamics of Relativistic Jets with Relativistic Equation of State"
                        img = {project1}
                        summary = "We study the effect of plasma composition on the dynamics and morphology of relativistic astrophysical jets. Our work is based on a relativistic total variation diminishing simulation code. We use a relativistic equation of state in the simulation code that accounts for the thermodynamics of a multispecies plasma, which is a mixture of electrons, p..."
                        link = "https://www.researchgate.net/publication/370380473_The_Morphology_and_Dynamics_of_Relativistic_Jets_with_Relativistic_Equation_of_State"
                        type = "The Astrophysical Journal"
                        github = "/" />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Shocks in Radiatively Driven Time-dependent, Relativistic Jets around Black Holes"
                        img = {project1}
                        link = "https://www.researchgate.net/publication/361843074_Shocks_in_Radiatively_Driven_Time-dependent_Relativistic_Jets_around_Black_Holes"
                        type = "The Astrophysical Journal"
                        github = "/" />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Shocks in Radiatively Driven Time-dependent, Relativistic Jets around Black Holes"
                        img = {project1}
                        link = "https://www.researchgate.net/publication/361843074_Shocks_in_Radiatively_Driven_Time-dependent_Relativistic_Jets_around_Black_Holes"
                        type = "The Astrophysical Journal"
                        github = "/" />
                    </div>
                    
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Articles