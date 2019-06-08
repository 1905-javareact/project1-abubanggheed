import React, { Component } from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { User } from '../../models/user';

interface IReimbursementEdit {
  open: boolean
  data: Reimbursement
  users: User[]
  self: Number
  cancleEditReimbursement: () => void
  updateEditReimbursement: (key: string, value: any) => void
  sendEditReimbursement: (fields: any) => void
  getUsers: () => void
}

export class ReimbursementEdit extends Component<IReimbursementEdit, any> {

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getUsers()
    }
  }

  handleCancle = () => {
    this.props.cancleEditReimbursement()
  }

  handleChange = (key: string) => event => {
    let value = event.target.value
    this.props.updateEditReimbursement(key, value)
  }

  handleSubmit = event => {
    event.preventDefault();
    let { data } = this.props
    this.props.sendEditReimbursement({
      reimbursementId: data.id,
      author: data.authorId,
      amount: data.amount,
      dateSubmitted: data.dateSubmitted,
      dateResolved: +data.statusId === 1 ? null : data.dateResolved,
      description: data.description,
      resolver: +data.statusId === 1 ? null : data.resolverId,
      status: data.statusId,
      type: data.typeId
    })
  }

  render() {
    let { data, open, users, self } = this.props
    let resolvers = users.filter(user => user.role === 'finance-manager').filter(usr => (
      +usr.userId !== (data ? +data.authorId: 0)
    ))
    return (
      <>
        {data && <dialog open={open}>
          <h6>Edit Reimbursement</h6>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange('amount')} value={data.amount} type="text" />
            <br />
            <select onChange={this.handleChange('authorId')} value={data.authorId}>
              {users.filter(user => user.userId !== self).map(user => (
                <option value={user.userId} key={user.userId}>{user.username}</option>
              ))}
            </select>
            <br />
            <input onChange={this.handleChange('dateSubmitted')} value={data.dateSubmitted.slice(0, 10)} type="date" />
            <br />
            <select value={data.statusId} onChange={this.handleChange('statusId')}>
              <option value={1}>Pending</option>
              <option value={2}>Approved</option>
              <option value={3}>Denied</option>
            </select>
            {data.statusId}
            {+data.statusId !== 1 && <>
              <input onChange={this.handleChange('dateResolved')} value={data.dateResolved ? data.dateResolved.slice(0, 10) : ''} type="date" /><br />
              <select onChange={this.handleChange('resolverId')} value={data.resolverId || undefined}>
                <option value={undefined}>--please select one--</option>
                {resolvers.map(resolver => (
                  <option value={resolver.userId} key={resolver.userId}>{resolver.username}</option>
                ))}
              </select><br /></>}
            <textarea onChange={this.handleChange('description')} value={data.description} />
            <br />
            <select onChange={this.handleChange('typeId')} value={data.typeId}>
              <option value={1}>Lodging</option>
              <option value={2}>Travel</option>
              <option value={3}>Food</option>
              <option value={4}>Other</option>
            </select>
            <br />
            <input type="submit" value="Update Fields" />
          </form>
          <button onClick={this.props.cancleEditReimbursement}>Cancel</button>
        </dialog>}
      </>
    )
  }
}
