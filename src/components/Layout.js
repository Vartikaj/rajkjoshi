import React from 'react'

export const Layout = ({children, className=""}) => {
  return (
    <div className={`inline-block w-full h-full bg-light z-0 p-32 dark:bg-dark pb-0 ${className}`}>
        {children}
    </div>
  )
}
