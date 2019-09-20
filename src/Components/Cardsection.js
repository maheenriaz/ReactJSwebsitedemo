import React from 'react';

import  women1 from './women1.jpg';


function Card() {
    return (
   <div className="container">
   <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-image">
            <img src={women1} width="4px" id="img-card" height="230px"/>
          
          </div>
          <div class="card-content">
            <h4>Marketing</h4>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively....</p>
          </div>
          <div class="card-action">
      <center>    <a class="waves-effect waves-light btn indigo" id="but" style={{color:"white"}}><i class="material-icons left" ></i>Learn more..</a>
</center>          </div>
        </div>
      </div>


      <div class="col-sm-4">
        <div class="card">
          <div class="card-image">
            <img src={women1} width="4px" id="img-card" height="230px"/>
          
          </div>
          <div class="card-content">
            <h4>Marketing</h4>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively....</p>
          </div>
          <div class="card-action">
      <center>    <a class="waves-effect waves-light btn indigo"  id="but" style={{color:"white"}}><i class="material-icons left">cloud</i>Learn more..</a>
</center>          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="card">
          <div class="card-image">
            <img src={women1} width="4px" id="img-card" height="230px"/>
          
          </div>
          <div class="card-content">
            <h4>Marketing</h4>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively...</p>
          </div>
          <div class="card-action">
      <center>    <a class="waves-effect waves-light btn indigo"  id="but" style={{color:"white"}}><i class="material-icons left">cloud</i>Learn more..</a>
</center>          </div>
        </div>
      </div>
    </div>

    
    </div>
    );
}


export default Card;