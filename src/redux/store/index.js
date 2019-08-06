import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducers from '../reducers'

const composeEnhancers =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose; // eslint-disable-line

    const enhancer = composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
      )
      const store = createStore(rootReducers, enhancer)

    window.store = store

export default store