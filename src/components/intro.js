import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {characters} from '../data';

var characterButtons = characters.map((character,index)=>{
  var route = `/${character}/anmcmd`;
  if(["cmn","FeliciaC","FeliciaC","FeliciaF","Galactus","Kobun","Linlin","Mayoi","Zombie","RedArremerSh"].indexOf(character) !== -1){
    return <Link className="no-image" key={index} to={route}>{character}</Link>
  } else {
    return <Link key={index} to={route}><img alt={character} src={`/img/rip/fb_${character}00_BM_HQ_NOMIP.dds.png`}/></Link>
  }
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

      </tbody>
    </table>

    <div className="characterList">
{characterButtons}
    </div>
  </div>)
}};
export default Intro;
