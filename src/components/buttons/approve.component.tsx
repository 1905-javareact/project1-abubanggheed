import React, { PureComponent } from 'react'

interface IApproveButtonProps {
  self:number
  author:number
  from:string
  id:number
  approveDenyReimbursement: (id:number, newStatus:number, from:string) => void
}

export class ApproveButton extends PureComponent<IApproveButtonProps> {

  handleClick = () => {
    this.props.approveDenyReimbursement(this.props.id, 2, this.props.from)
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.props.self === this.props.author} className="btn btn-success">Approve</button>
    )
  }
}
