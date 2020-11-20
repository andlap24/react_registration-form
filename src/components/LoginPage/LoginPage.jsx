import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

export const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleFormSubmit = () => {
    const pass = localStorage.getItem('password');

    return password === pass ? setIsPasswordValid(true) : null;
  };

  const getData = (data) => {
    localStorage.getItem(data);
  };

  return (
    <div className="login-page">
      <form
        className="login-page__form form"
        onSubmit={handleFormSubmit}
      >
        <select className="form__select">
          <option selected="selected">Choose a user</option>
          <option value="">{getData('user')}</option>
        </select>

        <label>
          <input
            className="form__password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
        </label>

        <button className="form__btn" type="submit">Submit</button>
      </form>

      {isPasswordValid && <Link to="/" />}
    </div>
  );
};
