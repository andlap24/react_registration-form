/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

export const LoginPage = () => {
  const localUser = localStorage.getItem('user');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleFormSubmit = () => {
    const pass = localStorage.getItem('password');

    if (!localUser || password === pass) {
      console.log(isPasswordValid);
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <div className="login-page">
      <form
        className="login-page__form login-form"
      >
        <select className="login-form__select">
          <option selected="selected">Choose a user</option>
          {!!localUser && <option value="">{localUser}</option>}
        </select>

        <label>
          <input
            className="login-form__password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
        </label>

        {localUser !== null || isPasswordValid
          ? (
            <Link to="/">
              <button
                className="login-form__btn"
                type="button"
                onClick={handleFormSubmit}
              >
                Log in
              </button>
            </Link>
          )
          : (
            <Link to="/registration">
              <button
                className="form__btn"
                type="button"
              >
                Sign up
              </button>
            </Link>
          )
        }
      </form>
    </div>
  );
};
