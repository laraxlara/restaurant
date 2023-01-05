import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Contact from "../components/Contact"

import portret from '../images/portret.jpg'
import dev from '../images/dev.jpg'
import webdesign from '../images/webdesign.jpg'
import seo from '../images/google.jpg'

import * as styles from "../styles/index.module.css"



const IndexPage = () => (
  <Layout>
      <div className={styles.homePageHeader}>
        <Header />
      </div>

    <section className={styles.aboutSection}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>
          <h5>Lorem Ipsum Doloret Sit Amet</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas sit amet neque a erat dapibus accumsan vitae sit amet odio. Vivamus interdum nec libero nec elementum. <br /> Donec tincidunt tellus eu neque molestie, ac condimentum odio molestie.<br />  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pharetra accumsan massa vitae mattis. Etiam egestas turpis ut fermentum fringilla.</p>
          <div>
            <button class="btn glass">Read More</button>
          </div>
        </div>
        <div className={styles.aboutImage}>
          <img src={portret} alt='/' />
        </div>

      </div>
    </section>

    <section className={styles.servicesSection}>
      <div className={styles.servicesWrapper}>

        <div className={styles.card}>

          <div className={styles.cardImageBox}>
            <img src={dev} alt='/' />
          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button class="btn glass">Read More</button>
            </div>
          </div>
        </div>

        <div className={styles.card}>

          <div className={styles.cardImageBox}>
            <img src={webdesign} alt='/' />
          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button class="btn glass">Read More</button>
            </div>
          </div>
        </div>

        <div className={styles.card}>

          <div className={styles.cardImageBox}>
            <img src={seo} alt='/' />
          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button class="btn glass">Read More</button>
            </div>
          </div>
        </div>


      </div>
    </section>
    <section className={styles.contactSection}>
      <Contact />
    </section>
      
  </Layout>
)

export const Head = () => <Seo title="Home Page" />

export default IndexPage
