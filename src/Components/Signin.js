import React, { Component } from 'react';
import { Button, Col, Row,input,form ,FormGroup} from 'react-bootstrap';
import Footer from './Footer';


class Signin extends Component
{ 
    constructor(props)
    {
        super(props);
        this.state={
            
            email:"Enter your email",
            password:"Enter your Password",
    }
}
        render()
        {
            return (
                <div class="container" >
                <div class="row">
                    <div class="col-sm-12"> <br></br> <br></br>
                        <h2 class="center-align" id="login">SIGN IN</h2>
                        <br></br> <br></br> 
                        <div class="row">
                            <form class="col-sm-8"  id="center">
                                <div class="Form-group">
                                    <div class="input-field col-sm-8 " >
                                        <input id="email" value={this.state.email} className="email" autoComplete="off" placeholder="Enter your Email" type="email"  />
                                        <label for="email" id="label-all">Email</label>
                                    </div>
                                </div>
                                <div class="Form-group">
                                    <div class="input-field col-sm-8"  >
                                        <input id="pass" type="password" autoComplete="off" placeholder="Enter your Password"/>
                                        <label for="pass"  id="pass-left" id="label-all">Password</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8">
                                    <label for="forgot"><a href="#" id="label-all">Forgot Password?</a></label>
                                    </div>
                                </div>
                                        
                                <div class="row center">
                                    <div class="col-sm-8">
                                        <p class="center-align">
                                            <button id="button" class=" valign-wrapper btn btn-primary btn-medium waves-effect waves-light" type="button" name="action">Login</button>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>


             );
        }
  
 
 
}
export default Signin;


