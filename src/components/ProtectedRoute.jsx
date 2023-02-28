/* eslint-disable import/no-extraneous-dependencies */
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ pathname: location.pathname }}
        replace
      />
    );
  }
  return children;
};
export default ProtectedRoute;

ProtectedRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
