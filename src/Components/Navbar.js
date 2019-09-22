import React from 'react';
import {Link,NavLink} from 'react-router-dom'



function Navbar() {
    return (
      <div>
      <nav id="nav-iop" className="navbar-fixed" style={{backgroundColor:"indigo"}}>
        <div className="container-fluid">
      <div class="nav-wrapper" >
      <a href="#!" class="brand-logo"><b>GREEKS</b></a>   

        <a className="sidenav-trigger"  data-target="mobile-link"><i href="#" className="material-icons">menu</i></a>
      
       <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><NavLink to="/" style={{ color: '#FFF' , textDecoration:'none' }}><b>HOME</b></NavLink></li>
           <li><NavLink to="/Signup" style={{ color: '#FFF' , textDecoration:'none' }}><b>SIGN UP</b></NavLink></li>
           <li><NavLink to="/Signin" style={{ color: '#FFF' , textDecoration:'none' }}><b>SIGN IN</b></NavLink></li>
           <li><NavLink to="#" className="btn-floating darken-4 z-depth-0" >
           <i class=" material-icons">notifications</i>
     
             </NavLink></li>
             <li> <span className="badge white-text pink new">5</span></li>
        
         </ul>
       </div>
    
      
       </div>
      
       </nav>
       <ul className="sidenav"  id="mobile-link"  >
          <li><NavLink to="/" style={{ color: 'black' , textDecoration:'none' }}><b>HOME</b></NavLink></li>
           <li><NavLink to="/Signup" style={{ color: 'black' , textDecoration:'none' }}><b>SIGN UP</b></NavLink></li>
           <li><NavLink to="/Signin" style={{ color: "black" , textDecoration:'none' }}><b>SIGN IN</b></NavLink></li>
        
         </ul>
       </div>

    );

}



export default Navbar;