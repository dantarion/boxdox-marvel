import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import intro from './components/intro';
import AnmCmdSidebar from './components/AnmCmdSidebar';
const Routes = (props) => (
  <Router>
    <div id="layout">
      <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
      </a>
      <div id="menu">
        <div className="pure-menu">
          <a className="pure-menu-heading" href="#">boxdox.marvel</a>
          <ul className="pure-menu-list">
            <li className="pure-menu-item" className="menu-item-divided pure-menu-selected">
              <Link to="/" className="pure-menu-link">Intro</Link>
            </li>
          </ul>
          <Route path="/:character/anmcmd" component={AnmCmdSidebar}/>
        </div>
      </div>
      <div id="main">
        <div className="header">
          <h1>Its Mahvel Baby!</h1>
          <h2>Now lets mod it!</h2>
        </div>
        <Route exact path="/" component={intro}/>
        <Route path="/:character/anmcmd" component={intro}/>
      </div>
    </div>

  </Router>);
  export default Routes;
