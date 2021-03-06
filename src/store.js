
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

// persisting localStorage
import * as localStorageState from './services/localState.service'
import throttle from 'lodash/throttle'

export const history = createHistory()

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const persistedState = localStorageState.load()

const store = createStore(
  rootReducer,
  persistedState,
  composedEnhancers
)

store.subscribe(throttle(() => {
  localStorageState.save({
    auth: store.getState().auth,
    dogs: store.getState().dogs
  })
}, 1000));

export default store
