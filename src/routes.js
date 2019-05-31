import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import DataMaster from './components/DataMaster'
import intro from './components/intro'
import {AnmCmdSidebar, AnmCmdDisplay} from './components/AnmCmd'
import NewSidebar from './components/AnmCmd/Sidebar'
import {CharacterNavigation} from './components/CharacterNavigation'
import {AtkInfoTable} from './components/AtkInfoTable'
import {BaseActTable} from './components/BaseAct'
const data = {}
const Routes = (props) => (
  <Router>
      <div id="wrapper">
        <Route path="/:character" component={DataMaster}></Route>
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <Link to="/">boxdox.marvel</Link>
            </li>
          </ul>
          <div className="credits">a modding resource by
            <a href="https://twitter.com/dantarion">@dantarion</a>
          </div>
          <Route data={data} path="/:character/:mode(anmcmd|atkinfo)" component={CharacterNavigation}></Route>
          <Route data={data} path="/:character/anmcmd" component={NewSidebar}></Route>
        </div>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <Route exact path="/" component={intro}/>
            <Route exact data={data} path="/:character/anmcmd/:id" component={AnmCmdDisplay}/>
            <Route exact data={data} path="/:character/atkinfo" component={AtkInfoTable}/>
            <Route exact data={data} path="/:character/baseact" component={BaseActTable}/>
          </div>
        </div>
      </div>
  </Router>
)
export default Routes
