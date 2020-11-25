import React, { useState } from 'react';
import './TestForm.scss';

export const TestForm = () => {
  const [input, setInput] = useState('');
  const [text, setText] = useState(' ');

  const saveText = (event) => {
    setInput(event.target.value);
  };

  const displayText = (textFromFrom) => {
    setText(textFromFrom);
    resetForm();
  };

  const resetForm = () => {
    setInput('');
  };

  return (
    <>
      <div className="test-form form">
        <h2 className="test-form__title">{`Text: ${text}`}</h2>
        <input
          type="text"
          className="form__input"
          placeholder="Введите текст"
          value={input}
          onChange={event => saveText(event)}
        />
        <button
          type="button"
          className="form__btn"
          onClick={() => displayText(input)}
        >
          Отобразить
        </button>
      </div>
    </>
  );
};
