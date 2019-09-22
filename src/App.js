import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './Components/Navbar'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Home from './Components/Home'
import {BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormGroup,FormLabel } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/Signup" component={Signup} />
      <Route  path="/Signin" component={Signin} />
         
    
      </BrowserRouter>
    </div>
  );
}

export default App;
