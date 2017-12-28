import React, { Component } from 'react';
import {Wrapper} from './components/ReactSwipeCard.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Füdr</h1>
        </header>
        <div className="App-intro">
          <Wrapper/>
        </div>
      </div>
    );
  }
}

export default App;
