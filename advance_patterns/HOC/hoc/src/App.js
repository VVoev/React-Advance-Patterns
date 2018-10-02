import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfPeople from './containers/ListOfPeople';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListOfPeople />
      </div>
    );
  }
}

export default App;
