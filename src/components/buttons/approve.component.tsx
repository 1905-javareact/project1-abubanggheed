import React, { Component } from 'react'

interface IApproveButtonProps {
  self:number
  author:number
  from:string
  id:number
  approveDenyReimbursement: (id:number, newStatus:number, from:string) => void
}

export class ApproveButton extends Component<IApproveButtonProps> {

  handleClick = () => {
    this.props.approveDenyReimbursement(this.props.id, 2, this.props.from)
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.props.self === this.props.author} className="btn btn-success">Approve</button>
    )
  }
}
