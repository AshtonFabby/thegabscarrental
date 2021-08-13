// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

import { StaticImage } from "gatsby-plugin-image"

import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/styles.scss"
import "../styles/mobilenav.scss"
import 'swiper/swiper.scss';

import SwiperCore, {Autoplay,Pagination,Navigation } from 'swiper/core';

//importing components
import Nav from "./components/nav"
import MobileNav from "./components/mobilenav"
import call from "../assets/call.svg";
import self from "../assets/self-drive.svg";
import airport from "../assets/airport.svg";
import chauffeur from "../assets/chauffeur-drive.svg";
import shuttle from "../assets/shuttle.svg";
import Footer from './components/footer';

//init swiper
SwiperCore.use([Autoplay,Pagination,Navigation]);


// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>

       
      <div className="top-header">
        <Nav/>
        <MobileNav/>
        <div className="content">
          <div className="left">
          <h2>Flexible, accessible, reliable </h2>
          <h1>Endless options to meet your needs</h1>
          <Link to ="/">
            <button>
              <img src={call} alt="burger svg"/>
              call your ride
            </button>
          </Link>
          </div>
          <StaticImage className="blob" src="../images/blob-image.png"/>
        </div>
      </div>
      <div className="mainContainer">
        <div className="fleet">
          <h1 className="headings"> Our fleet </h1>

          <Swiper loop={true} spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }} pagination={{
              "clickable": true
          }} navigation={true} className="mySwiper"> 
          <SwiperSlide>
            <StaticImage src="../images/6.png"/>
            <h2>Fuel savers</h2>
            <p>Honda Fit, Toyota Vitz, Honda Fit Aria, Mazda Demio, Toyota Passo</p>
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage src="../images/sedan.png"/>
            <h2>Sedan</h2>
            <p>Toyota  Belta, Toyota Allion, Toyota Axio, Toyota mark x, 
              Toyota Premio, Toyota Corolla, Nissan Blue Bird</p>
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage src="../images/suv.png"/>
            <h2>SUV</h2>
            <p>Nissan Xtrail, Honda CRV, Hyundai Tucson, Rav 4, Nissan Qushqai</p>
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage src="../images/truck.png"/>
            <h2>Trucks and double cabs</h2>
            <p>Toyota Hilux, Nissan Np300, Nissan Navvara , Isusu kbs, VW Amarok</p>
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage src="../images/bus.png"/>
            <h2>Mini buses</h2>
            <p>9 seater, 12 seater, 15 seater, 22 seater, 36 seater, 50 seater</p>
          </SwiperSlide>

          </Swiper>
          <Link to="/fleet">
          <button>view all vihicles</button>
          </Link>
          <div className="boxes">
            <div className="box">
              
              <StaticImage src="../images/toyota.png" alt="a toyota"/>
            </div>
            <div className="box">
              
              <StaticImage src="../images/mazda.png" alt="a mazda"/>
            </div>
            <div className="box">
              
              <StaticImage src="../images/bmw.png" alt="a bmw"/>
            </div>
            <div className="box">
              
              <StaticImage src="../images/honda.png" alt="a honda"/>
            </div>
            <div className="box">
              
              <StaticImage src="../images/isuzu.png" alt="a isuzu"/>
            </div>
            <div className="box">
              
              <StaticImage src="../images/nissan.png" alt="a nissan"/>
            </div>
          </div>

        </div>

        <div className="services">

          <h1>Services</h1>

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
              <img src={shuttle} alt="shuttle svg" />
              <p>self Drive Rental</p>
            </div>

          </div>

        </div>
      </div>
      <div className="our-mission">
          <h1> Our Mission</h1>
          <p>To provide excellent travel and tour hospitality and car rental services
             through integration with our esteemed stakeholders who
              are our internal and external clients, employees, shareholders
              , local authorities and financial sectors.</p>

          <Link to="/about" >
          <button>Learn more</button>
          </Link>

        </div>
        <Footer/>
  
    </main>
  )
}
// Step 3: Export your component
export default IndexPage