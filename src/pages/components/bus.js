import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import "../../styles/fuelsaver.scss"

const Bus=()=> {
   
        return (
            <div className="cards">
              <div className="card">
                <StaticImage src="../../images/bus/9seater.png" alt="9 seater bus" />
                <h3>9 seater</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/bus/12seater.png" alt="12 seater" />
                <h3>12 seater</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/bus/15-seater.png" alt="15 seater" />
                <h3>15 seater</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/bus/22seater.png" alt="22 seater" />
                <h3>22 seater</h3>
              </div>
            </div>
        );
    
}

export default Bus;