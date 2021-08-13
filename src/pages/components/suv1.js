import React from 'react';

import "../../styles/fuelsaver.scss"
import { StaticImage } from 'gatsby-plugin-image';

const Suv1=()=> {
   
        return (
            <div className="cards">
              <div className="card">
                <StaticImage src="../../images/suv1/xtrail.png" alt="Nissan Xtrail" />
                <h3>Nissan Xtrail</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/suv1/crv.png" alt="Honda CRV" />
                <h3>Honda CRV</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/suv1/tucson.png" alt="Hyundai Tucson" />
                <h3>Hyundai Tucson</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/suv1/rav4.png" alt="Rav 4" />
                <h3>Rav 4</h3>
              </div>

              <div className="card">
                <StaticImage src="../../images/suv1/Qushqai.png" alt="Nissan Qushqai" />
                <h3>Nissan Qushqai</h3>
              </div>
            </div>
        );
    
}

export default Suv1;