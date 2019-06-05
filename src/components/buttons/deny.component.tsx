import React, { Component } from 'react'

interface IDenyButtonProps {
  self:number
  author:number
}

export class DenyButton extends Component<IDenyButtonProps> {

  render() {
    return (
      <button disabled={this.props.self === this.props.author}>Deny</button>
    )
  }
}
