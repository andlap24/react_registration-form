import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import { MainNav } from './components/MainNav';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { EditUser } from './components/EditUser';
import { UserList } from './components/UserList';
import { TestForm } from './components/TestForm';

export const App = () => (
  <div>
    <MainNav />
    <Switch>
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/userlist" component={UserList} />
      <Route path="/profile" component={EditUser} />
      <Route path="/form" component={TestForm} />
      <Route path="/" component={LoginPage} />
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
  </div>
);
