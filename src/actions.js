import fetch from 'isomorphic-fetch'

export const LOAD_CHARACTER = 'LOAD_CHARACTER'
export const RECEIVE_CHARACTER = 'RECEIVE_CHARACTER'

function loadCharacter (character) {
  return {
    type: LOAD_CHARACTER,
    character
  }
}

function receiveCharacter (character, json) {
  return {
    type: RECEIVE_CHARACTER,
    character,
    json: json,
    receivedAt: Date.now()
  }
}

function fetchPosts (character) {
  return dispatch => {
    dispatch(loadCharacter(character))
    return fetch.get(`/json/anmcmd/${character}.json`)
      .then(res => res.data)
      .then(json => dispatch(receiveCharacter(character, json)))
  }
}

function shouldFetchPosts (state, character) {
  const data = state.dataByCharacter[character]
  if (!data) {
    return true
  } else if (data.isFetching) {
    return false
  } else {
    return data.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}
