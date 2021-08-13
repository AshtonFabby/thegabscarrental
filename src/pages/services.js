// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
// Step 2: Define your component

import Nav from './components/nav'
import MobileNav from './components/mobilenav'
import Footer from './components/footer'
import '../styles/services.scss'

import self from "../assets/self-drive.svg";
import airport from "../assets/airport.svg";
import chauffeur from "../assets/chauffeur-drive.svg";
import change from "../assets/change.svg";
import importcar from "../assets/import.svg";
import registration from "../assets/registration.svg";
import quote from "../assets/quote.svg";

const ServicesPage = () => {
  return (  
    <main>
      <title>Services</title>
      <div className="about-header services-header">
        <Nav/>
        <MobileNav/>
        
        <h1>Services</h1>
      </div>

      <div className="services">

          <div className="boxes">
            <div className ="box">
              <img src={self} alt="self drive svg" />
              <p>self Drive Rental</p>
            </div>

            <div className ="box">
              <img src={chauffeur} alt="chauffer drive svg" />
              <p>Chauffeur Driven Rentals</p>
            </div>

            <div className ="box">
              <img src={airport} alt="Airport Transfers svg" />
              <p>Airport Transfers</p>
            </div>

            <div className ="box">
              <img src={change} alt="change ownership svg" />
              <p>Change of car ownership </p>
            </div>

            <div className ="box">
              <img src={importcar} alt="car import svg" />
              <p>Car importations </p>
            </div>

            <div className ="box">
              <img src={registration} alt="car registration svg" />
              <p>Car registration  </p>
            </div>

          </div>

        </div>
        <div className="testimonial">
          <div className="box">
            <img id="top" src={quote} alt="quote svg" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Luctus pulvinar ac dis eget aenean. </p>
            <p id="small">~Lorem Ipsum</p>
            <Link to ="/fleet">
              <button>Get  Your Hire Today</button>
            </Link>

          </div>

          <div className="box">
            <StaticImage src="../images/businessman.png"/>
          </div>

        </div>

        <Footer/>
    </main>
  )
}
// Step 3: Export your component
export default ServicesPage