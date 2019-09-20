import React from 'react';

import  f from './f.jpg';




function Grid1() {
    return (
        <div className="container-section" >
            <div className="row">
                <div className="col s12 l4  " >
              <center>      <img src={f} className="img-rounded" width="300px" id="g1" /></center>
                    
                    </div>
                    <div className="col s12 l6 pull-l1" >
                        <h2 id="g1-p-h" className="indigo-text text-darken-4">hello</h2>
                        <p id="g1-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   </div>
                </div>

            <br></br>     <br></br>
                <div className="row">
                <div className="col s12 l4  push-l6">
              <center>      <img src={f} className="img-rounded" width="300px"id="g1"/></center>
                    
                    </div>
                    <div className="col s12 l6 pull-l4">
                        <h2 id="g1-p-h" className="indigo-text text-darken-4">hello</h2>
                        <p id="g1-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   </div>
                </div>
                <br></br>     <br></br>
                <div className="row">
                <div className="col s12 l4  ">
              <center>      <img src={f} className="img-rounded" width="300px" id="g1" /></center>
                    
                    </div>
                    <div className="col s12 l6 pull-l1">
                        <h2 id="g1-p-h" className="indigo-text text-darken-4">hello</h2>
                        <p id="g1-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   </div>
                </div>
            </div>


           
    );
}


export default Grid1;