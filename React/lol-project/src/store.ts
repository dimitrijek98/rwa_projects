import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/sagas';
import { rootReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),    
);

export default store;