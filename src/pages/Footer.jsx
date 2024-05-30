import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='h-[25%] w-[100%] pt-5 bg-skyBlue text-center'>
      <div className='flex justify-evenly'>
        <div>
          <nav className='flex flex-col gap-y-2'>
            <a href='/about'>About</a>
            <a href='/projects'>Projects</a>
            <a href='/services'>Services</a>
            <a href='/contact'>Contact</a>
          </nav>
        </div>
        <div>
          <h1>Subscribe to my Newsletter</h1>
          <div className='flex gap-x-5 items-center'>
            <input type='text' placeholder='message' className='h-[40px] rounded-md bg-white text-darkBlue pl-2 focus:border-[1px] border-darkBlue'/>
            <button className='border-[#fff]'>Subscribe</button>
          </div>
        </div>
      </div>
      <p className='text-[12px] text-gray-600'>Copyright &copy; {year}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
