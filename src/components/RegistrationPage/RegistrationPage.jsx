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

  const [lastNameError, setLastNameError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [addUserError, setAddUserError] = useState(false);

  const handleFormSubmit = () => {
    const localUser = {
      lastName,
      firstName,
      patronymic,
      position,
      login,
      password,
    };

    if (password === confirmPassword && lastName !== '' && login !== '') {
      localStorage.setItem(`${login}`, JSON.stringify(localUser));
      resetForm();
    }

    setAddUserError(true);
  };

  const displayUsersList = () => (
    setModalWindow(true)
  );

  const onBlur = (input, setter) => {
    if (input === '') {
      setter(true);
    }
  };

  const resetForm = () => {
    setLastName('');
    setFirstName('');
    setPatronymic('');
    setPosition('');
    setLogin('');
    setPassword('');
    setConfirmPassword('');
    setLastNameError(false);
    setFirstNameError(false);
    setLoginError(false);
    setPasswordError(false);
  };

  return (
    <div className="wrapper">
      <div>
        <nav className="nav">
          <Link to="/">
            <button className="nav__link" type="button">Вход</button>
          </Link>
          <Link to="/registration">
            <button className="nav__link" type="button">Регистрация</button>
          </Link>
          <button
            className="nav__link"
            type="button"
            onClick={displayUsersList}
          >
            Пользователи
          </button>
          <Link to="/form">
            <button className="nav__link" type="button">Форма</button>
          </Link>
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
            placeholder="Фамилия*"
            onChange={event => setLastName(event.target.value)}
            onBlur={() => onBlur(lastName, setLastNameError)}
          />
        </label>

        {lastNameError && (
          <p className="login-form__message">Поле не должно быть пустым</p>
        )}

        <label>
          <input
            type="text"
            className="form__input"
            value={firstName}
            placeholder="Имя*"
            onChange={event => setFirstName(event.target.value)}
            onBlur={() => onBlur(firstName, setFirstNameError)}
          />
        </label>

        {firstNameError && (
          <p className="login-form__message">Поле не должно быть пустым</p>
        )}

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
            placeholder="Логин*"
            onChange={event => setLogin(event.target.value)}
            onBlur={() => onBlur(login, setLoginError)}
          />
        </label>

        {loginError && (
          <p className="login-form__message">Поле не должно быть пустым</p>
        )}

        <label>
          <input
            type="password"
            className="form__input"
            value={password}
            placeholder="Пароль*"
            onChange={event => setPassword(event.target.value)}
            onBlur={() => onBlur(password, setPasswordError)}
          />
        </label>

        {passwordError && (
          <p className="login-form__message">Поле не должно быть пустым</p>
        )}

        <label>
          <input
            type="password"
            className="form__input"
            value={confirmPassword}
            placeholder="Подтвердите пароль*"
            onChange={event => setConfirmPassword(event.target.value)}
            required
          />
        </label>

        {addUserError && (
          <p className="login-form__message">Заполните все обязательные поля</p>
        )}

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
