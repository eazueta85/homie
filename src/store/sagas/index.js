import { all } from 'redux-saga/effects';
import PropertySaga from './propertySaga';
import ActivePropertySaga from './activePropertySaga'
import PaginatePropertySaga from './paginatePropertySaga'

export default function* rootSaga() {
    yield all([
        PropertySaga(),
        ActivePropertySaga(),
        PaginatePropertySaga(),
    ]);
}