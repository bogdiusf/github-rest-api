import { combineReducers } from 'redux'

const updateReposReducer = (state = { repos: [], userData: {} }, action) => {
  switch (action.type) {
    case 'SET_REPOS': {
      return { ...state, repos: action.payload }
    }

    case 'SET_USER_DATA': {
      return { ...state, userData: action.payload }
    }
    default: {
      return state
    }
  }
}

const reducers = combineReducers({
  fetchedData: updateReposReducer
})

export default reducers
