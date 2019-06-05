import React, { Component } from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { ReimbursementRow } from '../dashboard/reimbursementrow';

interface IRequestPageProps {
  reimbursements: Reimbursement[]
  getStatusReimbursements: (i: number) => void
}

export class RequestsPage extends Component<IRequestPageProps> {

  state = {
    type: 1
  }

  handleChange = event => {
    let { value } = event.target
    this.setState({
      type: +value
    })
    this.props.getStatusReimbursements(value)
  }

  componentDidMount() {
    this.props.getStatusReimbursements(1)
  }

  render() {
    return (
      <div>
        <h4>Requests</h4>
        <select onChange={this.handleChange} value={this.state.type}>
          <option value={1}>Pending</option>
          <option value={2}>Approved</option>
          <option value={3}>Denied</option>
        </select>
        {this.props.reimbursements.length ? <table className="table">
          <thead>
            <tr>
              <th>Author</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date Submitted</th>
              <th>Date Resolved</th>
              <th>Description</th>
              <th>Resolver</th>
              <th>Status</th>
              <th>Dashboard</th>
              {this.state.type === 1 && <th>Approve</th>}
              {this.state.type === 1 && <th>Deny</th>}
            </tr>
          </thead>
          <tbody>
            {this.props.reimbursements.map(data => (
              <ReimbursementRow
              key={data.id}
              reimbursement={data}
              showAuthor={true}
              showApproveDeny={this.state.type === 1}
              />
            ))}
          </tbody>
        </table> : <p>one moment please</p>}
      </div>
    )
  }
}
