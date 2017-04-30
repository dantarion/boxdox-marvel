import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {characters} from '../data';

var characterButtons = characters.map((character,index)=>{
  var route = "/"+character+"/anmcmd";
  return <tr key={index}><th>{character}</th><td><Link to={route}>anmcmd</Link></td></tr>
})
class Intro extends Component {

  render() {
    return (


  <div className="content">
    <h2 className="content-subhead">What is this site?</h2>
    <p>
      Capcom has released Ultimate Marvel VS Capcom 3 on Steam! Lets mess with it! <strong>Together!</strong>
    The goal of this website is to document the UMVC3 Engine, its file formats, and serve as a reference guide to
    the original movesets as people are making new ones. The goal is to have fun and learn about fighting game development by deconstructing a AAA title.
    </p>
    <h2 className="content-subhead">Dumps</h2>
    <table className="pure-table">
      <tbody>
        {characterButtons}
      </tbody>
    </table>

    <ul>
      <li>test</li>
    </ul>
  </div>)
}};
export default Intro;
