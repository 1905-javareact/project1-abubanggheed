import React, { Component } from 'react'
import { Link } from 'react-router-dom';

interface INavBarProps {
  role: string
}

const managerRolls = ['finance-manager', 'admin']
// const adminRolls = ['admin']

export class NavBar extends Component<INavBarProps> {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-toggleable-md navbar-expand-lg display-front nav-pad">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="unset-anchor nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/dashboard" className="unset-anchor nav-link">Dashboard</Link>
            </li>
            {managerRolls.includes(this.props.role) && <li className="nav-item active">
              <Link to="/users" className="unset-anchor nav-link">Users</Link>
            </li>}
            <li className="nav-item active">
              <Link to="/login" className="unset-anchor nav-link">Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
