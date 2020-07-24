import { all, put, takeEvery } from "redux-saga/effects";
import Types from "../types";

import {
    currentPageSuccess,
    currentPageError,
} from "../actions/paginatePropertyAction";

function* currentPageSaga(data) {
  try {
    const current = data.data
    yield put(currentPageSuccess(current));
  } catch (error) {
    yield put(currentPageError(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(Types.CURRENT_PAGE_PROPERTY, currentPageSaga)]);
}