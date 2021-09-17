import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";


import burger from "../../assets/burger.svg";


const MobileNav = () => {
    const [show,setShow]=useState(false)

    return(
        <nav>
            <div className="mobileNav">
                <div className="toggler">
                    <div className="logo">
                        
                        <Link to="/">
                            {/* <span className = "top">TheGabs</span><br/>
                            <span className = "bottom">CarRental</span> */}
                            <StaticImage className="logo-img" src="../../images/logo.jpg" alt="the gabs logo"/>
                        </Link>
                    </div>
                    <button className="hamburger" onClick={()=>setShow(!show)}>
                        <img src={burger} alt="burger svg"/>
                    </button>
                    
                </div>
                {
                    show?<div className="innerNav">
                    <div className="flex-container">
                        <Link to="/">home</Link>
                        <Link to="/services">our services</Link>
                        <Link to="/about">about us</Link>
                        <Link to="/fleet">our fleet</Link>
                        <Link to="/contact">contact us</Link>
                    </div>
            </div>:null
                }
                
            </div>
            
        </nav>

    )
    }
export default MobileNav