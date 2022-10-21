import { combineReducers } from 'redux'

const updateReposReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_REPOS': {
      return [...action.payload]
    }
    case 'ADD_REPO': {
      return [...state, { ...action.payload }]
    }
    case 'DELETE_REPO': {
      const targetId = action.payload
      const newRepos = state.filter((item) => item.id !== targetId)
      return [...newRepos]
    }
    default: {
      return state
    }
  }
}

const setInputUsernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_USER': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

const reducers = combineReducers({
  reposData: updateReposReducer,
  inputUsername: setInputUsernameReducer
})

export default reducers
