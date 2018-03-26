import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './login'

export default combineReducers({
  routing: routerReducer,
  auth
})
