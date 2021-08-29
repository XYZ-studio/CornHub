import React from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Video from './components/video';
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
        <Route exact path="/video">
          <Video />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
