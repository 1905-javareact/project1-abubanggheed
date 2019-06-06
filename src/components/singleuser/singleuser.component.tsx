import React, { Component } from 'react'
import { User } from '../../models/user';
import { Reimbursement } from '../../models/reimbursement';
import { ReimbursementRow } from '../dashboard/reimbursementrow';

interface ISingleUserProps {
  match:any
  location:any
  history:any
  user:User
  reimbursements: Reimbursement[]
  getUserById: (id:number) => void
  getUserReimbursements: (id:number) => void
}

export class SingleUser extends Component<ISingleUserProps> {

  componentDidMount() {
    this.props.getUserById(this.props.match.params.id)
    this.props.getUserReimbursements(this.props.match.params.id)
  }

  render() {
    const { user, reimbursements } = this.props
    return (
      <div>
        <h4>User Page</h4>
        {user && <div>
          <h6>{`${user.firstName} ${user.lastName} --${user.username}`}</h6>
          <h6>{`${user.role}`}</h6>
          <h6>{`${user.email}`}</h6>
        </div>}
        {reimbursements && reimbursements.length && <table className="table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Type</th>
              <th>Date Submitted</th>
              <th>Date Resolved</th>
              <th>Description</th>
              <th>Resolver</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {reimbursements.map(data => (
              <ReimbursementRow
              key={data.id}
              reimbursement={data}
              showAuthor={false}
              showApproveDeny={false}
              />
            ))}
          </tbody>
        </table>}
      </div>
    )
  }
}
