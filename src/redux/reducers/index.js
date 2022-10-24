import { combineReducers } from 'redux'

const updateReposReducer = (
  state = { isLoading: false, repos: [] },
  action
) => {
  switch (action.type) {
    case 'SET_REPOS': {
      return { ...state, repos: action.payload }
    }
    case 'SET_LOADER': {
      return { ...state, isLoading: action.payload }
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
