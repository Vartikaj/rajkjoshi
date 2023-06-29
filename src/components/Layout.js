import React from 'react'

export const Layout = ({children, className=""}) => {
  return (
    <div className={`inline-block w-full h-full bg-light z-0 p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 pb-0 ${className}`}>
        {children}
    </div>
  )
}
