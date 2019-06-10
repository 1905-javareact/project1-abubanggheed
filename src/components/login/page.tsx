import React, { PureComponent } from 'react'
import LoginForm from './form.container';

export class LoginPage extends PureComponent {


  render() {
    return (
      <div>
        <h3>Log In</h3>
        <LoginForm />
      </div>
    )
  }
}
