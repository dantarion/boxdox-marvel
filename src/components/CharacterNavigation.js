import React, { Component } from 'react';
import {characters} from '../data';

class CharacterNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
    this.selectChangeCharacter = this.selectChangeCharacter.bind(this);
    this.selectChangeMode = this.selectChangeMode.bind(this);
  }
  componentWillMount() {
  }
  selectChangeCharacter(event){
    var mode = this.props.match.params.mode;
    this.props.history.push(`/${event.target.value}/${mode}`);

  }
  selectChangeMode(event){
    var char = this.props.match.params.character;
    if(event.target.value === "anmcmd"){
      this.props.history.push(`/${char}/anmcmd`);
    } else if(event.target.value === "atkinfo"){

      this.props.history.push(`/${char}/atkinfo`);
    } else{

    }


  }
  render() {

    return (
      <div>
      <select value={this.props.match.params.character} onChange={this.selectChangeCharacter}>
      {characters.map((character,index)=>{
        return (<option key={index}>{character}</option>);
      })}
      </select>
      <select value={this.props.match.params.mode} onChange={this.selectChangeMode}>
      {["anmcmd","atkinfo"].map((character,index)=>{
        return (<option key={index}>{character}</option>);
      })}
      </select>
    </div>
    )
  }
}
export {CharacterNavigation}
