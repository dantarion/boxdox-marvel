import React, { Component } from 'react';
import {characters} from '../data';
import axios from 'axios';
var characterButtons = characters.map((character,index)=>{
  return <option key={index}>{character}</option>
})
class AnmCmdSidebar extends Component {
  componentDidMount() {
    axios.get(`http://www.reddit.com/r/${this.props.match.params.character}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
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
