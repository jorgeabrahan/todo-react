// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import NotMatch from './routes/NotMatch';

import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Profile from './routes/Profile';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
    <Route path="profile" element={<Profile />} />
    <Route path="*" element={<NotMatch />} />
  </Routes>
);
export default TodoApp;
