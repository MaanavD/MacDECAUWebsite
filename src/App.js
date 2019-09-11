import React from 'react';
import './custom.scss';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Exec from './components/Exec';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Resources from './components/Resources';
import Loader from './components/Loader';


function App() {
  setTimeout(function () {
    try{
      document.getElementById('loader').className = "hide";
      document.getElementById('hero').className = "hero-text";
    }
    catch(error){};
  }, 2000);
  return (
    <Router>
      <Loader />
      <Nav ></Nav>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/exec' component={Exec} />
          <Route path='/sponsors' component={Sponsors} />
          <Route path='/events' component={Events} />
          <Route path='/resources' component={Resources} />
        </Switch>
      </div>
    </Router>

  );
}
require('bootstrap');
export default App;

