import { all, put, takeEvery } from "redux-saga/effects";
import Types from "../types";

import {
  activePropertiesSuccess,
  activePropertiesError,
} from "../actions/activePropertyAction";

function* activePropertiesSaga(data) {
  try {
    const activeProperty = data.data
    yield put(activePropertiesSuccess(activeProperty));
  } catch (error) {
    yield put(activePropertiesError(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(Types.ACTIVE_PROPERTY, activePropertiesSaga)]);
}
