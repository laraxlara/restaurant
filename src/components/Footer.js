import { Link } from 'gatsby'
import React from 'react'

import lc from '../images/laracelic.gif'

import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <footer>
            <div className='footer-nav'>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <img src={lc} alt='' />
                <Link to='/contact'>CONTACT</Link>
                <Link to='/menu'>MENU</Link>
            </div>
        </footer>
      
    </div>
  )
}

export default Footer
