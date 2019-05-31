import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import printf from 'printf'
import 'prismjs/themes/prism-twilight.css'
import { amnNames, commandDB } from '../data'
var Prism = require('prismjs')
function getClassNamesForEntry (entry) {
  var classes = {}
  Object.keys(entry).forEach((frame) => {
    var commands = entry[frame]
    commands.forEach((command) => {
      ;
      if (command.group === 1 && command.id === 0x99) {
        // classes["attack"] = true;
      }
    })
  })
  return Object.keys(classes).join(' ')
}
function getIconsForEntry (entry) {
  var icons = {}
  Object.keys(entry).forEach((frame) => {
    var commands = entry[frame]
    commands.forEach((command) => {
      if (command.group === 0 && command.id === 0x1C) {
        icons['refresh'] = 'loops'
      }
      if (command.group === 1 && command.id === 0x99) {
        icons['rocket'] = 'hasHitbox'
      }
      if (command.group === 1 && command.id === 0xA1 && command.params[1] === 0) {
        icons['arrow-right'] = 'returnToStand'
      }
      if (command.group === 1 && command.id === 0xA1 && command.params[1] === 1) {
        icons['arrow-down'] = 'returnToCrouch'
      }
      if (command.group === 1 && command.id === 0xA1 && command.params[1] === 2) {
        icons['arrow-up'] = 'returnToAir'
      }
      if (command.group === 3 && command.id === 0x30) {
        icons['circle-thin'] = 'projectile'
      }
    })
  })
  return Object.keys(icons)
}

class AnmCmdSidebar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }
  componentDidMount () {
    this.loadCharacter(this.props.match.params.character)
  }
  loadCharacter (character) {
    axios.get(`/json/anmcmd/${character}.json`)
      .then(res => {
        const posts = res.data
        this.setState({ posts })
      })
  }
  render () {
    return (
    <div className="AnmCmdSidebar">
    <h4>{this.props.match.params.character}</h4>

    <ul style={{backgroundImage: `url(/img/rip/b_${this.props.match.params.character}00_BM_HQ_NOMIP.dds.png)`}}>
      {Object.keys(this.state.posts).map((ID) =>
        <li key={ID}><NavLink className={getClassNamesForEntry(this.state.posts[ID])} activeClassName="active" to={printf('/%s/anmcmd/%02X', this.props.match.params.character, ID)}>
        {amnNames[ID] ? amnNames[ID] : printf('UNKNOWN #%03X', parseInt(ID, 10))}
        {getIconsForEntry(this.state.posts[ID]).map((icon, index) => {
          return (<span key={index} className={'fa fa-' + icon}> </span>)
        })}
      </NavLink></li>
      )}
    </ul>
    </div>
    )
  }
};
class AnmCmdDisplay extends Component {
  constructor (props) {
    super(props)

    this.state = {
      js: {}
    }
  }
  componentWillMount () {
    axios.get(`/json/anmcmd/${this.props.match.params.character}.json`)
      .then(res => {
        const anmcmd = res.data
        this.setState({ anmcmd })
      })
    axios.get(`/data/${this.props.match.params.character}/baseact.cba.json`)
        .then(res => {
          const cba = res.data
          this.setState({ cba })
        })
    axios.get(`/data/${this.props.match.params.character}/anmchr.anm.js`)
      .then(res => {
        const js = {}
        res.data.split('});\n').forEach((str) => {
          js[parseInt(str.substring(15, 18), 16)] = str + '});\n'
        })
        this.setState({ js })
      })
  }
  render () {
    var ID = parseInt(this.props.match.params.id, 16)
    if (!this.state.js[ID]) {
      return (<div>Loading...</div>)
    }

    return (<div className="AnmCmdDisplay">
      {Object.keys(this.state.cba || [])
        .map((key) => this.state.cba[key])
        .filter((entry) => entry.actionIndex === ID)
        .map((entry) => <div className="cbaLink" key={entry.id}><h5>{entry.state} {entry.direction} {entry.button} <span className="small">baseact.cba#{entry.id}</span></h5></div>
      )}
      <pre>
        <code className="language-javascript" dangerouslySetInnerHTML={{__html: Prism.highlight(this.state.js[ID] || '', Prism.languages.javascript)}}/>
      </pre>
            </div>)
  }
}
export {AnmCmdSidebar, AnmCmdDisplay}
