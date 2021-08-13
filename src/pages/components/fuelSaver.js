import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import "../../styles/fuelsaver.scss"

const FuelSaver=()=> {
   
        return (
            <div className="cards">
              <div className="card">
                <StaticImage src="../../images/fuelsaver/honda-fit.png" alt="Honda Fit" />
                <h3>Honda Fit</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/fuelsaver/toyotai-vits.png" alt="Toyota Vitz" />
                <h3>Toyota Vitz</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/fuelsaver/honda-fit-aria.png" alt="Honda Fit Aria" />
                <h3>Honda Fit Aria</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/fuelsaver/mazda-demio.png" alt="Mazda Demio" />
                <h3>Mazda Demio</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/fuelsaver/toyota-passo.png" alt="Toyota Passo" />
                <h3>Toyota Passo</h3>
              </div>
         
            </div>
        );
    
}

export default FuelSaver;