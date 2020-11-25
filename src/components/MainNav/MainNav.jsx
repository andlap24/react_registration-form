import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.scss';

export const MainNav = () => (
  <nav className="navbar">
    <div className="navbar-menu">
      <div className="navbar-start">
        <NavLink
          to="/profile/"
          className="navbar-item is-tab"
          activeClassName="is-active"
        >
          Мой профиль
        </NavLink>

        <NavLink
          to="/userlist/"
          className="navbar-item is-tab"
          activeClassName="is-active"
        >
          Пользователи
        </NavLink>

        <NavLink
          to="/form/"
          className="navbar-item is-tab"
          activeClassName="is-active"
        >
          Форма
        </NavLink>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <NavLink
              to="/registration/"
              className="button is-link"
              activeClassName="is-active"
            >
              Регистрация
            </NavLink>

            <NavLink
              to="/"
              exact
              className="button is-light"
              activeClassName="is-active"
            >
              Вход
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
