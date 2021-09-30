import react from  "react";
/**
 * @author Gourav Tewary
 * @description this function helps to give user  feedback in card
 * @param {props}  
 * @returns JSX for feedback card screen screen
 */
const FeedbackCard =({data})=>{
    let feedback = data.feadback;
  let no = data.no;
  let name = data.name;
    //console.log("fedback data",data);
    return(
        <div className="col-3 m-3  txtcard">
                    <div className="row pt-3 bg-primary m-2">
                        <div className="col-6 text-start ">
                        <p className="text-white">Feedback no : {no}</p>
                        </div>
                        <div className="col-6 text-end">
                        
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-8text-justify">
                                <p className="text-justify">{feedback}</p>
                        </div>
                    </div>
                    <div className="row pt-5 ">
                        <div className="col-12   pt-3 text-end">
                            <p >sent by : {name}</p>
                        </div>
                        <div className="col-12  text-end">
                          
                        </div>
                    </div>
                    
                    
                </div>
    );
}
export default FeedbackCard;