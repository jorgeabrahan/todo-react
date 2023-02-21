/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          {links.map((link) => {
            let li;
            if (link.path === 'login') {
              if (!user) {
                li = (
                  <li>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </li>
                );
              }
            } else if (link.path === 'profile') {
              if (user) {
                li = (
                  <li>
                    <NavLink to={link.path}>
                      {link.text}
                    </NavLink>
                  </li>
                );
              }
            } else {
              li = (
                <li>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </li>
              );
            }
            return (
              <React.Fragment key={link.text}>
                {li}
              </React.Fragment>
            );
          })}
          {!user && (
            <li className="log-in">
              <span>Log in to edit to-dos</span>
            </li>
          )}
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p>{user}</p>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};
export default Navbar;
