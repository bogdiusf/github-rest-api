import { combineReducers } from 'redux'

const updateReposReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_REPOS': {
      return [...action.payload]
    }
    default: {
      return state
    }
  }
}

// const setInputUsernameReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'SET_USER': {
//       return action.payload
//     }
//     default: {
//       return state
//     }
//   }
// }

const setLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOADER': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

// const setMessageReducer = (state = { success: false, message: '' }, action) => {
//   switch (action.type) {
//     case 'SET_RESPONSE': {
//       return {
//         success: action.payload.success,
//         message: action.payload.message
//       }
//     }
//     default: {
//       return state
//     }
//   }
// }

const reducers = combineReducers({
  reposData: updateReposReducer,
  // inputUsername: setInputUsernameReducer,
  isLoading: setLoaderReducer
  // response: setMessageReducer
})

export default reducers
