import React, { PureComponent } from 'react'
import { Reimbursement } from '../../models/reimbursement';

interface IReimbursementRowProps {
  reimbursement: Reimbursement
}

export class ReimbursementRow extends PureComponent<IReimbursementRowProps> {

  render() {
    const data = this.props.reimbursement
    return (
      <tr>
        <td>{data.amount}</td>
        <td>{data.type}</td>
        <td>{data.dateSubmitted}</td>
        <td>{data.dateResolved || 'pending'}</td>
        <td>{data.description}</td>
        <td>{data.resolverName || 'pending'}</td>
        <td>{data.status}</td>
      </tr>
    )
  }
}