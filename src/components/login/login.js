import React, { Component } from 'react';
import SignIn from './signIn';
//import NewRegistration from './newRegistration';
import './login.css'

class Login extends Component {
  render() {
    return (
      <div className="loginContainer">
          <SignIn/>
          <div>"sanet"</div>
          {/* <NewRegistration/> */}
      </div>
    );
  }
}

export default Login;