// Step 1: Import your component
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Nav from "./components/nav"
import MobileNav from "./components/mobilenav"
import Footer from "./components/footer"

import "../styles/about.scss"


// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About</title>
      <div className="about-header">
        
        <Nav/>
        <MobileNav/>
        
        <h1>About Us</h1>

      </div>
      <div className="vision boxes">
        <div className="box">
          <h1>Our vision</h1>
          <p>To be the most preferred choice in the 
            provision of travel and tours, hospitality 
            and car rental services</p>
        </div>
        <div className="box">
          <StaticImage src="../images/blob-image2.png" layout="fullWidth" />
        </div>

      </div>

      <div className="mission boxes">
        
        <div className="box">
        <StaticImage src="../images/blob-image3.png" layout="fullWidth" />
        </div>

        <div className="box">
          <h1>Our Mission</h1>
          <p>To provide excellent travel and tour 
            hospitality and car rental services through
             integration with our esteemed stakeholders
              who are our internal and external clients
              , employees, shareholders, local 
              authorities and financial sectors.</p>
        </div>

        

      </div>

      <div className="core-values">

      <h1>Core values</h1>

      <ol>
        <li>Integrity</li>
        <li>Honesty</li>
        <li>Respect</li>
        <li>Professionalism</li>
        <li>Teamwork</li>

      </ol>
          
      </div>
      <Footer/>
    </main>
  )
}
// Step 3: Export your component
export default AboutPage