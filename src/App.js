import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home';


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route component={Home} path="/" ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
