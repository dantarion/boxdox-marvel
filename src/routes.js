import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import intro from './components/intro';
import {AnmCmdSidebar, AnmCmdDisplay} from './components/AnmCmd';
const data = {};
const Routes = (props) => (
  <Router>
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand"><Link to="/">boxdox.marvel</Link></li>
        </ul>
        <div className="credits">a modding resource by <a href="https://twitter.com/dantarion">@dantarion</a></div>
        <Route test="testData" data={data} path="/:character/anmcmd" component={AnmCmdSidebar}></Route>
      </div>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <Route exact path="/" component={intro}/>
          <Route exact test="testData" data={data} path="/:character/anmcmd/:id" component={AnmCmdDisplay}/>
        </div>
      </div>
    </div>
  </Router>
);
export default Routes;
