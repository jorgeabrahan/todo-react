/* eslint-disable import/no-extraneous-dependencies */
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
