import React, { PureComponent } from 'react'
import { User } from '../../models/user';

interface IUserProps {
  user: User
}

export class UserRow extends PureComponent<IUserProps> {

  render() {
    let usr = this.props.user
    return (
      <tr>
        <th>{usr.username}</th>
        <th>{usr.email}</th>
        <th>{usr.firstName}</th>
        <th>{usr.lastName}</th>
        <th>{usr.role}</th>
      </tr>
    )
  }
}
