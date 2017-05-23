import React, {Component} from 'react'
import axios from 'axios'
class BaseActTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: {}
    }
  }
  componentWillMount () {
    console.log('AY')
    axios.get(`/data/${this.props.match.params.character}/baseact.cba.json`).then(res => {
      const data = res.data
      this.setState({data})
    })
  }
  render () {


    if (!this.state.data) {
      return <div>Loading</div>
    }
    var header = Object.keys(this.state.data["0x0"]||{})
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
                  {header.map((index) => <td key={index}>{this.state.data[ID][index]||""}</td>)}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export {BaseActTable}
