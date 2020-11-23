/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './LoginPage.scss';

export const LoginPage = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const localUser = Object.keys(localStorage);

  useEffect(() => {
    setIsPasswordValid(false);
    setSelectedUser('');
    setPassword('');
  }, []);

  const checkPassword = () => {
    console.log(selectedUser);

    const pass = JSON.parse(localStorage.getItem(selectedUser)).password;

    console.log(JSON.parse(localStorage.getItem(selectedUser)).password);

    password === pass ? setIsPasswordValid(true) : setIsPasswordValid(false);
  };

  const handleSelectedUser = event => (
    setSelectedUser(event.target.value)
  );

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkPassword();
    }
  };

  return (
    <div className="login-page">
      <form
        className="login-page__form login-form"
      >
        <select
          className="login-form__select"
          defaultValue="Choose a user"
          onChange={(event) => {
            handleSelectedUser(event);
          }}
        >
          <option value="Choose a user">Choose a user</option>
          {localUser.length > 0
            && localUser.map(user => (
              <option
                key={user}
                value={user}
              >
                {user}
              </option>
            ))}
        </select>

        <label>
          <input
            className="login-form__password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
            onKeyPress={event => handleKeyPress(event)}
            required
          />
        </label>

        {localUser.length > 0 || isPasswordValid
          ? (
            <Link to="/">
              <button
                className="login-form__btn"
                type="button"
                onClick={checkPassword}
              >
                Войти
              </button>
            </Link>
          )
          : (
            <Link to="/registration">
              <button
                className="form__btn"
                type="button"
              >
                Регистрация
              </button>
            </Link>
          )
        }
      </form>

      {isPasswordValid
        && (
          <Redirect to="/registration" />
        )
      }
    </div>
  );
};