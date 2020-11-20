import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = () => {
    localStorage.setItem('password', password);
    localStorage.setItem('user', password.length ? user : '');
  };

  return (
    <>
      <div>
        <p>{user}</p>
        <button type="button" onClick={setUser}>dont click</button>
        <nav className="App__nav nav">
          <Link className="nav__link" to="/">Home</Link>
          <Link className="nav__link" to="/login">Login</Link>
          <Link className="nav__link" to="/registration">Sign up</Link>
        </nav>
      </div>

      <form
        className="home__form"
        onSubmit={handleFormSubmit}
      >
        <select>
          <option selected="selected">Choose a user</option>
          <option value="">User</option>
        </select>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
