import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import Navigation from './Components/Shared/Navigation';
import LandingPage from './Components/Pages/LandingPage';
import Footer from './Components/Shared/Footer';
import SearchPage from './Components/Pages/SearchPage';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from '@redux-saga/core';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getSummoner } from './actions/summonerAction';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
  applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>  
          <Navigation />
            <Route exact path="/" render={() => (
              <LandingPage />
            )}/>
            <Route exact path="/search" render={() => (
              <SearchPage />
            )}/>
            
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
