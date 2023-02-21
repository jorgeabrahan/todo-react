// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? 'red' : undefined,
                })}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
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
