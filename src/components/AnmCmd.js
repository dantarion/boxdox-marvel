import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {characters} from '../data';
import axios from 'axios';
import printf from 'printf';
var characterButtons = characters.map((character,index)=>{
  return <option key={index}>{character}</option>
})
class AnmCmdSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get(`/json/anmcmd/${this.props.match.params.character}.json`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }
  click(){
    console.log("click");
  }
  render() {
    return (
    <div className="AnmCmdSidebar">
    <h4>AnmCmd</h4>
    <select>
    {characterButtons}
    </select>
    <ul>
      {Object.keys(this.state.posts).map(ID =>
        <li key={ID}><NavLink onClick={this.click} activeClassName="active" to={printf("/%s/anmcmd/%s",this.props.match.params.character,ID)}>Entry #{printf("%03X",parseInt(ID,10))}</NavLink></li>
      )}
    </ul>
    </div>
  )}
};
class AnmCmdDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }
  componentDidMount() {

    axios.get(`/json/anmcmd/${this.props.match.params.character}.json`)
      .then(res => {
        const data = res.data[this.props.match.params.id];
        this.setState({ data });
        console.log(data);
      });
  }
  render() {
    return (<div className="group">
              {Object.keys(this.state.data).sort((a, b)=> parseInt(a,10) > parseInt(b,10)).map((Frame,index) =>
                (<div key={index} >
                  <h6>Frame {Frame}</h6>
                  </div>))
              }
            </div>)
  }
}
export {AnmCmdSidebar, AnmCmdDisplay};
