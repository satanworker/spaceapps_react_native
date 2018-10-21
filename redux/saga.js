import fireSagas from './Fire/FireSagas'
import { fork } from 'redux-saga/effects'

function* rootSaga () {
  yield fork(fireSagas)
}

export default rootSaga