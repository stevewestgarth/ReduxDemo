import React, { Component } from 'react';
import './App.css';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <h1>Demo Application Using Redux</h1>

        <Persons />
      </div>
    );
  }
}

export default App;
