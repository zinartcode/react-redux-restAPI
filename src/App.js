import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';

class App extends Component {

componentWillMount() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data[0]));
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Posts />
      </div>
    );
  }
}

export default App;
