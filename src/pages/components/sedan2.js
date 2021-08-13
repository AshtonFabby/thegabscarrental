import React from 'react';

import "../../styles/fuelsaver.scss"
import { StaticImage } from 'gatsby-plugin-image';

const Sedan2=()=> {
   
        return (
            <div className="cards">
              <div className="card">
                <StaticImage src="../../images/sedan2/eclass.png" alt="Mercedes benz E class" />
                <h3>Mercedes benz E class</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan2/cclass.png" alt="Mercedes benz C class" />
                <h3>Mercedes benz C class</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan2/sclass.png" alt="Mercedes benz S class" />
                <h3>Mercedes benz S class</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan2/bmw.png" alt="BMW" />
                <h3>BMW</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan2/cruze.png" alt="Chevrolet Cruze" />
                <h3>Chevrolet Cruze</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/sedan1/corolla.png" alt="Toyota Corolla" />
                <h3>Toyota Corolla</h3>
              </div>
         
            </div>
        );
    
}

export default Sedan2;