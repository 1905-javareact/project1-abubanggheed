import React, { Component } from 'react';

export class LoginForm extends Component<any, any> {


  render() {
    return (
      <>
        <form>
          <input type="text" placeholder="username" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <input type="submit" value="Log In" />
        </form>
      </>
    )
  }

}
