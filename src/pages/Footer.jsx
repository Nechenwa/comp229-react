import React from 'react'
import { useLocation } from 'react-router-dom';

function Footer() {
  const paths = [
    { pathName: "about", path: '/about' },
    { pathName: "projects", path: '/projects' },
    { pathName: "services", path: '/services' },
    { pathName: "contact", path: '/contact' },
  ]
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer className='h-[25%] w-[100%] pt-5 bg-skyBlue text-center'>
      <div className='flex justify-evenly'>
        <div>
          <nav className='flex flex-col gap-y-2'>
            {paths.map((path, index) => (
              <div key={index}>
                <a href={path.path} className={pathname === path.path ? "border-b-[1px] border-darkBlue text-darkBlue capitalize" : "capitalize "}>{path.pathName}</a>
              </div>
            ))}
          </nav>
        </div>
        <div>
          <h1>Subscribe to my Newsletter</h1>
          <div className='flex gap-x-5 items-center'>
            <input type='text' placeholder='Message' className='h-[40px] rounded-md bg-white text-darkBlue pl-2 focus:border-[1px] border-darkBlue' />
            <button className='border-[#fff]'>Subscribe</button>
          </div>
        </div>
      </div>
      <p className='text-[12px] text-gray-600'>Copyright &copy; {year}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
