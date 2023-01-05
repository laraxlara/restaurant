import React, { useState } from 'react'
import { Link } from 'gatsby'
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import '../styles/Navbar.css'

const Navbar = () => {
  const [sidebar, setSiderbar] = useState(false)

  const showSidebar = () => setSiderbar(!sidebar)

  return (
    <div className='navbar-container'>
          <div className='home-menu'>
              <Link className='contact-link' to='/contact'>Contact Us</Link>
              <div className='menu-link'><HiMenu onClick={showSidebar} /></div>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <div className='menu-close' onClick={showSidebar}><AiOutlineClose /></div>
              <div className='nav-list'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
                <Link className='nav-link' to='/menu'>Menu</Link>
              </div>
          </nav>
    </div>
  )
}

export default Navbar