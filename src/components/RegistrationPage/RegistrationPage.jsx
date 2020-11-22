import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [position, setPosition] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /* const handleFormSubmit = () => {
    localStorage.setItem('password', password);
    localStorage.setItem('user', password.length ? user : '');
  }; */

  return (
    <>
      <div>
        <nav className="nav">
          <Link className="nav__link" to="/">Home</Link>
          <Link className="nav__link" to="/login">Login</Link>
          <Link className="nav__link" to="/registration">Sign up</Link>
        </nav>
      </div>

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

        <label htmlFor="patronymic">
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
            placeholder="Должность"
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

        <button className="form__btn" type="button">Сохранить</button>
      </form>
    </>
  );
};
