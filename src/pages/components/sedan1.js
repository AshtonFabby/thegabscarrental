import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import "../../styles/fuelsaver.scss"

const Sedan1=()=> {
   
        return (
            <div className="cards">
              <div className="card">
                <StaticImage src="../../images/sedan1/belta.png" alt="Toyota Belta" />
                <h3>Toyota Belta</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan1/allion.png" alt="Toyota Allion" />
                <h3>Toyota Allion</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan1/axio.png" alt="Toyota Axio" />
                <h3>Toyota Axio</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan1/markx.png" alt="Toyota mark x" />
                <h3>Toyota mark x</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan1/premo.png" alt="Toyota Premio" />
                <h3>Toyota Premio</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan1/corolla.png" alt="Toyota Corolla" />
                <h3>Toyota Corolla</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan1/nissan-blue-bird.png" alt="Nissan Blue Bird" />
                <h3>Nissan Blue Bird</h3>
              </div>
         
            </div>
        );
    
}

export default Sedan1;