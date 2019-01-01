import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppNavbar from './components/layout/AppNavbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <AppNavbar />
            <h1>Hello World</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
