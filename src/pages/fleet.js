// Step 1: Import your component
import * as React from 'react'


import Nav from './components/nav'
import MobileNav from './components/mobilenav'
//import car from "../images/6.png"

import FuelSaver from "./components/fuelSaver";

import "../styles/fleet.scss"
import Sedan1 from './components/sedan1';
import Sedan2 from './components/sedan2';
import Suv1 from './components/suv1';
import Suv2 from './components/suv2';
import Trucks from './components/trucks';
import Bus from './components/bus';

import Footer from './components/footer';
// Step 2: Define your component
const FleetPage = () => {
  return (
    <main>
      <title>Fleet</title>
      <div className="about-header fleet-header">
        <Nav/>
        <MobileNav/>
        
        <h1>Our Fleet</h1>
        <h2>We have just what you need</h2>
      </div>
      <div className="fuel-savers">
        <h2>Fuel Savers</h2>
  
        <FuelSaver/>
      </div>

      <div className="fuel-savers other">
        <h2>Sedan Category 1</h2>
  
        <Sedan1/>
      </div>

      <div className="fuel-savers other">
        <h2>Sedan Category 2</h2>
  
        <Sedan2 />
      </div>

      <div className="fuel-savers other">
        <h2>SUV Category 1</h2>
  
        <Suv1 />
      </div>

      <div className="fuel-savers other">
        <h2>SUV Category 2</h2>
  
        <Suv2 />
      </div>

      <div className="fuel-savers other">
        <h2>Trucks and double cabs</h2>
  
        <Trucks />
      </div>

      <div className="fuel-savers other">
        <h2>Mini buses</h2>
  
        <Bus/>
      </div>
      
      <Footer/>
    </main>
  )
} 
// Step 3: Export your component
export default FleetPage