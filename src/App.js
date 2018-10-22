import React, { Component } from 'react';
import './index.css';
import HomePage from './components/Homepage'
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Route exact path='/' render={() => (<HomePage />)} />
      </div>
    );
  }
}

export default App;
