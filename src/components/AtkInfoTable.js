import React, {Component} from 'react'
import axios from 'axios'
class AtkInfoTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: {}
    }
  }
  componentWillMount () {
    console.log('AY')
    axios.get(`/json/atkinfo/${this.props.match.params.character}.json`).then(res => {
      const data = res.data
      this.setState({data})
    })
  }
  render () {
    var header = ['unk0', 'startup', 'unk8', 'unkC', 'unk10', 'unk14', 'unk18', 'multihit', 'unk20',
      'unk24', 'unk28', 'unk2C', 'unk30', 'unk34', 'unk38', 'flags1', 'flags2', 'unk44', 'hitstunEffect',
      'attackLevel', 'unk50', 'unk54', 'unk58', 'unk5C', 'damage', 'damageScaling', 'damageMultiplier',
      'unk6C', 'unk70', 'meterGain', 'unk78', 'unk7C', 'unk80', 'unk84', 'unk88', 'unk8C', 'unk90', 'unk94',
      'unk98', 'enemyPushback', 'corneredPushback', 'unkA4', 'unkA8', 'unkAC', 'unkB0', 'unkB4', 'unkB8',
      'unkBC', 'unkC0', 'hitstop', 'unkC8', 'unkCC', 'unkD0', 'juggleLength', 'unkD8', 'unkDC', 'juggleSpeed',
      'unkE4', 'unkE8', 'unkEC', 'unkF0', 'unkF4', 'unkF8', 'unkFC', 'unk100', 'unk104', 'unk108', 'unk10C',
      'unk110', 'unk114', 'unk118', 'unk11C', 'unk120', 'unk124', 'unk128', 'unk12C', 'unk130', 'unk134',
      'unk138', 'unk13C', 'unk140', 'unk144', 'unk148', 'unk14C', 'hitSfxCategory', 'hitSfx', 'unk158',
      'unk15C', 'unk160', 'unk164', 'unk168', 'unk16C', 'unk170', 'unk174', 'unk178', 'unk17C', 'unk180',
      'unk184', 'unk188']

    if (!this.state.data[0]) {
      return <div>Loading</div>
    }
    return (
      <div>
        <table className="table table-condensed table-bordered" width="100%" style={{fontSize: '12px'}}>
          <thead>
            <tr>
              <td>ID</td>
              {header.map((index) => <td key={index}>{index}</td>)}}
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.data).map((ID) => {
              return (
                <tr key={ID}>
                  <td>{ID}</td>
                  {header.map((index) => <td key={index}>{this.state.data[ID][index]}</td>)}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export {AtkInfoTable}
