import { all } from 'redux-saga/effects';
import PropertySaga from '../sagas/propertySaga';

export default function* rootSaga() {
    yield all([
        PropertySaga(),
    ]);
}