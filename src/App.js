import React from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
