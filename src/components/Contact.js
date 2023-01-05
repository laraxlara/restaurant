import React from 'react'

import '../styles/Contact.css'

const Contact = () => {
  return (
    <div>
        <div className='contact-container'>
            <div className='contact-wrapper'>
                <div className='contacts'>
                    <div className='contacts-row'>
                        <div className='contact-one'><a href='/'>Get in touch via instagram</a></div>
                        <div className='contact-two'><a href='/'>Get in touch via facebook</a></div>
                    </div>
                    <div className='contacts-row'>
                        <div className='contact-three'><a href='/'>Get in touch via linkedIn</a></div>
                        <div className='contact-four'><a href='/'>Get in touch via email</a></div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Contact
