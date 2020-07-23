import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

//Sagas root
import rootSagas from "./sagas";

//Reducers root
import rootReducer from "./reducers";

//Midlewares
const sagaMiddleware = createSagaMiddleware();

//Debbuguer
let composeEnhancers = compose;

if (process.env.NODE_ENV) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export default store;
