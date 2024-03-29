import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../Asset/signin-image.jpg";

/**
 * @author Gourav Tewary
 * @description this function helps to give user information in card
 * @param {props}  getting data and remove card
 * @returns JSX for  add feedback card screen
 */
const AddFeedbackCard = ({ data, removecard }) => {
    const [feadback, setFeedback] = useState("");
    const [flag, setFlag] = useState(false);

    const token = localStorage.getItem("token");
    let { name, email, profile } = data;
    //console.log("looking for",data.profile);
    let profiles = localStorage.getItem("profile").replace(/"/g, "");
    const targetUrl = `https://quiet-harbor-07900.herokuapp.com${profiles}`;
    var userProfile = { userProf: data.profile };
    var userTargerUrl;
    Object.keys(userProfile).map(function (key, index) {
        var actualProfile = userProfile.userProf;
        userTargerUrl = `https://quiet-harbor-07900.herokuapp.com${actualProfile}`;
        return userTargerUrl;
    });
    function validate (){
        if (feadback === '') {
            //alert(dataFeedback.feadback );
                document.getElementById('txtfeed').style.display="block";
        }
        else{
            document.getElementById('txtfeed').style.display="none";
        }
    }
    function handleFeedbackSubmit(e) {

        e.preventDefault();
        var dataFeedback = { email, feadback };
        console.log(dataFeedback);
        validate();
        let config = {
            method: "POST",
            data: dataFeedback,
            url: "https://quiet-harbor-07900.herokuapp.com/addFeadback",
            headers: {
                Authorization: `bearer ${token}`,
            },
        };
        axios(config)
            .then((res) => {
                alert("success")
                console.log("res", res);
                setFlag(true)
                //  setUser(res.data);
                removecard(email);
            })
            .catch((err) => {
                console.log("failure", err);

            });

    }
    useEffect(() => {
        setFeedback("");
        //alert("Calling");
        console.log("abc", feadback);
        setFlag(false);
    }, [flag === true])
    return (
        <div className="col-3 txt-addfeed-card m-5  ">
            <div className="row">
                <div className="col-12 text-center">
                    <img className="rounded txtimg-add pt-3" style={{maxHeight:"50px"}} src={userTargerUrl}></img>
                </div>
                <div className="col-12 text-start">
                    <h5>{name}</h5>
                    <input type="text" value={email} style={{ display: "none" }} />
                </div>
                <div className="col-12 text-start">
                    <textarea style={{ resize: "none" }} maxLength="100" onChange={(e) => { setFeedback(e.target.value); }} value={feadback} placeholder="Enter your Feedback" className="form-control">{ }</textarea>
                    <small id="txtfeed" className="text-danger" style={{display:'none'}}>Please enter a feedback</small>
                </div>
                <div className="col-4 pb-4 pt-3">
                    <button className="btn btn-primary" onClick={handleFeedbackSubmit}>Submit</button>
                </div>

            </div>

        </div>
    )
}

export default AddFeedbackCard;