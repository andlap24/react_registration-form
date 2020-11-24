import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './EditUser.scss';

import { UserList } from '../UserList';
import { SelectedUser } from '../../context';

export const EditUser = () => {
  const selectedUser = useContext(SelectedUser);

  // eslint-disable-next-line no-console
  console.log(selectedUser);
  const getData = (value) => {
    const data = JSON.parse(localStorage.getItem('andlap'));

    return data[value];
  };

  const [lastName, setLastName] = useState(getData('lastName'));
  const [firstName, setFirstName] = useState(getData('firstName'));
  const [patronymic, setPatronymic] = useState(getData('patronymic'));
  const [position, setPosition] = useState(getData('position'));
  const [login, setLogin] = useState(getData('login'));
  const [password, setPassword] = useState(getData('password'));
  const [confirmPassword, setConfirmPassword] = useState('');

  const [lastNameError, setLastNameError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [saveUserError, setSaveUserError] = useState(false);
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

    if (password === confirmPassword && lastName !== '' && login !== '') {
      localStorage.setItem(`${login}`, JSON.stringify(localUser));
    }

    if (loginError === true) {
      setSaveUserError(true);
    }
  };

  const displayUsersList = () => (
    setModalWindow(true)
  );

  const onBlur = (input, setter) => {
    if (input === '') {
      setter(true);
    }
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
            onChange={event => setPatronymic(event.target.value)}
          />
        </label>

        <label>
          <input
            type="text"
            className="form__input"
            value={position}
            onChange={event => setPosition(event.target.value)}
          />
        </label>

        <label>
          <input
            type="text"
            className="form__input"
            value={login}
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

        {saveUserError && (
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
