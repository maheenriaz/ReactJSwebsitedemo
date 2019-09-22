import React from 'react';
import  homeimg from './2.jpg';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';


const Carosel =()=> {
    return (
      <section class="black">
  <div class="carousel carousel-slider" data-indicators="true">
    <div class="carousel-fixed-item">
      <div class="container">
        <h1 class="white-text">Materialize Carousel</h1>
        <a class="btn waves-effect white grey-text darken-text-2" href="#" target="_blank">button</a>
      </div>
    </div>
    <div className="carousel-item " id="red" href="#one!">
      <div className="container" id="red">
        <h2>First Slide</h2>
        <p className="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
      </div>  
    </div>
    <div className="carousel-item amber darken-2 white-text" href="#two!">
      <div className="container">
        <h2>Second Slide</h2>
        <p className="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
      </div>  
    </div>
    <div className="carousel-item green white-text" href="#three!">
      <div className="container">
        <h2>Third Slide</h2>
        <p className="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
      </div>  
    </div>
    <div className="carousel-item blue white-text" href="#four!">
      <div className="container">
        <h2>Fourth Slide</h2>
        <p className="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
      </div>  
    </div>
  </div>
</section>



       
    );
}














export default Carosel;