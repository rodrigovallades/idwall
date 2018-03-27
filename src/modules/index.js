import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './login'
import dogs from './feed'

export default combineReducers({
  routing: routerReducer,
  auth,
  dogs
})
