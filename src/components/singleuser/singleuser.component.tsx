import React, { Component } from 'react'
import { User } from '../../models/user';
import { Reimbursement } from '../../models/reimbursement';
import { ReimbursementRow } from '../dashboard/reimbursementrow';

interface ISingleUserProps {
  match:any
  location:any
  history:any
  user:User
  self:number
  usersLength:number
  reimbursements: Reimbursement[]
  getUserById: (id:number) => void
  getUserReimbursements: (id:number) => void
  getUsers: () => void
}

export class SingleUser extends Component<ISingleUserProps> {

  componentDidMount() {
    this.props.getUserById(this.props.match.params.id)
    this.props.getUserReimbursements(this.props.match.params.id)
    if(!this.props.usersLength) {
      this.props.getUsers()
    }
  }

  render() {
    const { user, reimbursements } = this.props
    return (
      <div>
        {user && <div>
          <h4>{`${user.firstName} ${user.lastName} --${user.username}`}</h4>
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
              showEditable={true}
              showStatus={true}
              />
            ))}
          </tbody>
        </table>}
      </div>
    )
  }
}
