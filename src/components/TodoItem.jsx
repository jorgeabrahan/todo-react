// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/modules/TodoItem.module.scss';
import { useAuthContext } from '../context/AuthContext';

export default function TodoItem({
  title, completed, onCheck, onDelete, onEdit,
}) {
  const [editing, setEditing] = useState(false);
  const [edit, setEdit] = useState(title);
  const { user } = useAuthContext();
  function onSubmit(e) {
    e.preventDefault();
    e.target.reset();
    onEdit(edit);
    setEditing(false);
  }
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          defaultChecked={completed}
          onClick={({ target }) => onCheck(target.checked)}
        />
        {user && <button type="button" onClick={() => setEditing(true)}>Edit</button>}
        <button type="button" onClick={onDelete}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <form
        onSubmit={onSubmit}
        style={editing ? {} : { display: 'none' }}
      >
        <input
          type="text"
          value={edit}
          className={styles.textInput}
          onChange={({ target }) => setEdit(target.value)}
        />
      </form>
    </li>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
