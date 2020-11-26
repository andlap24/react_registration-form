import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EditUser.scss';

export const EditUser = () => {
  const selectedUser = sessionStorage.getItem('selectedUser');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [position, setPosition] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [lastNameError, setLastNameError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [saveUserError, setSaveUserError] = useState(false);

  useEffect(() => {
    setLastName(getData('lastName'));
    setFirstName(getData('firstName'));
    setPassword(getData('password'));
  }, []);

  const getData = (value) => {
    const data = JSON.parse(localStorage.getItem(selectedUser));

    return data[value];
  };

  const handleFormSubmit = () => {
    const localUser = {
      lastName,
      firstName,
      patronymic,
      position,
      password,
    };

    if (password === confirmPassword && lastName !== '') {
      const login = getData('login');

      localStorage.setItem(`${login}`, JSON.stringify(localUser));
    }

    if (lastNameError || firstNameError || passwordError) {
      setSaveUserError(true);
    }
  };

  const onBlur = (input, setter) => {
    if (input === '') {
      setter(true);
    }
  };

  return (
    <>
      {selectedUser.length === 0 && (
        <Link to="/signup">
          <button
            className="form__btn centered"
            type="button"
          >
            Зарегистрируйтесь
          </button>
        </Link>
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
            placeholder="Отчество"
            value={patronymic}
            onChange={event => setPatronymic(event.target.value)}
          />
        </label>

        <label>
          <input
            type="text"
            className="form__input"
            placeholder="Должность"
            value={position}
            onChange={event => setPosition(event.target.value)}
          />
        </label>

        <label>
          <input
            type="text"
            className="form__input--disabled"
            value={getData('login')}
            disabled="disabled"
          />
        </label>

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
          <p className="login-form__message">
            Заполните все обязательные поля
          </p>
        )}

        <button
          className="form__btn"
          type="button"
          onClick={handleFormSubmit}
        >
          Сохранить изменения
        </button>
      </form>
    </>
  );
};
