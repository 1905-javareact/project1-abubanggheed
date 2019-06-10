import React, { PureComponent } from 'react';
import { User } from '../../models/user';
import DashboardLink from '../buttons/dashboardlink.container';

interface IHomeProps {
  user:User
}
export class Home extends PureComponent<IHomeProps> {

  render() {
    return (
      <div>
        <h2>Welcome {this.props.user.firstName + ' ' + this.props.user.lastName}</h2>
        <h4>{this.props.user.username}: {this.props.user.role}</h4>
        <p>{this.props.user.email}</p>
        <DashboardLink author={this.props.user.userId} />
      </div>
    )
  }
}
