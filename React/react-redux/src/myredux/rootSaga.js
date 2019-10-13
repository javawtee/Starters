import { all } from 'redux-saga/effects'

// IMPORT SAGAS HERE
import exampleSaga from './sagas/exampleSaga'


export default function* rootSaga(){
    //yield all([backgroundSaga()])
    yield all([exampleSaga()])
}