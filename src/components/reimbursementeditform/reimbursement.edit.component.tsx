import React, { Component } from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { User } from '../../models/user';

interface IReimbursementEdit {
  open:boolean
  data: Reimbursement
  users: User[]
  cancleEditReimbursement: () => void
}

export class ReimbursementEdit extends Component<IReimbursementEdit, any> {

  handleCancle = () => {
    this.props.cancleEditReimbursement()
  }

  render() {
    return (
      <dialog open={this.props.open}>
        <h6>Edit Reimbursement</h6>
        {JSON.stringify(this.props, null, 2)}
        <button onClick={this.props.cancleEditReimbursement}>Cancel</button>
      </dialog>
    )
  }
}
