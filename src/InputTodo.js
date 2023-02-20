/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

export default function InputTodo({ setTodos }) {
  const [todo, setTodo] = useState('');
  const [message, setMessage] = useState('');
  function onSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) {
      setMessage('Empty todos cannot be added');
      return;
    }
    setMessage('');
    setTodos((previous) => [...previous, { id: uuid(), title: todo, completed: false }]);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} className="form-container">
        <input
          type="text"
          placeholder="Add todo..."
          onChange={({ target }) => setTodo(target.value)}
          className="input-text"
        />
        <button type="submit" className="input-submit">
          Submit
        </button>
      </form>
      {message !== '' ? <span>{message}</span> : ''}
    </>
  );
}

InputTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
