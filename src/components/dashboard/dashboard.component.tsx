import React, { Component } from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { ReimbursementRow } from './reimbursementrow';

interface IDashboardProps {
  selfId: number
  reimbursements: Reimbursement[]
  getUserReimbursements: (id: number) => void
}

export class Dashboard extends Component<IDashboardProps> {

  componentDidMount() {
    if(this.props.selfId) {
      this.props.getUserReimbursements(this.props.selfId)
    }
  }

  render() {
    let reimbursementsToRender = this.props.reimbursements.sort((r1, r2) => (
      r1.statusId < r2.statusId ? 1 : 0
    )).map(obj => <ReimbursementRow key={obj.id} reimbursement={obj} />)
    return (
      <div>
        <h4>Dashboard</h4>
        {this.props.selfId ? <>
          <h6>Reimbursements</h6>
          {this.props.reimbursements.length ? <table className="table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Type</th>
                <th>Date Submitted</th>
                <th>Date Resolved</th>
                <th>Description</th>
                <th>Resolver</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reimbursementsToRender}
            </tbody>
          </table>
            : <p>getting data. . .</p>}
        </> : <p>one moment please</p>}
      </div>
    )
  }
}
