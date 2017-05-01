import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {characters,commandDB} from '../data';
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
        <li key={ID}><NavLink activeClassName="active" to={printf("/%s/anmcmd/%02X",this.props.match.params.character,ID)}>Entry #{printf("%03X",parseInt(ID,10))}</NavLink></li>
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
    var ID = parseInt(this.props.match.params.id,16);
    if(!this.state.data[ID]){
      return (<div>Loading...</div>)
    }
    return (<div className="AnmCmdDisplay">
              {Object.keys(this.state.data[ID]).sort((a, b)=> parseInt(a,10) > parseInt(b,10)).map((Frame,index) =>
                (<div key={index} >
                  <h4>Frame {Frame}</h4>
                  {this.state.data[ID][Frame].map((cmd,index)=>{
                    var commandName = printf("%02X_%02X",cmd.group,cmd.id);
                    var paramsText = cmd.params.map((a)=>printf("0x%X",a)).join(", ");
                    var className = printf("command module%02X",cmd.group);
                    if(commandDB[commandName] && commandDB[commandName].name){
                        commandName = commandDB[commandName].name;
                    } else{
                      className += " auto"
                    }
                    return (<div key={index} className={className}>{printf("%s(%s)",commandName,paramsText)}</div>);
                  }

                  )}
                  </div>)
              )}
            </div>)
  }
}
export {AnmCmdSidebar, AnmCmdDisplay};
