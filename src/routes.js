import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import intro from './components/intro';
import {AnmCmdSidebar, AnmCmdDisplay} from './components/AnmCmd';
const Routes = (props) => (
  <Router>
    <div id="layout">
      <a href="/" id="menuLink" className="menu-link">
        <span></span>
      </a>
      <div id="menu">
        <div className="pure-menu">
          <a className="pure-menu-heading" href="#">boxdox.marvel</a>
          <ul className="pure-menu-list">
            <li className="pure-menu-item menu-item-divided pure-menu-selected">
              <Link to="/" className="pure-menu-link">Intro</Link>
            </li>
          </ul>
          <Route path="/:character/anmcmd" component={AnmCmdSidebar}>

          </Route>
        </div>
      </div>
      <div id="main">
        <Route exact path="/(:filter)" component={intro}/>
        <Route path="/:character/anmcmd/:id" component={AnmCmdDisplay}/>
      </div>
    </div>

  </Router>);
  export default Routes;
