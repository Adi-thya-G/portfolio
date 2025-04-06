import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'

function Header() {
  return (
    <>
      <nav className='bg-transparent w-full flex fixed sm:justify-center z-50 mx-auto py-3 bg-gradient-to-r from-gray-100 to-gray-500 '>
        <div> 
          <div className='mx-auto px-20'>
            <ul className='flex gap-10'>
              <li>
              <a
            className='text-blue-600 text-xl active:underline  font-serif'
            href="#Home">Home</a>
              </li>
              <li>
              <a
            className='text-blue-600 text-xl active:underline  font-serif'
            href="#About">About</a>
              </li>
              <li>
              <a
            className='text-blue-600 text-xl active:underline  font-serif'
            href="#Course">Course</a>
              
              </li>
              <li>
              <a
            className='text-blue-600 text-xl active:underline  font-serif'
            href="#Project">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    
)
}

export default Header
