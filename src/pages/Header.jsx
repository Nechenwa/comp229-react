import React from 'react'

function Header() {
  return (
    <header className='flex h-[10%] w-[100%] justify-between px-10 py-5 bg-skyBlue'>
      <div className='w-[30%]'>
        <a href='/' className='cursor-pointer'>
          <img src='../assets/neche-logo.png' alt='Logo' className='w-[70px]' />
        </a>
      </div>
      <nav className='w-[30%] flex items-center justify-between'>
        <a href='/about'>About</a>
        <a href='/projects'>Projects</a>
        <a href='/services'>Services</a>
        <a href='/contact'>Contact</a>
      </nav>
    </header>
  )
}

export default Header
