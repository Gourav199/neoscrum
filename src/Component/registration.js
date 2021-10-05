import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "../fonts/material-icon/css/material-design-iconic-font.min.css";
import "../css/style.css";
import img1 from "../Asset/signin-image.jpg";
import axios from "axios";
import { useForm } from "react-hook-form";
/**
 * @author Gourav Tewary
 * @description this function helps to register user 
 * @returns JSX for Registration screen
 */

function Registration() {
  
  const [emailName, setEmailName] = useState("");
  //const [emailEror,setEmailError] = useState('');
  const [name, setName] = useState("");
  const [fileupload, setFileUpload] = useState("");
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    // if(validator.isEmail(emailName)){
    //   setEmailError('valid email');
    // }
    // else{
    //   returnsetEmailError('invalid email');
    // }
    // if(emailName ==''){
    //   alert("Please enter a valid email");
    // }
    // if(name ==''){
    //   alert("Please enter a valid name");
    // }
    // if(fileupload ==''){
    //   alert("Please upload a file");
    // }
    
    var FormData = require('form-data');


    var data = new FormData();

    data.append('profileImage', fileupload);
    data.append('email', emailName);
    data.append('name', name);
    var count =0;
   // console.log("file",fileupload.type);
    let item = { name, emailName, fileupload };
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    var allowedExtensions = ['image/jpg','image/png','image/jpeg'];
    var fileType =fileupload.type;
    console.log( typeof fileType)
   

    if(emailName ===''){
      document.getElementById('txterrMail').style.display="block";
      document.getElementById('txterrMail').innerHTML="please enter  an  email";
      count++;
    }
    else if(!pattern.test(emailName)){
      document.getElementById('txterrMail').style.display="block";
      document.getElementById('txterrMail').innerHTML="please enter  a valid  email";
      count++;
    }
    else{
      document.getElementById('txterrMail').style.display="none";
    }
    if(name ==='' ){
      document.getElementById('txterrName').innerHTML="please enter  a   name";
      document.getElementById('txterrName').style.display="block";
      count++;
    }
    
    else if(name!=='' && !isNaN(name)){
       document.getElementById('txterrName').style.display="block";
       document.getElementById('txterrName').innerHTML="please enter  a valid  name";
       count++;
      
    }
    else{
      document.getElementById('txterrName').style.display="none";
    }
    
   
   
   
    if(fileupload === ''){
      document.getElementById('txterrfile').style.display="block";
      document.getElementById('txterrfile').innerHTML="please upload   a file";
      count++;
    }
   
    else if (!allowedExtensions.includes(fileType)) {
      //alert("Hello fils")
      document.getElementById('txterrfile').style.display="block";
      document.getElementById('txterrfile').innerHTML="please upload   a  valid file of jpg,jpeg and png type";
      count++;
     }
     else{
      document.getElementById('txterrfile').style.display="none";
     } 
    
    
    if (count===0) {
     
      setLoading(true);
      
      axios.post("https://quiet-harbor-07900.herokuapp.com/register", data, {
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      }).then(res => {
        console.log("res", res);
      // alert(res.data.message);
      setLoading(false);
          history.push("./login");
      }).catch(err => {
       // alert("error", err)
        console.log("error", err)
        setLoading(false);
      })
     
    }
    



  };
  
  const upload = (e) => {


    setFileUpload(e.target.files[0]);
    console.log(e.target.files[0]);

  };
   
  return (
    <>

      <div className="main">

          
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form method="POST" onSubmit={handleSubmit}className="register-form" id="register-form" encType="multipart/form-data">
                  <div className="form-group">
                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" id="exampleInputPassword1" onChange={(e) => { setName(e.target.value); }} id="name" placeholder="Your Name" value={name}  
                    /><small  id="txterrName" style={{display:"none",color:"red"}}>Please enter a  Name</small>
                  </div>
                  <div className="form-group">
                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                    <input type="email" name="emailId" id="exampleInputEmail1" placeholder="Your Email" value={emailName} onChange={(e) => {
                      setEmailName(e.target.value);
                    }} />
                    <small  id="txterrMail" style={{display:"none",color:"red"}}>Please enter a valid email</small>
                  </div>
                  <div className="form-group">
                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                    <input

                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                      //   onChange={(e)=>{
                      //       setFileUpload(e.target.file)
                      //   }}
                      onChange={(e) => upload(e)}
                    /><small  id="txterrfile" style={{display:"none",color:"red"}}>Please enter a valid file</small>
                  </div>

                  <div className="form-group">
                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                    {/* <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label> */}
                  </div>
                  {loading ? (<>Loading.... <div className="spinner-border text-warning"></div></>):("") }
                  <div className="form-group form-button">
                    <input type="submit" onClick={handleSubmit} name="signup" id="signup" className="form-submit" value="Register" />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure><img src={img1} alt="sing up image" /></figure>
                <a>Already register &nbsp;<Link to="/login">Login</Link></a>


              </div>

            </div>
          </div>
        </section>

      </div>

    </>
  );
}

export default Registration;
