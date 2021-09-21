
import './App.css';

import Registration from './registration';
import { BrowserRouter, Link,Route, useHistory } from "react-router-dom";
import LoginNeoScrum from "./login";
import Dashboard from "./dashboard";
import AddFeedback from "./addfeedback";

function App() {
  return (
    <div className="App">
      {/* <Registration/> */}
      <BrowserRouter>
                {/* <Link   to="/login" class="signup-image-link" target="_blank">Login</Link>
                <Link to ="/dashboard" class="signup-image-link">DashBoard</Link>
                <Link to ="/addfeedback" class="signup-image-link">Add Feedback</Link> */}
                <Route exact path="/login" component={LoginNeoScrum}></Route>
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/addfeedback" component={AddFeedback}></Route>
        </BrowserRouter>   
    </div>
  );
}

export default App;
