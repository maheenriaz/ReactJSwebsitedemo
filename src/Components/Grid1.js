import React from 'react';

import  f from './f.jpg';
import {Spring} from 'react-spring/renderprops';



function Grid1() {
    return (
        <div className="container">
        <div class="row">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s4"><a href="#test1">What is Lorem Ipsum?</a></li>
            <li class="tab col s4"><a class="active" href="#test2">Why do we use it?</a></li>
           <li class="tab col s4"><a href="#test3">Where does it come from?</a></li>
          </ul>
        </div>
</div>
<div className="row">
  <Spring  
     from ={{opacity: 0, marginTop:500}}
     to ={{opacity: 1,  marginTop:0}}
     config={{delay:2000,duration:2000}}
   > 
       {props =>(
          <div style={props}>
             <div id="test1" class="col s12">Lorem Ipsum is simply dummy text of the printing and Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
             <div id="test2" class="col s12">It is a long established fact that a reader will be Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
             <div id="test3" class="col s12">Contrary to popular belief, Lorem Ipsum is not Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going </div>
           </div>
        )}
   </Spring>
           </div>
           </div>
    );
}


export default Grid1;