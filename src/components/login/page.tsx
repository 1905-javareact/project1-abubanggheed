import React, { Component } from 'react'
import { LoginForm } from './form';

export class LoginPage extends Component {


  render() {
    return (
      <div>
        <h3>Log In</h3>
        <LoginForm />
      </div>
    )
  }
}
