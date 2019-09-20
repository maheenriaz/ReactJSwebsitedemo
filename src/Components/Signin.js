import React, { Component } from 'react';
import { Button, Col, Row,input,form ,FormGroup} from 'react-bootstrap';
import Footer from './Footer';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import {Link,NavLink} from 'react-router-dom'
import Icon from '@material-ui/core/Icon';

class Signin extends Component
{ 
   
        render()
        {
            return (
                
                
<form class="text-center border border-light p-5" action="#!">
<center>
  <i class="medium material-icons">account_circle</i>
  <p class="h4 mb-4"> Sign in</p>
    
    <input type="email" id="defaultLoginFormEmail" class="form-control  col-sm-4" placeholder="E-mail"/>
<br></br>
    
    <input type="password" id="defaultLoginFormPassword" class="form-control col-sm-4" placeholder="Password"/>
    <br></br>
    <div class="d-flex justify-content-around col-sm-4" >
        <div className="col-sm-4" style={{marginLeft:"-125px"}}>
           
            <div class="custom-control custom-checkbox ">
                <input type="checkbox" class="custom-control-input " id="defaultLoginFormRemember" />
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
           
         
        </div>
    </div>

    <br></br>
    <button class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect col-sm-4" type="submit">Sign in</button> <br></br>
    <p>   <a href="">Forgot password? or</a>
        <a href="">Signup</a>
    </p>

</center>
</form>
         
             );
        }
  
 
 
}
export default Signin;


