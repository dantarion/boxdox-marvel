import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {characters} from '../data';
import axios from 'axios';
import printf from 'printf';
class AnmCmdSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
    this.selectChange = this.selectChange.bind(this);
  }
  componentDidMount() {
    axios.get(`/json/anmcmd/${this.props.match.params.character}.json`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }
  selectChange(event){
    this.props.history.push("/"+event.target.value+"/anmcmd");
  }
  render() {
    return (
    <div className="AnmCmdSidebar">
    <h4>AnmCmd</h4>
    <select value={this.props.match.params.character} onChange={this.selectChange}>
    {characters.map((character,index)=>{
      return (<option key={index}>{character}</option>);
    })}
    </select>
    <ul>
      {Object.keys(this.state.posts).map(ID =>
        <li key={ID}><NavLink activeClassName="active" to={printf("/%s/anmcmd/%s",this.props.match.params.character,ID)}>Entry #{printf("%03X",parseInt(ID,10))}</NavLink></li>
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
  componentWillMount() {
    console.log("AY");
    axios.get(`/json/anmcmd/${this.props.match.params.character}.json`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
        console.log(data);
      });
  }
  render() {
    if(!this.state.data[this.props.match.params.id]){
      return (<div>Loading...</div>)
    }
    return (<div className="AnmCmdDisplay">
              {Object.keys(this.state.data[this.props.match.params.id]).sort((a, b)=> parseInt(a,10) > parseInt(b,10)).map((Frame,index) =>
                (<div key={index} >
                  <h4>Frame {Frame}</h4>
                  {this.state.data[this.props.match.params.id][Frame].map((cmd,index)=>
                    (<div key={index} className="command">{printf("cmd_%02X_%02X(",cmd.group,cmd.id)+cmd.params.map((a)=>printf("0x%X",a)).join(",")})</div>)
                  )}
                  </div>)
              )}
            </div>)
  }
}
export {AnmCmdSidebar, AnmCmdDisplay};
