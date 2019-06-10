import React, { PureComponent } from 'react';

interface ILoginFormProps {
  username:string
  password:string
  errorMessage:string
  updateField: (field:string, value:string) => void
  login: (username:string, password:string) => void
}

export class LoginForm extends PureComponent<ILoginFormProps, any> {

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.props.username, this.props.password)
  }

  handleChange = field => event => {
    this.props.updateField(field, event.target.value)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange('username')} placeholder="username" value={this.props.username} id="username" />
          <br />
          <input type="password" onChange={this.handleChange('password')} placeholder="password" value={this.props.password} id="password" />
          <br />
          <input className="btn-primary" type="submit" value="Log In" />
        </form>
        <h4>{this.props.errorMessage}</h4>
      </>
    )
  }

}
