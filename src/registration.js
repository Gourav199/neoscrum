import React from "react";
import { useState } from "react";
import { BrowserRouter, Link,Route, useHistory } from "react-router-dom";

import "./fonts/material-icon/css/material-design-iconic-font.min.css";
import "./css/style.css";
import img1 from "./images/signin-image.jpg"


function Registration() {
  const [emailName, setEmailName] = useState("");
  const [name, setName] = useState("");
  const [fileupload, setFileUpload] = useState("");
  let history=useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
   // console.log(e);
    console.log(emailName, name, fileupload);
    
var FormData = require('form-data');


var data = new FormData();

data.append('profileImage',fileupload);
data.append('email', emailName);
data.append('name', name);
console.log(data);


 };
const upload = (e) => {
  //console.log("40",e.target.files[0]);
  setFileUpload(e.target.files[0])
 
};




  return (
    <>
     
     <div class="main">


    <section class="signup">
    <div class="container">
        <div class="signup-content">
            <div class="signup-form">
                <h2 class="form-title">Sign up</h2>
                <form method="POST" onSubmit={handleSubmit} class="register-form" id="register-form">
                    <div class="form-group">
                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text"  id="exampleInputPassword1"onChange={(e) => {setName(e.target.value);}}id="name" placeholder="Your Name" value={name}/>
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                        <input type="email"  id="exampleInputEmail1" placeholder="Your Email"    value={emailName}
                  onChange={(e) => {
                    setEmailName(e.target.value);
                  }}/>
                    </div>
                    <div class="form-group">
                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                        <input
                  required
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  //   onChange={(e)=>{
                  //       setFileUpload(e.target.file)
                  //   }}
                  onChange={(e) => upload(e)}
                />
                    </div>
                   
                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>
                    <div class="form-group form-button">
                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                    </div>
                </form>
            </div>
            <div class="signup-image">
                <figure><img src={img1} alt="sing up image" /></figure>
                
                
            </div>
            
        </div>
    </div>
</section>
                
</div>
        
    </>
  );
}

export default Registration;
