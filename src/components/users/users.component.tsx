import React, { PureComponent } from 'react'
import { User } from '../../models/user';
import { UserRow } from './userrow.component';

interface IUserProps {
  users: User[]
  getUsers: () => void
}

export class UsersPage extends PureComponent<IUserProps> {

  componentDidMount() {
    if(!this.props.users.length) {
      this.props.getUsers()
    }
  }

  render() {
    return (
      <div>
        <h4>Users</h4>
        {this.props.users.length ? <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => <UserRow key={user.userId} user={user} />)}
          </tbody>
        </table> : <p>one moment please</p>}
      </div>
    )
  }
}
