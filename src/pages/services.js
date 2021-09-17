// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
// Step 2: Define your component

import Nav from './components/nav'
import MobileNav from './components/mobilenav'
import Footer from './components/footer'
import '../styles/services.scss'

// import self from "../assets/self-drive.svg";
// import airport from "../assets/airport.svg";
// import chauffeur from "../assets/chauffeur-drive.svg";
// import change from "../assets/change.svg";
// import importcar from "../assets/import.svg";
// import registration from "../assets/registration.svg";
import quote from "../assets/quote.svg";

const ServicesPage = () => {
  return (  
    <main>
      <title>Services</title>
      <div className="about-header services-header">
        <Nav/>
        <MobileNav/>
        
        <h1>Services</h1>
        <h2>We go beyond car hire</h2>
      </div>
      <div className="content">
        <p>The Gabs Car Rental offers different rental services that 
          best suit your needs. We are 
          <b> flexible, accessible and reliable.</b> 
        </p>
        <br />
        <p>
        We are dedicated to serve our customers in the best way 
        possible, assisting them in all, while developing mutual 
        connections that make each hire a memorable one. 
        </p>
      </div>

      <div className="services">

          <div className="boxes">
            <div className ="box">
              <StaticImage src="../images/self-drive.jpg" alt="self drive svg" />
              <h2>self Drive Rental</h2>
              <p>
                We give you the freedom to be your own boss <br />
                Drive yourself around with no limitations. <br />
                Enjoy the ride with the privacy and convenience you desire

              </p>
            </div>

            <div className ="box">
              <StaticImage src="../images/chauffeur.jpg" alt="chauffer drive svg" />
              <h2>Chauffeur Driven Rentals</h2>
              <p>
              Are you tired? <br /
              >Or simply don’t feel like driving? <br />
               Take time off the steering, sit back and enjoy your 
               ride with our experienced chauffeurs.
               <b className="blue"> Zero deposit needed</b>
              </p>
            </div>

            <div className ="box">
              <StaticImage src="../images/transfer.jpg" alt="Airport Transfers svg" />
              <h2>Airport Transfers</h2>
                <p>Book a local driver with us and let us introduce 
                  you to your next destination free of hustle. <br />
                  Whether you leaving the airport or getting there, 
                  our pick-ups are always on time. 
                </p>
            </div>

            <div className ="box">
              <StaticImage src="../images/change.jpg" alt="change ownership svg" />
              <h2>Car importation registration & change of ownership </h2>
              <p>We can assist you with the bureaucracy involved in 
                these processes and all you have to do is wait to 
                enjoy your car. </p>
            </div>

            <div className ="box">
              <StaticImage src="../images/wedding.jpg" alt="car import svg" />
              <h2>Wedding vehicles </h2>
              <p>Your day, your way
                From classic to vintage cars, you get to pick. 
                Let us help you eternalize your moment 
              </p>
            </div>

            <div className ="box">
              <StaticImage src="../images/travel.jpg" alt="car registration svg" />
              <h2>Travel and Tours</h2>
              <p>
                The best of travel is here! Discover a completely new world with us <br /> 
                We have the best tours packages and more.

              </p>
            </div>

          </div>

        </div>
        <div className="testimonial">
          <div className="box">
            <img id="top" src={quote} alt="quote svg" />
            <p>Taking a shuttle or even paying for a taxi to a rental office that's a 
              few miles away from the airport can mean a lower rate - 50 
              percent lower is common - for the same car, from the same 
              company, for the same length of time. </p>
            <p id="small">~Jean Chatzky</p>
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