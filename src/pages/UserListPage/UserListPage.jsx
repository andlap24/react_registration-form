import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserListPage.scss';

export const UserListPage = () => {
  const [, setIsUserDeleted] = useState(false);
  const localUser = Object.keys(localStorage);

  const removeUser = () => {
    localStorage.clear();
    sessionStorage.clear();
    setIsUserDeleted(true);
  };

  return (
    <>
      <div className="user-list">
        {localUser.length === 0 && (
          <Link to="/signup">
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

        {localUser.length !== 0 && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={removeUser}
          >
            Очистить
          </button>
        )}
      </div>
    </>
  );
};
