import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './UserAuthPage.scss';

export const UserAuthPage = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const localUser = Object.keys(localStorage);

  useEffect(() => {
    resetState();
  }, []);

  const checkPassword = () => {
    // eslint-disable-next-line max-len
    const enteredPassword = JSON.parse(localStorage.getItem(selectedUser)).password;

    password === enteredPassword
      ? setIsPasswordValid(true)
      : setIsPasswordValid(false);

    sessionStorage.setItem('selectedUser', selectedUser);
  };

  const handleSelectedUser = event => (
    setSelectedUser(event.target.value)
  );

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkPassword();
    }
  };

  const onBlur = (input) => {
    if (input === '') {
      setPasswordError(true);
    }
  };

  const resetState = () => {
    setIsPasswordValid(false);
    setSelectedUser('');
    setPassword('');
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
          <option value="Choose a user">Выберите пользователя</option>
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

        {localUser.length > 0
          && (
            <label>
              <input
                className="login-form__password"
                type="password"
                name="password"
                value={password}
                placeholder="Пароль"
                onChange={event => setPassword(event.target.value)}
                onKeyPress={event => handleKeyPress(event)}
                onBlur={() => onBlur(password)}
              />
            </label>
          )}

        {passwordError && (
          <p className="login-form__message">Введите пароль</p>
        )}

        {isPasswordValid && (
          <p className="login-form__message">Неверный пароль</p>
        )}

        {localUser.length > 0
          ? (
            <button
              className="login-form__btn"
              type="button"
              onClick={checkPassword}
            >
              Войти
            </button>
          )
          : (
            <Link to="/signup">
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
          <Redirect to="/home/profile" />
        )
      }
    </div>
  );
};
