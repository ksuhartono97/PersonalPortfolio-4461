import React, { Component } from 'react';
import logo from './logo.svg';
import { Header, Input } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header size="huge">Hello, welcome to my portfolio website</Header>
        <Input transparent placeholder="Enter your name here" />
      </div>
    );
  }
}

export default App;
