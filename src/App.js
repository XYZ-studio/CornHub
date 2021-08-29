import React from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Video from './components/video';
import Picture from './components/picture';
import {
  HashRouter as Router,
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
        <Route exact path="/picture">
          <Picture />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
