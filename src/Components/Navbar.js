import React from 'react';
import {Link,NavLink} from 'react-router-dom'



function Navbar() {
    return (
        <div className="App">
        <nav id="nav-iop">
       <div class="nav-wrapper" style={{backgroundColor:"#5CD8DE"}}>
         <a href="#" class="brand-logo" id="m-left" ><i><b> Masteree</b></i></a>
         <ul id="nav-mobile" class="right ">
          <li><NavLink to="/Home" style={{ color: '#FFF' , textDecoration:'none' }}><b>HOME</b></NavLink></li>
           <li><NavLink to="/Signup" style={{ color: '#FFF' , textDecoration:'none' }}><b>SIGN UP</b></NavLink></li>
           <li><NavLink to="/Signin" style={{ color: '#FFF' , textDecoration:'none' }}><b>SIGN IN</b></NavLink></li>
        
         </ul>
       </div>
     </nav>
      
       </div>

    );

}



export default Navbar;