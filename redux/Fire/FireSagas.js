import { takeEvery, put, call } from 'redux-saga/effects'
import { fireToggleLoading, POST_FIRE } from './FireReducer';

import httpService from '../../services/httpService'

const postFire = function* ({ payload }) {
  yield put(fireToggleLoading(true))
  try {
    const res = yield call(httpService.postFire, payload)
    console.log(res, 'res', payload)
    yield put(fireToggleLoading(false))
  } catch(e) {
    yield put(fireToggleLoading(false))
  }
  yield put(fireToggleLoading(false))
}

export default function* () {
  yield takeEvery(POST_FIRE, postFire)
}