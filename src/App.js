import React, { Component } from 'react';
import './App.css';
import Login from './components/login/login';
import NewRegistration from './components/login/newRegistration';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Login/>
       <NewRegistration/>
      </div>
    );
  }
}

export default App;