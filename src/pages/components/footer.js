import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../../styles/footer.scss"

import call from "../../assets/call.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import whatsApp from "../../assets/whatsApp.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";

const Footer = () => {
    return(
        <footer>
            <div className="top-footer">
                <h1>get in touch</h1>
            
                <div className="flex-container">
                    <div className="contacts">
                        <div className="contact">
                            <img src={email} alt="email svg" />
                            <span>info@thegabscarrental.co.zw</span>
                        </div>
                        <div className="contact">
                            <img src={call} alt="call svg" />
                            <span>+263 716 281 777</span>
                        </div>
                        <div className="contact">
                            <img src={phone} alt="phone svg" />
                            <span>+263 772 623 410</span>
                        </div>
                        <div className="contact">
                            <img src={whatsApp} alt="whatsApp svg" />
                            <span>+263 776 204 234</span>
                        </div>
                        <div className="circles">
                            <div className="circle">
                                <Link to="/"><img src={facebook} alt="facebook svg" /></Link>
                            </div>
                            <div className="circle">
                                <Link to="/"><img src={instagram} alt="instagram svg" /></Link>
                            </div>
                            <div className="circle">
                                <Link to="/"><img src={twitter} alt="twitter svg" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="links">
                        <Link to="/">home</Link>
                        <Link to="/about">about</Link>
                        <Link to="/fleet">fleet</Link>
                        <Link to="/services">services</Link>
                        <Link to="/contact">contact</Link>
                    </div>
                    <div className="map">
                        <StaticImage src="../../images/map.png"/>

                    </div>
                </div>

            


            </div>

            <div className="bottom-footer">Copyright © 2021 The Gabs Car Rental</div>

        </footer>
        
    )
}

export default Footer