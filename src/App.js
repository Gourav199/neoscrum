
import './App.css';

import Registration from "./Component/registration";
import { BrowserRouter as Router, Link,Route,Switch,Redirect, useHistory } from "react-router-dom";
import LoginNeoScrum from './Component/login';
import Dashboard_Neoscrum from './Component/dashboard-neoscrum';
import AddFeedBackNeoScrum from './Component/addfeedback-neoscrum';
import PageNotFound from './Component/error-404';
// import { Switch } from '@material-ui/core';

function App() {
  return (
    

    
    <div className="App">
     
    
    <Router>
    
      <Switch>
      <Route exact path="/">
    <Redirect to="/login" component={LoginNeoScrum} />
        </Route>

       
      <Route exact path="/login" component={LoginNeoScrum}/>
      <Route exact path="/registration" component={Registration}/>
      <Route exact path="/dashboard-neoscrum" component={Dashboard_Neoscrum}/>
      <Route exact path="/addfeedback-neoscrum" component={AddFeedBackNeoScrum}/>
     
      
      <Route component={PageNotFound} />
        
          
      </Switch>
    
      
      </Router>
      
    </div>
    
  );
}

export default App;
