/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import './UserList.scss';

import button from '../../images/close-button.svg';

export const UserList = ({ setModalWindow }) => {
  const localUser = Object.keys(localStorage);

  return (
    <>
      <div className="modal-overlay" />
      <div className="modal">
        <div
          className="modal__close-button"
          role="button"
          onClick={() => setModalWindow(false)}
          tabIndex="0"
          onKeyPress={() => setModalWindow(false)}
        >
          <img
            src={button}
            alt="close button"
          />
        </div>
        {localUser.map((user) => {
          const userData = JSON.parse(localStorage.getItem(user));

          return (
            <div className="modal__user-list list">
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
                <b>Логин:&nbsp;</b>
                {userData.login}
              </p>
              <p className="list__item">
                <b>Пароль:&nbsp;</b>
                {userData.password}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
