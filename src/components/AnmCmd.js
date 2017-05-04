import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {commandDB} from '../data';
import axios from 'axios';
import printf from 'printf';

function getClassNamesForEntry(entry){
  var classes = {};
  Object.keys(entry).forEach((frame)=>{

    var commands = entry[frame];
    commands.forEach((command) => {
      ;
      if(command.group === 1 && command.id === 0x99){
        //classes["attack"] = true;
      }
    })
  })
  return Object.keys(classes).join(" ");
}
function getIconsForEntry(entry){
  var icons = {};
  Object.keys(entry).forEach((frame)=>{

    var commands = entry[frame];
    commands.forEach((command) => {

      if(command.group === 0 && command.id === 0x1C){
        icons["refresh"] = "loops";
      }
      if(command.group === 1 && command.id === 0x99){
        icons["rocket"] = "hasHitbox";
      }
      if(command.group === 1 && command.id === 0xA1 && command.params[1] === 0){
        icons["arrow-right"] = "returnToStand";
      }
      if(command.group === 1 && command.id === 0xA1 && command.params[1] === 1){
        icons["arrow-down"] = "returnToCrouch";
      }
      if(command.group === 1 && command.id === 0xA1 && command.params[1] === 2){
        icons["arrow-up"] = "returnToAir";
      }
      if(command.group === 3 && command.id === 0x30){
        icons["circle-thin"] = "projectile";
      }
    })
  })
  return Object.keys(icons);
}

class AnmCmdSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

  }
  componentDidMount() {
    this.loadCharacter(this.props.match.params.character);
  }
  loadCharacter(character){
    axios.get(`/json/anmcmd/${character}.json`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }
  render() {
    return (
    <div className="AnmCmdSidebar">
    <h4>{this.props.match.params.character}</h4>

    <ul style={{backgroundImage:`url(/img/rip/b_${this.props.match.params.character}00_BM_HQ_NOMIP.dds.png)`}}>
      {Object.keys(this.state.posts).map((ID) =>
        <li key={ID}><NavLink className={getClassNamesForEntry(this.state.posts[ID])} activeClassName="active" to={printf("/%s/anmcmd/%02X",this.props.match.params.character,ID)}>
        Entry #{printf("%03X",parseInt(ID,10))}
        {getIconsForEntry(this.state.posts[ID]).map((icon,index)=>{
          return (<span key={index} className={"fa fa-"+icon}> </span>)
        })}
      </NavLink></li>
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
    axios.get(`/json/anmcmd/${this.props.match.params.character}.json`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      });
  }
  render() {
    var ID = parseInt(this.props.match.params.id,16);
    if(!this.state.data[ID]){
      return (<div>Loading...</div>)
    }
    return (<div className="AnmCmdDisplay">
              {Object.keys(this.state.data[ID]).sort((a, b)=> parseInt(a,10) - parseInt(b,10)).map((Frame,index) =>

                (<div key={index} >
                  <h4>Frame {Frame}</h4>
                  {
                    this.state.data[ID][Frame].map((cmd,index)=>{
                    var commandName = printf("%02X_%02X",cmd.group,cmd.id);
                    var paramsText = cmd.params.map((a)=>{
                      if(typeof a !== "string"){
                        return printf("0x%X",a);
                      } else{
                        return printf("'%s'",a);
                      }
                    }).join(", ");
                    var className = printf("command module%02X",cmd.group);
                    if(commandDB[commandName] && commandDB[commandName].name){
                        commandName = commandDB[commandName].name;
                    } else{
                      commandName = "_"+commandName;
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
