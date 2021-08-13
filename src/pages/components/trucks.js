import React from 'react';


import "../../styles/fuelsaver.scss"
import { StaticImage } from 'gatsby-plugin-image';

const Trucks=()=> {
   
        return (
            <div className="cards">
              <div className="card">
                <StaticImage src="../../images/trucks/hilux.png" alt="Toyota Hilux" />
                <h3>Toyota Hilux</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/trucks/np300.png" alt="Nissan Np300" />
                <h3>Nissan Np300</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/trucks/navara.png" alt="Nissan Navvara" />
                <h3>Nissan Navvara</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/trucks/kbs.png" alt="Isusu kbs" />
                <h3>Isusu kbs</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/trucks/amarok.png" alt="VW Amarok" />
                <h3>VW Amarok</h3>
              </div>
            </div>
        );
    
}

export default Trucks;