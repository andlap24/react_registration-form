import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.scss';

export const UserList = () => {
  const localUser = Object.keys(localStorage);

  return (
    <div className="user-list">
      {localUser.length === 0 && (
        <Link to="registration/">
          <button
            className="form__btn centered"
            type="button"
          >
            Зарегистрируйтесь
          </button>
        </Link>
      )}

      {localUser.map((user) => {
        const userData = JSON.parse(localStorage.getItem(user));

        return (
          <div className="user-list__list list">
            <p className="list__item">
              <b>Логин:&nbsp;</b>
              {userData.login}
            </p>
            <p className="list__item">
              <b>Фамилия:&nbsp;</b>
              {userData.lastName}
            </p>
            <p className="list__item">
              <b>Имя:&nbsp;</b>
              {userData.firstName}
            </p>
            <p className="list__item">
              <b>Отчество:&nbsp;</b>
              {userData.patronymic}
            </p>
            <p className="list__item">
              <b>Должность:&nbsp;</b>
              {userData.position}
            </p>
            <p className="list__item">
              <b>Пароль:&nbsp;</b>
              {userData.password}
            </p>
          </div>
        );
      })}
    </div>
  );
};
