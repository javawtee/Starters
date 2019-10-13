import { all, takeLatest, call, put } from 'redux-saga/effects'
import types from '../types'
import services from 'services/exampleService'

function* GET_GREETING(payload) {
    yield call(services.fakeCall)
    yield put({
        type: types.FAKE_ACTION,
        payload: `HELLO ${payload.name}`
    })
}

export default function* exampleSaga() {
    yield all([
        takeLatest(types.GET_GREETING, GET_GREETING),
    ])
}