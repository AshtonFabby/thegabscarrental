import React from 'react';

import "../../styles/fuelsaver.scss"
import { StaticImage } from 'gatsby-plugin-image';

const Suv2=()=> {
   
        return (
            <div className="cards">
              <div className="card">
                <StaticImage src="../../images/suv2/fortuner.png" alt="Toyota Fortuner" />
                <h3>Toyota Fortuner</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/suv2/blazer.png" alt="Chevrolet Trail Blazer" />
                <h3>Chevrolet Trail Blazer</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/suv2/ml.png" alt="Mercedes ML" />
                <h3>Mercedes ML</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/suv2/land.png" alt="Toyota Prado Landcruizer" />
                <h3>Toyota Prado Landcruizer</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/suv2/pajero.png" alt="Pajero" />
                <h3>Pajero</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/suv2/discovery.png" alt="Discovery" />
                <h3>Discovery</h3>
              </div>
            </div>
        );
    
}

export default Suv2;