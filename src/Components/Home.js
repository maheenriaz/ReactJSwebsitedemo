import React from 'react';

import { Button,Form } from 'react-bootstrap';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import parallax from  './parallexhome'
import Parallaex from './parallexhome';
import Grid1 from './Grid1'
import Cardsection from './Cardsection'
import Footer from './Footer'

const Home =()=> {
    return (
      
     <div>
         <header>
             <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  
        <h1 id="header-text"><b>Find a co-founder</b></h1>
        <p id="itching">Itching to launch your amazing start-up idea but need a co-founder to help you get there? Looking to jump onboard <br></br>as a co-founder on someone else's idea? Startbee is here to help you find your future co-founder. Join our free community of co-founders today and start your search!</p>
        <br></br>  <br></br>  
             </header>
             <br></br><br></br><br></br>
             <Grid1 /><br></br><br></br>
           <Parallaex /><br></br><br></br>
           <Cardsection /><br></br><br></br>
           <Parallaex /><br></br><br></br>
           <Cardsection /><br></br><br></br>
           <Footer /><br></br><br></br>
     </div>
           
    );
}







export default Home;
