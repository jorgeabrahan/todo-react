// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

const Layout = () => (
  <div className="wrapper">
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  </div>
);
export default Layout;
