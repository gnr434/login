import React, { Component } from 'react';
// import logo from './logo.svg';
import background from '../media/images/user8.png';
import '../media/css/App.css';
import { Route, withRouter, Link } from 'react-router-dom';
import $ from 'jquery'
import Success from './success'
var sha256 = require("sha256");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      login:false,
    };
    this.handleChange = this.handleChange.bind(this);
    localStorage.setItem("password", '040e30bdc35c1fc12d0c4688b951eff60079c5baa6eada137dbe36c07695bfa7');
    localStorage.setItem("userName", 'testinguser@gmail.com');
  }
  handleChange(event) {
    this.setState({validLogin:false})
    event.preventDefault();
    let name = $('#username').val();
    let password = $('#password').val();
    let shapkey = $('#password').val() + ' | ' + 'pass123';
    let test = sha256(shapkey);
    let username = $('#username').val();
    let localStr = localStorage.getItem('password');
    let localUsr = localStorage.getItem('userName');
    if (name === localUsr && test === localStr) {
      this.setState({
        login:true,
      })

    }
    else {
      this.setState({
        login:false,
        validLogin:true,
      })
    }
  }

  render() {
    return (
      <div className="App">
      {!this.state.login && 
        <div className="loginbox">
          <img src={background} className="user" alt="user" />
          <h2>Log In here</h2>
          <form>
            <p>Email</p>
            <input type="email" name="" placeholder="Enter Email" id="username" />
            <p>password</p>
            <input type="password" name="" placeholder="Enter Password" id="password" />
            <input type="button" name="" value="LogIn" onClick={this.handleChange} />
          </form>

        </div>
      }
      {this.state.login && 
      <Success />     
      }
      {this.state.validLogin && 
      <div className="valid-msg">Please Enter valid value</div>     
      }
      </div>
    );
  }
}

export default App;
