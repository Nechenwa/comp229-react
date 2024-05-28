import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div>
        <div>
          <nav>
            <a href='/about'>About</a>
            <a href='/projects'>Projects</a>
            <a href='/services'>Services</a>
            <a href='/contact'>Contact</a>
          </nav>
        </div>
        <div>
          <h1>Subscribe to my Newsletter</h1>
          <div>
            <input type='text' />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <p>Copyright &copy; {year}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
