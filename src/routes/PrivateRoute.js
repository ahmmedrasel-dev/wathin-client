import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { user, isLoggedIn, setIsLoggedIn, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoggedIn && user) {
    <Navigate to="/" />
  }


  if (!user && !isLoggedIn) {
    setIsLoggedIn(false)
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    setLoading(false)
    return <Navigate to="/login" state={{ from: location, search: location.search }}></Navigate>;
  }

  if (loading) {
    return <Loader />
  }
  return children;



};


export default PrivateRoute;