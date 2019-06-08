import React, { Component } from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { ReimbursementRow } from './reimbursementrow';
import ReimbursementForm from './form.container';

interface IDashboardProps {
  selfId: number
  reimbursements: Reimbursement[]
  getUserReimbursements: (id: number) => void
}


export class Dashboard extends Component<IDashboardProps> {


  componentDidMount() {
    this.props.getUserReimbursements(this.props.selfId)
  }



  render() {
    let reimbursementsToRender = this.props.reimbursements.map(
      obj => <ReimbursementRow
        key={obj.id} reimbursement={obj}
        showAuthor={false}
        showApproveDeny={false}
        showEditable={false}
        showStatus={true}
      />
    )
    return (
      <div>
        <h4>Dashboard</h4>
        
        {this.props.selfId ? <>
          <h6>Reimbursements</h6>
          <ReimbursementForm />
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
