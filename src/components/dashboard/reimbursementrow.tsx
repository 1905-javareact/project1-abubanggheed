import React, { PureComponent } from 'react'
import { Reimbursement } from '../../models/reimbursement';
import ApproveButton from '../buttons/approve.container';
import DenyButton from '../buttons/deny.container';
import DashboardLink from '../buttons/dashboardlink.container';
import EditButton from '../buttons/edit.container';

interface IReimbursementRowProps {
  reimbursement: Reimbursement
  showAuthor:boolean
  showApproveDeny:boolean
  showEditable:boolean
}

export class ReimbursementRow extends PureComponent<IReimbursementRowProps> {

  render() {
    const data = this.props.reimbursement
    return (
      <tr>
        {this.props.showAuthor && <td>{data.authorName}</td>}
        <td>{data.amount}</td>
        <td>{data.type}</td>
        <td>{data.dateSubmitted}</td>
        <td>{data.dateResolved || 'pending'}</td>
        <td>{data.description}</td>
        <td>{data.resolverName || 'pending'}</td>
        <td>{data.status}</td>
        {this.props.showAuthor && <td><DashboardLink author={data.authorId} /></td>}
        {this.props.showApproveDeny && <td><ApproveButton from={this.props.showAuthor ? 'all' :'user'} id={data.id} author={data.authorId} /></td>}
        {this.props.showApproveDeny && <td><DenyButton from={this.props.showAuthor? 'all' :'user'} id={data.id} author={data.authorId} /></td>}
        {this.props.showEditable && <td><EditButton data={data} /></td>}
      </tr>
    )
  }
}