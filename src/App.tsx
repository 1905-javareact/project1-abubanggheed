import React from 'react';
import './include/bootstrap'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { LoginWrapper } from './components/loginwrapper/loginwrapper';
import NavBar from './components/navbar/navbar.container';
import Initializer from './components/initialize/initialize'
import UsersPage from './components/users/users.container';
import Dashboard from './components/dashboard/dashboard.container';
import RequestsPage from './components/requests/requests.container';
import SingleUser from './components/singleuser/singleuser.container';
import ReimbursementEdit from './components/reimbursementeditform/reimbursement.edit.container';
import NotFound from './components/404page/NotFound.container';
import { IState } from './reducers';
import { connect } from 'react-redux';

const managerRoles = ['finance-manager', 'admin']
interface IAppProps {
  role:string
}

const App: React.FC<IAppProps> = (props:IAppProps) => {
  let renderManager = managerRoles.includes(props.role)
  return (
    <BrowserRouter>
        <div className="App">
          <Initializer />
          <NavBar />
          <Switch>
            {renderManager && <Route path='/users' exact component={LoginWrapper(UsersPage)} />}
            <Route path='/dashboard' exact component={LoginWrapper(Dashboard)} />
            {renderManager && <Route path='/requests' exact component={LoginWrapper(RequestsPage)} />}
            {renderManager && <Route path='/user/:id' component={LoginWrapper(SingleUser)} />}
            <Route path='/' exact component={LoginWrapper(Home)} />
            <Route path='/' component={LoginWrapper(NotFound)} />
          </Switch>
          <ReimbursementEdit />
        </div>
    </BrowserRouter >
  );
}

const mapStateToProps = (state:IState) => ({
  role: state.self.role
})

export default connect(mapStateToProps)(App);
