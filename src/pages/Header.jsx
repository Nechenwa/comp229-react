import React from 'react'
import { useLocation } from 'react-router-dom'

function Header() {
  const paths = [
    { pathName: "home", path: '/' },
    { pathName: "about", path: '/about' },
    { pathName: "projects", path: '/projects' },
    { pathName: "services", path: '/services' },
    { pathName: "contact", path: '/contact' },
  ]
  const { pathname } = useLocation();
  return (
    <header className='flex h-[10%] w-[100%] justify-between px-10 py-5 bg-skyBlue'>
      <div className='w-[30%]'>
        <a href='/' className='cursor-pointer'>
          <img src='../assets/neche-logo.png' alt='Logo' className='w-[70px]' />
        </a>
      </div>
      <nav className='w-[30%] flex items-center justify-between'>
        {paths.map((path, index) => (
          <div key={index}>
            <a href={path.path} className={pathname === path.path ? "border-b-[1px] border-darkBlue text-darkBlue capitalize" : "capitalize "}>{path.pathName}</a>
          </div>
        ))}
      </nav>
    </header>
  )
}

export default Header
