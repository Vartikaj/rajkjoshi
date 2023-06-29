//rafce
import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/raj.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000});
    const isInView = useInView(ref);

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
           if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
           }
        })
    },[springValue, value])


    return <span ref = {ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Rajkjoshi | About</title>
            <meta name = "description" content = "Discover the mesmerizing convergence of nature and the cosmos in AstroMoors, a stunning collection of astrophotography capturing the ethereal beauty of celestial objects against the backdrop of serene moorland landscapes."></meta>
            <meta name = "keyword" content = "Raj Kishor Joshi, Raj, Joshi, astrophotography, celestial objects, moorland landscapes, convergence, nature, cosmos, ethereal beauty"></meta>
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16 pb-16'>
                <AnimatedText text = "A Journey into Astrophysics" className='!text-6xl mb-16 lg:!text-5xl sm:!text-4xl' />
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='font-medium md:text-[15px] md:text-justify'>Welcome to my website, where we embark on an exhilarating journey into the fascinating realm of astrophysics. I am deeply passionate about unraveling the mysteries of the universe, seeking to understand the fundamental principles that govern celestial objects and the workings of the cosmos. With a relentless curiosity, I delve into the intricacies of black holes, pulsars, dark matter, and the origins of the universe itself. Through my research, I aim to shed light on the enigmatic forces and phenomena that shape our cosmic landscape. Join me as we explore the forefront of astrophysics, venturing into uncharted territories and unlocking the secrets that lie beyond the reaches of our imagination. Together, let delve into the depths of the universe and embark on an awe-inspiring journey of discovery.</p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={profilePic} alt="Rajkjoshi" className='w-full h-auto rounded-2xl'
                        priority
                        sizes='(max-width:768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:col-span-8 md:order-3 md:flex-row'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold xl:text-6xl lg:text-5xl md:text-4xl'>
                                <AnimatedNumbers value= {7} />
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>First Author Articles</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold xl:text-6xl lg:text-5xl md:text-4xl'>
                            <AnimatedNumbers value= {10} />
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Total Articles</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold xl:text-6xl lg:text-5xl md:text-4xl'>
                            <AnimatedNumbers value= {6} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of exeperience</h2>
                        </div>
                    </div>
                </div>
                <Skills />

                <Experience />
                <Education />

            </Layout>
            
        </main>
    </>
  )
}

export default about