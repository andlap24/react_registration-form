import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NavBar } from '../../components/NavBar';
import { EditUserPage } from '../EditUserPage';
import { UserListPage } from '../UserListPage';
import { TestFormPage } from '../TestFormPage';

export const UserProfilePage = () => (
  <>
    <NavBar />
    <Switch>
      <Route path="/home/profile" component={EditUserPage} />
      <Route path="/home/userlist" component={UserListPage} />
      <Route path="/home/form" component={TestFormPage} />
    </Switch>
  </>
);
