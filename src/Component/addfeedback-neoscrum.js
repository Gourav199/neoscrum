import React, { useState, useEffect } from "react";

import "../css/style.css";
import { useHistory } from "react-router-dom";
import AddFeedbackCard from "./add-feedback-card"
import axios from "axios";

/**
 * @author Gourav Tewary
 * @description this function helps to give feed to your friends  
 * @param {props}  in props i get the  user details in object
 * @returns JSX for Add Feedback screen
 */

const AddFeedBackNeoScrum = () => {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useHistory();
  const [loading, setLoading] = useState(false);
  const userName = localStorage.getItem("name");
  let profile = localStorage.getItem("profile").replace(/"/g, "");
  const targetUrl = `https://quiet-harbor-07900.herokuapp.com${profile}`;
  console.log(profile);
  // alert("Get all user  activated");
  function handlefeedbackchange() {
    
    navigate.push('./dashboard-neoscrum');
  }
  function handlelogout() {
    localStorage.removeItem("feedback");
    localStorage.removeItem("token");

    navigate.replace("/login");
  }
  function removecard(email) {
    setUser(user.filter((eachuser) => eachuser.email !== email))
  }
  function getDetails() {
    let config = {
      method: "POST",
      url: "https://quiet-harbor-07900.herokuapp.com/GetAllRecievers",
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    axios(config)
      .then((res) => {
        // alert("success")
        console.log("res", res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log("failure", err);
        //alert("failure")
      });
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getDetails();
    }
    else{
      navigate.replace("/login");
    }

  }, [])

  return (
    <div className="container-fluid">
      <div className="row bg-secondary">
        <div className="col-12">
          <div className="row" >
            <div className="col-2 p-2">
              <img src={targetUrl} className="rounded  txtimg align-left" style={{maxHeight:"50px"}}/>&nbsp;<span className="text-white">{userName}</span>
            </div>
            <div className="col-10 p-2">
              <div className="row">
                <div className="col-10 text-end">
                  {/* <Link to="dashboard-neoscrum" >Dashboard</Link> */}
                  <button className="btn btn-primary" onClick={handlefeedbackchange}> Dashboard</button>
                </div>
                <div className="col-2">
                  <button className="btn btn-danger " onClick={handlelogout}>Logout</button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {user.length === 0 ?
          <>
            <div className="col-12 pt-5">
              Loading ...<div className="spinner-border text-warning"></div></div>

          </>


          :
          user.map((d, index) => {
            return <React.Fragment key={index}><AddFeedbackCard data={d} removecard={removecard} /></React.Fragment>
          })


        }

      </div>
    </div>
  )
}
export default AddFeedBackNeoScrum;