import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import { RegistrationPage } from './components/RegistrationPage';
import { UserList } from './components/UserList';
import { LoginPage } from './components/LoginPage';

export const App = () => (
  <Switch>
    <Route path="/registration" component={RegistrationPage} />
    <Route path="/userlist" component={UserList} />
    <Route path="/" component={LoginPage} />
    <Route render={() => <h1>404: page not found</h1>} />
  </Switch>
);
