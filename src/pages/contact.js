// Step 1: Import your component
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Nav from './components/nav'
import MobileNav from './components/mobilenav'

// import "../styles/about.scss"
import "../styles/contact.scss"
import Footer from './components/footer'

// Step 2: Define your component
const ContactPage = () => {
  return (
    <main>
      <title>Contact</title>
      <div className="about-header contact-header">
        <Nav/>
        <MobileNav/>
        
        <h1>Contact Us</h1>
      </div>

      <div className="contact-form">
        <StaticImage src="../images/emailImage.png"/>
        <form action="">
          <h1>send us a messege</h1>
          <input type="text" name="name" id="name" placeholder="Your Name" />
          <input type="email" name="email" id="email" placeholder="Your Email" />
          <textarea name="messege" id="messege" rows="5" placeholder="Your messege"></textarea>
          <button type="submit">submit</button>
        </form>
      </div>

      <Footer/>
    </main>
  )
}
// Step 3: Export your component
export default ContactPage