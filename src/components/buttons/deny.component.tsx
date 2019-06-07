import React, { Component } from 'react'

interface IDenyButtonProps {
  self:number
  author:number
  from:string
  id:number
  approveDenyReimbursement: (id:number, newStatus:number, from:string) => void
}

export class DenyButton extends Component<IDenyButtonProps> {

  handleClick = () => {
    this.props.approveDenyReimbursement(this.props.id, 3, this.props.from)
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.props.self === this.props.author}>Deny</button>
    )
  }
}
