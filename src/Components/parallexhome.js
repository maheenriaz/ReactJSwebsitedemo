import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import  homeimg from './2.jpg';




function Parallaex() {
    return (
        
        <div className="parallax-container">
           
         <div  className="parallax">
                <img src={homeimg} className="img-responsive" />
                
                </div>
            </div>
            
    );
}


export default  Parallaex;
