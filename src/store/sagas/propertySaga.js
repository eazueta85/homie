import { all, call, put, takeEvery } from "redux-saga/effects";
import axiosClient from "../config/axios";
import Types from "../types";

import {
  getPropertiesStart,
  getPropertiesSuccess,
  getPropertiesError,
} from "../actions/propertyAction";

const dataProperties = () =>
  axiosClient.get("/homes").then((response) => response.data.homes);

function* getPropertiesSaga() {
  try {
    yield put(getPropertiesStart());
    const properties = yield call(dataProperties);
    yield put(getPropertiesSuccess(properties));
  } catch (error) {
    yield put(getPropertiesError(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(Types.GET_PROPERTIES, getPropertiesSaga)]);
}
