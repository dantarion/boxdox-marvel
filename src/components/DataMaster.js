import React, { Component } from 'react'
class DataMaster extends Component {
  constructor (props) {
    super(props)
    this.loadedCharacter = this.props.match.params.character
    console.log(this.loadedCharacter+' is loading...')
  }
  loadCharacterData (characterName) {

  }
  render () {
    return (<div>{this.props.children}</div>)
  }
};
export default DataMaster
