import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/sagas';
import { rootReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),    
  );

export default store;