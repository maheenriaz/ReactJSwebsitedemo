import React from 'react';
import Footer from './Footer';



function Signup() {
    return (
        <section>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-8 col-xl-6">
              <div class="row">
                <div class="col text-center"><br></br><br></br>
                  <h1 id="login">MASTEREE SIGNUP</h1>
                  <p class="text-h3">Welcome to the signup page. </p>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col mt-4">
                  <input type="text" class="form-control" placeholder="First Name"/>
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Last Name"/>
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <input type="text" class="form-control" placeholder="News letter subscription"/>
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <input type="password" class="form-control" placeholder="Enter Password"/>
                </div>
                <div class="col">
                  <input type="password" class="form-control" placeholder="Confirm Password"/>
                </div>
              </div>
              <div class="row justify-content-start mt-4">
                <div class="col">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input"/>
                      I Read and Accept <a href="#">Terms and Conditions</a>
                    </label>
                  </div>
    
               <center>   <button  id="button" class="btn btn-primary mt-4 ">Submit</button> </center>
                </div>
              </div>
            </div>
          </div>
        </div>
    <br></br>   
     <Footer />
      </section>
    );
}




export default Signup;
