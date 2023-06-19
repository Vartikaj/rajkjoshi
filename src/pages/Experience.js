import React from 'react'

const Details = ({position, company, companyLink, time, address, work}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 '>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
  return (
    <div className='my-44'>
        <h2 className='font-bold text-6xl mb-20 w-full text-center'>Experience</h2>
        <div className='w-[75] mx-auto relative'>
            <div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position = "Senior Research Fellow" company = "Aryabhatta Research Institute of Observational Sciences" companyLink= "https://www.aries.res.in" time="2018 | Present" address = "Manora Peak, Nainital, 263001" work = "Numerical Simulation of Astrophysical Flows around Compact Objects"/>
            </ul>
        </div>
    </div>
  )
}

export default Experience