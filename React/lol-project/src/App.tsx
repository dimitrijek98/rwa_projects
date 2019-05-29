import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navigation from './Components/Shared/Navigation';
import LandingPage from './Components/Pages/LandingPage';
import Footer from './Components/Shared/Footer';
import SearchPage from './Components/Pages/SearchPage';


const App: React.FC = () => {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
