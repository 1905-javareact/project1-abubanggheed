import React, { Component } from 'react'

interface IDashboardLinkProps {
  author:number
  self:number
  history:any
  location:any
  match:any
}

export class DashboardLink extends Component<IDashboardLinkProps> {

  handleClick = () => {
    if(this.props.self === this.props.author) {
      this.props.history.push('/dashboard')
    } else {
      this.props.history.push(`/user/${this.props.author}`)
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className="btn btn-warning">go</button>
    )
  }
}
