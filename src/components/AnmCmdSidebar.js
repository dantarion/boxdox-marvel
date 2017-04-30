import React, { Component } from 'react';
import {characters} from '../data';
import axios from 'axios';
var characterButtons = characters.map((character,index)=>{
  return <option key={index}>{character}</option>
})
class AnmCmdSidebar extends Component {
  componentDidMount() {
    axios.get(`/json/anmcmd/${this.props.match.params.character}.json`)
      .then(res => {
        const posts = Object.keys(res.data).map(ID => {
          return ID
        });
        this.setState({ posts });
      });
  }
  render() {
    return (
    <div className="AnmCmdSidebar">
    <h4>AnmCmd</h4>
    <select>
    {characterButtons}
    </select>
    </div>
  )}
};
export default AnmCmdSidebar;
