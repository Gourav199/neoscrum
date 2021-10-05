import React from "react";
import { useState, useEffect } from "react";
import "../css/style.css";
import {  useHistory } from "react-router-dom";
import FeedbackCard from "./feedback-card";
import 'bootstrap/dist/css/bootstrap.css';


  /**
 * @author Gourav Tewary
 * @description this function returns the feedback of every user in a card form by adding component   FeedbackCard
 * @param {props} 
 * @returns JSX for Address Card Screen
 */
const Dashboard_Neoscrum = ()=>{

  const navigate = useHistory();
    const [user, setUser] = useState([]);
    const userFeedback =JSON.parse(localStorage.getItem("feedback"));
    const userName =localStorage.getItem("name");
    let profile =localStorage.getItem("profile").replace(/"/g, "");
    const targetUrl = `https://quiet-harbor-07900.herokuapp.com${profile}`;
    
    console.log("image",   profile);
    console.log(userName);
    function handlefeedbackchange(){
      navigate.push('./addfeedback-neoscrum');
    }
    function handlelogout(){
      localStorage.removeItem("feedback");
      localStorage.removeItem("token");
      
      navigate.replace("/login");
    }
     function getAllUser(){
        //const token  =localStorage.getItem("token");
       
      
        
       // alert("Get all user  activated");
    //     let config = {
    //         method: "POST",
    //         url: "https://quiet-harbor-07900.herokuapp.com/GetAllRecievers",
    //         headers: {
    //           Authorization: `bearer ${token}`,
    //         },
    //       };
    //     // axios.post("https://quiet-harbor-07900.herokuapp.com/GetAllRecievers",{ headers: {
    //     //     Authorization: `bearer ${token}`,
    //     //     Accept:"application/json ",
    //     //     "Content-Type":"application/json"
    //     //   },credentials:"inlcude"}).then(res=>{
    //     //     console.log('received data',res);
    //     // }).catch(err=>{
    //     //     console.log("err",err);
    //     // })
    //     axios(config)
    //   .then((res) => {
    //   // alert("success")
    //   //  console.log("res",res);
    //     setUser(res.data);
    //   })
    //   .catch((err) => {console.log("failure",err);
    //   //alert("failure")
    // });
    
      
    }
    useEffect(()=>{
      if(localStorage.getItem("token")){
        getAllUser();
      }
      else{
        navigate.replace("/login");
      }
        
    },[])
    
  return(
      <div className="container-fluid mx-auto txt-dash" >
          
          <div className="row bg-secondary">
              <div className="col-12">
                  <div className="row">
                    <div className="col-2 p-2">
                        <img src ={targetUrl} className="rounded  txtimg align-left" style={{maxHeight:"50px"}}/>&nbsp;<span className="text-white">{userName}</span>
                    </div>
                    <div className="col-10 p-2">
                        <div className="row">
                            <div className="col-10 text-end">
                               {/* <Link to="/addfeedback-neoscrum" style={linkStyle}>Add Feedback</Link> */}
                               <button className="btn btn-primary" onClick={handlefeedbackchange}> Add Feedback</button>
                            </div>
                            <div className="col-2">
                               <button className="btn btn-danger" onClick={handlelogout}>Logout</button>
                            </div>
                        </div>
                        

                    </div>
                  </div>
               </div>
            </div>
            <div className="row m-5 mx-auto ">
                
            {userFeedback && userFeedback.length>0?
                userFeedback.map((d,index)=>{
                  return <React.Fragment key={index} > <FeedbackCard data ={d}/></React.Fragment>
              })
               
                :
                
                <>
               
                    <h1>Currently no feedbacks</h1>
                </>

            }
            </div>
        
      </div>
      
  )
}
export default Dashboard_Neoscrum;