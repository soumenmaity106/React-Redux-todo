import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import Posts from './components/Posts'
import Postfrom from './components/Postfrom'
import './App.css';
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="body">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header> <br/>
          <Postfrom />
          <hr/>
         <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
