// Step 1: Import your component
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Nav from "./components/nav"
import MobileNav from "./components/mobilenav"
import Footer from "./components/footer"

import "../styles/about.scss"

import honesty from "../assets/SVG/honesty.svg";
import integrity from "../assets/SVG/integrity.svg";
import proff from "../assets/SVG/proff.svg";
import respect from "../assets/SVG/respect.svg";
import teamwork from "../assets/SVG/teamwork.svg";


// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About</title>
      <div className="about-header">
        
        <Nav/>
        <MobileNav/>
        
        <h1>About Us</h1>
        <h2>Welcome to The Gabs Car Rental</h2>

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
      <div className="content">
      <p>The Gabs Car Rental is a fast growing car rental, travel
           and tour agency in Zimbabwe that aims at best serving 
           value-conscious customers for all their car rental 
           decisions. <br /> <br />
        With four years in operation, we have served different people
         and created quite a number of connections that to date are
          our valued customers, all due to the professionalism and
           quality service we exhibit 
        We go beyond car hires and rental. <br /> <br /> we intentionally connect 
        with each customers and make every hire a memorable one.
        </p>
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

        <div className="boxes">
          <div className="box">
            <img src={integrity} alt="self drive svg" />
            <h2>Integrity</h2>
            <p>We are responsible, trustworthy, patient and flexible enough 
              to serve our customers</p>
          </div>

          <div className="box">
            <img src={honesty} alt="self drive svg" />
            <h2>Honesty</h2>
            <p>what we say is what we do, and quality service is our promise to you</p>
          </div>

          <div className="box">
            <img src={respect} alt="self drive svg" />
            <h2>Respect</h2>
            <p>mutual respectful relationships have allowed us to keep our customers to date</p>
          </div>

        </div>

        <div className="boxes">
        <div className="box">
            <img src={teamwork} alt="self drive svg" />
            <h2>Teamwork</h2>
            <p>we have a team of professional individuals that do all it takes to meet your needs</p>
          </div>

          <div className="box">
            <img src={proff} alt="self drive svg" />
            <h2>Professionalism</h2>
            <p>this is the soul of our business</p>
          </div>
        </div>
          
      </div>
      <Footer/>
    </main>
  )
}
// Step 3: Export your component
export default AboutPage