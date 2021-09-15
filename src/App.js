import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/page/home';
import pubgmobile from './components/page/pubgmobile';
import csgo from './components/page/csgo';
import forza from './components/page/forza';


function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact  component= {Home}/>
        <Route path='/pubgmobile' exact  component= {pubgmobile}/>
        <Route path='/csgo' exact  component= {csgo}/>
        <Route path='/forza' exact  component= {forza}/>

      </Switch>
      </Router>
      </>
    
  );
}

export default App;
