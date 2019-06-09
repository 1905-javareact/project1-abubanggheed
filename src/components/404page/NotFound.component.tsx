import React, { PureComponent } from 'react'

interface INotFoundProps {
  match:any
  history:any
  location:any
}

export class NotFound extends PureComponent<INotFoundProps> {

  handleClick = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <>
      <h1>404</h1>
      <p>You have left the scope of this website</p>
      <button onClick={this.handleClick} className="btn btn-secondary">Back to Home</button>
      </>
    )
  }
}
