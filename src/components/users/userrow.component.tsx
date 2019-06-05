import React, { PureComponent } from 'react'
import { User } from '../../models/user';
import DashboardLink from '../buttons/dashboardlink.container';

interface IUserProps {
  user: User
}

export class UserRow extends PureComponent<IUserProps> {

  render() {
    let usr = this.props.user
    return (
      <tr>
        <td>{usr.username}</td>
        <td>{usr.email}</td>
        <td>{usr.firstName}</td>
        <td>{usr.lastName}</td>
        <td>{usr.role}</td>
        <td><DashboardLink author={usr.userId} /></td>
      </tr>
    )
  }
}
