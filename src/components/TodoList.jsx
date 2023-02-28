// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {
  function onCheck(id, completed) {
    setTodos((prev) => prev.map((todo) => (todo.id !== id ? todo : { ...todo, completed })));
  }
  function onDelete(id) {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }
  function onEdit(id, title) {
    setTodos((prev) => prev.map((todo) => (todo.id !== id ? todo : { ...todo, title })));
  }
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onCheck={(completed) => onCheck(todo.id, completed)}
          onDelete={() => onDelete(todo.id)}
          onEdit={(title) => onEdit(todo.id, title)}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};
