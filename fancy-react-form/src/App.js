import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FormDesigner from './FormDesigner.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormDesigner />
      </div>
    );
  }
}

export default App;
