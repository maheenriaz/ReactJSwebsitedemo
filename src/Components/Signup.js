import React from 'react';
import Footer from './Footer';
import NavLink from 'react-bootstrap/NavLink';


function Signup() {
    return (
    
      <form className="text-center border border-light p-5" action="#!">
      <center>
      <i class="medium material-icons">account_circle</i>
          <p className="h4 mb-4">Sign Up</p>
      
          <input type="text" id="defaultLoginFormEmail" className="form-control  col-sm-4" placeholder="First Name"/>
          <br></br>
          <input type="text" id="defaultLoginFormEmail" className="form-control  col-sm-4" placeholder="Last Name"/>
      <br></br>
      <input type="email" id="defaultLoginFormEmail" className="form-control  col-sm-4" placeholder="E-mail"/>
      <br></br>
      <input type="text" id="defaultLoginFormEmail" className="form-control  col-sm-4" placeholder="News Letter Subscription"/>
      <br></br>
          
          <input type="password" id="defaultLoginFormPassword" className="form-control col-sm-4" placeholder="Password"/>
          <br></br>
          <div className="d-flex justify-content-around col-sm-4" >
              <div className="col-sm-4" style={{marginLeft:"-125px"}}>
                 
                  <div className="custom-control custom-checkbox ">
                      <input type="checkbox" className="custom-control-input " id="defaultLoginFormRemember" />
                      <label className="custom-control-label" for="defaultLoginFormRemember"> I agree to TOC</label>
                  </div>
              </div>
              <div>
                 
               
              </div>
          </div>
      
          <br></br>
          <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect col-sm-4" type="submit">Sign in</button> <br></br>
          <p>   <a href="">Forgot password? OR   </a>
              <a href="">Signup..</a>
          </p>
      
      </center>
      </form>
               
  

    );
}




export default Signup;
