import React, {PropTypes} from 'react'
import { NavLink } from 'react-router-dom'
import printf from 'printf'

function getClassNamesForEntry (entry) {
  return 'TODO'
}
function getNiceNameForEntry (entry) {
  /*
  {amnNames[ID]
    ? amnNames[ID]
    : printf('UNKNOWN #%03X', parseInt(ID, 10))}
  */
  return 'TODO'
}
function getIconsForEntry(entry){
  /*
  return (
    <span key={index} className={'fa fa-' + icon}></span>
  )
  */
}
const SideBarEntry = ({entry}) => (
  <li>
    <NavLink
      className={getClassNamesForEntry(entry)}
      activeClassName="active" to={printf('/%s/anmcmd/%02X', this.props.match.params.character, 0)}>
      <span>{getNiceNameForEntry}</span>
      <span>{getIconsForEntry}</span>
    </NavLink>
  </li>
)

const Sidebar = ({entries, match}) => (
  <div className="AnmCmdSidebar">
    <h4>{match.params.character}blah</h4>
    <ul style={{
      backgroundImage: `url(/img/rip/b_${match.params.character}00_BM_HQ_NOMIP.dds.png)`
    }}>
    </ul>
  </div>
)

export default Sidebar
