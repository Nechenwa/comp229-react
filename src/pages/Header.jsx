import React from 'react'

function Header() {
  return (
    <header>
      <div>
        <img src='../assets/neche-logo.png' alt='Logo'/>
      </div>
      <nav>
        <a href='/about'>About</a>
        <a href='/projects'>Projects</a>
        <a href='/services'>Services</a>
        <a href='/contact'>Contact</a>
      </nav>
    </header>
  )
}

export default Header
