// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import TodoApp from './routes/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoApp />
    </Router>
  </React.StrictMode>,
);
