import { takeEvery, put, call } from 'redux-saga/effects'
import { fireToggleLoading, POST_FIRE } from './FireReducer';

import httpService from '../../services/httpService'

const postFire = function* ({ payload }) {
  yield put(fireToggleLoading(true))
  const res = yield call(httpService.postFire, payload)
  console.log(res, 'res')
  yield put(fireToggleLoading(false))
}

export default function* () {
  yield takeEvery(POST_FIRE, postFire)
}