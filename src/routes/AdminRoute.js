import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
  const { user, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const location = useLocation();
  console.log(isAdmin)
  if (isLoggedIn) {
    <Navigate to="/" />
  }

  if (!user && !isLoggedIn && !isAdmin) {
    setIsLoggedIn(false)
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    return <Navigate to="/login" state={{ from: location, search: location.search }}></Navigate>;

  }
  return children;



};


export default AdminRoute;