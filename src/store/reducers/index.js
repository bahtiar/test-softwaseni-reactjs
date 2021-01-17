import { combineReducers } from 'redux'
import userReducer from './githubReducer'



export default combineReducers({
  github: userReducer
})