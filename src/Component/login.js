import React from "react";
import { useState } from "react";
import "../fonts/material-icon/css/material-design-iconic-font.min.css";
import "../css/style.css";
import img1 from "../Asset/signin-image.jpg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import 'bootstrap/dist/css/bootstrap.css';
/**
 * @author Gourav Tewary
 * @description this function helps to login user using email and password and redirects to dashboard screen
 * @returns JSX for Login  screen
 */
function LoginNeoScrum() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  //const [loading, setLoading] = useState(false)

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  // const handleChanges=(e)=>{
  //   setPassword(e.target.value)
  // }
  let history=useHistory()
 // console.log(valuess)
  const data ={
    email,
    password
    
  }
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    if(data.email===''){
      alert("Please enter an email");
    }
    if(data.password===''){
      alert("Please enter a valid password");
    }

    
   console.log(data.email);
   console.log(data.password);

   
      
     axios.post("https://quiet-harbor-07900.herokuapp.com/DeveloperSignin",data,{ headers:{
           "Content-Type":'application/json',
          "Accept":'application/json'
        }}).then(res=>{
            console.log("res",res);
            localStorage.setItem("token",res.data.UserLogin.token);
            localStorage.setItem("name",res.data.UserLogin.name);
            localStorage.setItem("profile",JSON.stringify(res.data.UserLogin.profile));
            localStorage.setItem("feedback",JSON.stringify(res.data.UserLogin.Feadbacks))
            const token =localStorage.getItem("token");
            
            history.push("/dashboard-neoscrum"); 
            //console.log("feedback");
            }).catch(err=>{
            console.log("error",err.error);
              alert(err.error);
            });
    };

    return (
    <>
        
        <div className="main">
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={img1} alt="sing up image" /></figure>
                        {/* <a href="#" className="signup-image-link">Create an account</a> */}
                        <a>Create an account &nbsp;<Link to="/registration">Sign up</Link></a>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Login</h2>
                        <form method="POST" onSubmit={handleSubmit} className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="your_name" id="exampleInputEmail1"  value={email} onChange ={onEmailChange} placeholder="Your email"/>
                            </div>
                            <div className="form-group">
                               
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type={passwordShown ? "text" : "password"}  value={password} onChange={onPasswordChange} id="exampleInputPassword1" placeholder="Password" pattern="[A-Za-z0-9]+"/>
                               
                               
                            </div>
                            <div className="form-group">
                            <span ><i onClick={togglePassword}                 
                                >
                                  {passwordShown.showPassword ? <Visibility /> : <VisibilityOff />}
                                  
                  </i></span>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                {/* <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label> */}
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" onClick={handleSubmit} className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>
  );
}

export default LoginNeoScrum;
