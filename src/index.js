import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import TodoApp from './TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
);
