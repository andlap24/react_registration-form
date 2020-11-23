/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.scss';

import { UserList } from '../UserList';

export const RegistrationPage = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [position, setPosition] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalWindow, setModalWindow] = useState(false);

  const handleFormSubmit = () => {
    const localUser = {
      lastName,
      firstName,
      patronymic,
      position,
      login,
      password,
    };

    localStorage.setItem(`${login}`, JSON.stringify(localUser));
  };

  const displayUsersList = () => (
    setModalWindow(true)
  );

  return (
    <div className="wrapper">
      <div>
        <nav className="nav">
          <Link className="nav__link" to="/">
            <button type="button">Войти</button>
          </Link>
          <Link className="nav__link" to="/registration">Регистрация</Link>
          <button
            className="nav__link-btn"
            type="button"
            onClick={displayUsersList}
          >
            Пользователи
          </button>
        </nav>
      </div>

      {modalWindow && (
        <UserList setModalWindow={setModalWindow} />
      )}

      <form className="form">
        <label>
          <input
            type="text"
            className="form__input"
            value={lastName}
            placeholder="Фамилия"
            onChange={event => setLastName(event.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="text"
            className="form__input"
            value={firstName}
            placeholder="Имя"
            onChange={event => setFirstName(event.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="text"
            name="patronymic"
            className="form__input"
            value={patronymic}
            placeholder="Отчество"
            onChange={event => setPatronymic(event.target.value)}
          />
        </label>

        <label>
          <input
            type="text"
            className="form__input"
            value={position}
            placeholder="Должность"
            onChange={event => setPosition(event.target.value)}
          />
        </label>

        <label>
          <input
            type="text"
            className="form__input"
            value={login}
            placeholder="Логин"
            onChange={event => setLogin(event.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="password"
            className="form__input"
            value={password}
            placeholder="Пароль"
            onChange={event => setPassword(event.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="password"
            className="form__input"
            value={confirmPassword}
            placeholder="Подтвердите пароль"
            onChange={event => setConfirmPassword(event.target.value)}
            required
          />
        </label>

        <button
          className="form__btn"
          type="button"
          onClick={handleFormSubmit}
        >
          Добавить
        </button>
      </form>
    </div>
  );
};
