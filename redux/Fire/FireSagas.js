import { takeEvery, put } from 'redux-saga/effects'
import { fireToggleLoading, POST_FIRE } from './FireReducer';

const postFire = function* ({ payload }) {
  console.log('testSaga')
  yield put(fireToggleLoading(true))
  console.log(payload, 'payload')
  yield put(fireToggleLoading(false))
}

export default function* () {
  yield takeEvery(POST_FIRE, postFire)
}