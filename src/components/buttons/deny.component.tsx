import React, { PureComponent } from 'react'

interface IDenyButtonProps {
  self:number
  author:number
  from:string
  id:number
  approveDenyReimbursement: (id:number, newStatus:number, from:string) => void
}

export class DenyButton extends PureComponent<IDenyButtonProps> {

  handleClick = () => {
    this.props.approveDenyReimbursement(this.props.id, 3, this.props.from)
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.props.self === this.props.author} className="btn btn-danger">Deny</button>
    )
  }
}
