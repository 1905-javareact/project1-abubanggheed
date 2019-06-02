import React from 'react';
import './include/bootstrap'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './components/login/page';
import { Home } from './components/home/home';
import { LoginWrapper } from './components/loginwrapper/loginwrapper';
import { NavBar } from './components/navbar/navbar';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/' exact render={LoginWrapper(Home)} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter >
  );
}

export default App;
