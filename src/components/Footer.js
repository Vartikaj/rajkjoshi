//rafc: for basic structure of the component...
import React from 'react'
import { Layout } from './Layout'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark text-lg font-medium text-dark dark:border-light bg-light dark:bg-dark'>
            <Layout className='!py-2 flex items-center justify-between dark:text-light'>
                <span className='text-0.5xl'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            </Layout>
    </footer>
  )
}
