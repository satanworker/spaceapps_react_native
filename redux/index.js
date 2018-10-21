import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './saga'

import FireReducer from './Fire'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const rootReducer = combineReducers({
    fire: FireReducer
  })

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore