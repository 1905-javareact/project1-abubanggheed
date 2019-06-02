import React from 'react';
import './include/bootstrap'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './components/login/page';
import { Home } from './components/home/home';
import { LoginWrapper } from './components/loginwrapper/loginwrapper';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h4>App</h4>
        </header>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/' exact render={LoginWrapper(Home)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
