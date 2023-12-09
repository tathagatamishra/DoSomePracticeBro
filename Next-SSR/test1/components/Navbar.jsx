import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <h1>Logo</h1>
        </div>

        <div className="container">
            <Link className='link' href='/'>Home</Link>
            <Link className='link' href='/about'>About</Link>
            <Link className='link' href='/contact'>Contact</Link>
        </div>
    </nav>
  )
}
