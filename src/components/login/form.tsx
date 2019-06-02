import React, { Component } from 'react';

interface ILoginFormProps {
  username:string
  password:string
  errorMessage:string
  updateField: (field:string, value:string) => void
}

export class LoginForm extends Component<ILoginFormProps, any> {

  handleSubmit = event => {
    event.preventDefault()
  }

  handleChange = field => event => {
    this.props.updateField(field, event.target.value)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange('username')} placeholder="username" value={this.props.username} />
          <br />
          <input type="password" onChange={this.handleChange('password')} placeholder="password" value={this.props.password} />
          <br />
          <input type="submit" value="Log In" />
        </form>
        {JSON.stringify(this.props)}
      </>
    )
  }

}
