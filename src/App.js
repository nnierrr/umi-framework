import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import AuthPage from './pages/auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthPage} />
      </Switch>
    </Router>
  );
}

export default App;
