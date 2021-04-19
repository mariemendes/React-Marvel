import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login-pages/LoginPage';
import Character from './pages/characters/Characters';

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login}></Route>
      </div>
      <div>
        <Route path="/characters" component={Character}></Route>
      </div>
    </Router>
  );
}
