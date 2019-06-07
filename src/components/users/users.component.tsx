import React, { PureComponent } from 'react'
import { User } from '../../models/user';
import { UserRow } from './userrow.component';
import { UserEditDialog } from './useredit.component';

interface IUserProps {
  users: User[]
  selfRole: string
  getUsers: () => void
  editUser: (usr:any) => void
}

interface IUserState {
  editMode: boolean
  currentUser: any
}

export class UsersPage extends PureComponent<IUserProps, IUserState> {

  state = {
    editMode: false,
    currentUser: {
      userId: 0,
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      role: '',
    }
  }

  openEdit = (user: User) => () => {
    this.setState({
      editMode: true,
      currentUser: {
        userId: user.userId,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      }
    })
  }

  closeEdit = () => {
    this.setState({
      ...this.state,
      editMode: false,
    })
  }

  setField = (field: string) => event => {
    this.setState({
      ...this.state,
      currentUser: {
        ...this.state.currentUser,
        [field]: event.target.value
      }
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.editUser(this.state.currentUser)
    this.closeEdit()
  }

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getUsers()
    }
  }

  render() {
    return (
      <div>
        <h4>Users</h4>
        <UserEditDialog
          editMode={this.state.editMode}
          user={this.state.currentUser}
          closeEdit={this.closeEdit}
          setField={this.setField}
          handleSubmit={this.handleSubmit}
        />
        {this.props.users.length ? <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Dashboard</th>
              {this.props.selfRole === 'admin' && <th>Edit</th>}
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => <UserRow key={user.userId} user={user} showEdit={this.props.selfRole === 'admin'} openEdit={this.openEdit} />)}
          </tbody>
        </table> : <p>one moment please</p>}
      </div>
    )
  }
}
