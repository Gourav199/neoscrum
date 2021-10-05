import react from "react";

/**
 * @author Gourav Tewary
 * @description this function helps to give user  feedback in card
 * @param {props}  
 * @returns JSX for feedback card screen screen
 */
const FeedbackCard =({data})=>{
    let feedback = data.feadback;
    
    
    let name = data.name;
 // console.log(data);
    return(
      
        <div className="card" rounded>
            <div className="card-body ">
            
            <textarea style={{width:"85%",height:"50%",fontSize:"1.2em",resize: "none"}} className="card-subtitle mb-4 display-6 text-success">{feedback}</textarea>
            <p className="card-text mt-2 pb-5 text-danger" style={{fontSize : "20px"}}>sent by : {name}</p>
           
            </div>
      </div>
      
    );
}
export default FeedbackCard;