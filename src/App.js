import React, { Component } from 'react';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/postForm';

class App extends Component {
  render() {

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>  */}
        <PostForm />
        <hr/>
        <Posts />
      </div>
    );
  }
}

export default App;
