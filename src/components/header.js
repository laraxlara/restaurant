import * as React from "react"
import background from '../images/background.mp4'
import '../styles/header.css'

const Header = () => (
  <header>
    <section className="showcase">
      <video src={background} muted loop autoPlay />

      <div class="header-greeting">
        <h1>Hello!      
          <div class="scroller">
            <span>
              Welcome to our family!<br/>
              Enjoy your stay!<br/>
              You will never wish to eat someplace else!
            </span>
          </div>
        </h1>
      </div>
    </section>
  </header>
)

export default Header
