import React from 'react'

import Layout from '../components/layout'
import Contact from '../components/Contact'

import header from '../images/header.jpg'

import * as contactStyles from "../styles/contact.module.css"

const contact = () => {
  return (
    <Layout>        
        <div className={contactStyles.contactPageContainer}>
            <div className={contactStyles.contactPageWrapper}>

                <div className={contactStyles.contactPageHeader}>
                    <img src={header} alt='contact page' />
                </div>

                <div className={contactStyles.contactMessageContainer}>
                    <div className={contactStyles.contactMessageWrapper}>

                        <div className={contactStyles.contactMessage}>
                            <h6>Lorem Ipsum</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet neque a erat dapibus accumsan vitae sit amet odio. Vivamus interdum nec libero nec elementum. Donec tincidunt tellus eu neque molestie, ac condimentum odio molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pharetra accumsan massa vitae mattis. Etiam egestas turpis ut fermentum fringilla.</p>
                            <h1>Lorem ipsum dolor sit amet</h1>
                        </div>
                    </div>
                </div>

                <section>
                    <div>
                        <p></p>
                        <form className={contactStyles.contactForm}>
                        <div className="flex items-center justify-center p-12">
                            <div className="mx-auto w-full max-w-[550px]">
                                <form>
                                    <div className="mb-5">
                                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">Full Name</label>
                                        <input type="text" name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">Subject</label>
                                        <input type="text" name="subject" id="subject" placeholder="Enter your subject" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">Message</label>
                                        <textarea rows="6" name="message" id="message" placeholder="Type your message" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
                                    </div>
                                    <div>
                                        <button className="hover:shadow-form rounded-md bg-[#808080] py-3 px-8 text-base font-semibold text-white outline-none">SEND</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </form>
                    </div>
                </section>
                <Contact />
            </div>
        </div>
      
    </Layout>
  )
}

export default contact
