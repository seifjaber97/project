import logo from './logo.svg';
import './App.css';
import Dashb from './Components/Dashb';
import Home from './Components/Home';
import Student from './Components/StudentComponents/Student';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Staff">
            <Dashb/>
          </Route>
          <Route path="/Student">
            <Student/>
          </Route>
        
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
