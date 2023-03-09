import './App.css';
import React, { Component } from 'react';
import Main from './components/Main';
import { Header } from './components/Header';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
