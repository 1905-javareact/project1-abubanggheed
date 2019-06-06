import React, { PureComponent } from 'react'
import { Reimbursement } from '../../models/reimbursement';

interface IEditButtonProps {
  data: Reimbursement
  openEditReimbursement: (data:Reimbursement) => void
}

export class EditButton extends PureComponent<IEditButtonProps> {

  handleClick = () => {
    this.props.openEditReimbursement(this.props.data)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Edit</button>
    )
  }
}
