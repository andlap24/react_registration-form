import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import { RegistrationPage } from './components/RegistrationPage';
import { EditUser } from './components/EditUser';
import { LoginPage } from './components/LoginPage';
import { TestForm } from './components/TestForm';

export const App = () => (
  <Switch>
    <Route path="/registration" component={RegistrationPage} />
    <Route path="/edituser" component={EditUser} />
    <Route path="/form" component={TestForm} />
    <Route path="/" component={LoginPage} />
    <Route render={() => <h1>404: page not found</h1>} />
  </Switch>
);
