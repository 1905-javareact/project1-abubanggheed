import React, { PureComponent } from 'react'
import { Reimbursement } from '../../models/reimbursement';

interface IEditButtonProps {
  data: Reimbursement
  author: number
  self: number
  openEditReimbursement: (data:Reimbursement) => void
}

export class EditButton extends PureComponent<IEditButtonProps> {

  handleClick = () => {
    this.props.openEditReimbursement(this.props.data)
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.props.self === this.props.author} className="btn btn-secondary">Edit</button>
    )
  }
}
