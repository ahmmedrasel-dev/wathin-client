import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const location = useLocation();

  if (isLoggedIn) {
    <Navigate to="/" />
  }

  if (user && isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location, search: location.search }}></Navigate>;
};


export default PrivateRoute;