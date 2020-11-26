import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import { UserAuthPage } from './pages/UserAuthPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { RegistrationPage } from './pages/RegistrationPage';

export const App = () => (
  <Switch>
    <Route path="/home" component={UserProfilePage} />
    <Route path="/signup" component={RegistrationPage} />
    <Route path="/" exact component={UserAuthPage} />
  </Switch>
);
