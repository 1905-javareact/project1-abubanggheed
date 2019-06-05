import React, { Component } from 'react'

interface IApproveButtonProps {
  self:number
  author:number
}

export class ApproveButton extends Component<IApproveButtonProps> {

  render() {
    return (
      <button disabled={this.props.self === this.props.author}>Approve</button>
    )
  }
}
