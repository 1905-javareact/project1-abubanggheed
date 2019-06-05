import React, { Component } from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { ReimbursementRow } from './reimbursementrow';
import ReimbursementForm from './form.container';

interface IDashboardProps {
  selfId: number
  reimbursements: Reimbursement[]
  getUserReimbursements: (id: number) => void
}

interface IDashboardState {
  editMode: boolean
}

export class Dashboard extends Component<IDashboardProps, IDashboardState> {

  state = {
    editMode: false
  }

  componentDidMount() {
    if (this.props.selfId && !this.props.reimbursements.length) {
      this.props.getUserReimbursements(this.props.selfId)
    }
  }

  handleClick = () => {
    this.setState({editMode: !this.state.editMode})
  }

  render() {
    let reimbursementsToRender = this.props.reimbursements.map(
      obj => <ReimbursementRow
      key={obj.id} reimbursement={obj}
      showAuthor={false}
      showApproveDeny={false}
      />
    )
    return (
      <div>
        <h4>Dashboard</h4>
        <button onClick={this.handleClick}>{this.state.editMode ? "Close" : "New"}</button>
        {this.state.editMode && <ReimbursementForm />}
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
