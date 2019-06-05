import React from 'react';
import './include/bootstrap'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { LoginWrapper } from './components/loginwrapper/loginwrapper';
import NavBar from './components/navbar/navbar.container';
import Initializer from './components/initialize/initialize'
import { Provider } from 'react-redux';
import { store } from './store';
import UsersPage from './components/users/users.container';
import Dashboard from './components/dashboard/dashboard.container';
import RequestsPage from './components/requests/requests.container';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Initializer />
          <NavBar />
          <Switch>
            <Route path='/users' exact component={LoginWrapper(UsersPage)} />
            <Route path='/dashboard' exact component={LoginWrapper(Dashboard)} />
            <Route path='/requests' exact component={LoginWrapper(RequestsPage)} />
            <Route path='/' exact component={LoginWrapper(Home)} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter >
  );
}

export default App;
