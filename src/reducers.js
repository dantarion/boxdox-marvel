import { combineReducers } from 'redux'
import {
  LOAD_CHARACTER, RECEIVE_CHARACTER
} from '../actions'

function selectedCharacter (state = '', action) {
  switch (action.type) {
    case LOAD_CHARACTER:
      return action.character
    default:
      return state
  }
}

function characterData (state = {
  isFetching: false,
  didInvalidate: false,
  data: {}
}, action) {
  switch (action.type) {
    case LOAD_CHARACTER:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_CHARACTER:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.posts
      })
    default:
      return state
  }
}

function dataByCharacter (state = {}, action) {
  switch (action.type) {
    case LOAD_CHARACTER:
    case RECEIVE_CHARACTER:
      return Object.assign({}, state, {
        [action.character]: characterData(state[action.character], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  dataByCharacter,
  selectedCharacter
})

export default rootReducer
