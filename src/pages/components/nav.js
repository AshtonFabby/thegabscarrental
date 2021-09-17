import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Nav = () => {
    return(
        <nav>
    
        <div className="nav">
            <div className="logo">
                {/* <Link to="/">
                    <span className = "top">TheGabs</span><br />
                    <span className = "bottom">CarRental</span>
                </Link> */}
                <StaticImage className="logo-img" src="../../images/logo.jpg" alt="the gabs logo"/>
            </div>
            <div className="innerNav">
                <Link to="/">home</Link>
                <Link to="/about">about us</Link>
                <Link to="/services">our services</Link>
                <Link to="/fleet">our fleet</Link>
                <Link to="/contact">contact us</Link>
            </div>
            <div className="button">
                <Link to="/fleet">
                    <button>
                        find your car
                    </button>
                </Link>
            </div>
            
        </div>
        

    </nav>

    )
    }
export default Nav