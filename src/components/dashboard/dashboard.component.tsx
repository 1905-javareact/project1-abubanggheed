import React, { Component } from 'react'

interface IDashboardProps {
  selfId:number
}

export class Dashboard extends Component<IDashboardProps> {

  render() {
    return(
      <div>
        <h4>Dashboard</h4>
        {this.props.selfId ? <>
        <h6>Reimbursements</h6>
        </> : <p>one moment please</p>}
      </div>
    )
  }
}
