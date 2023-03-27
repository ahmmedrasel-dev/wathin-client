import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();



const UserContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');
    try {
      if (isLoggedIn) {
        fetch(`http://server.wathincompanyltd.com/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => {
            setUser(data);
            setIsLoggedIn(true);
          })
      }
    } catch (error) {
      console.log(error);
    }

    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, [token]);

  const signInUser = async (email, password) => {
    const response = await fetch('http://server.wathincompanyltd.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    if (response.status === 200) {
      const { token, _id } = await response.json();
      localStorage.setItem('token', token);
      localStorage.setItem('user_id', _id);
      setToken(token);
      setIsLoggedIn(true);
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    setToken(null);
    setIsLoggedIn(false);
    setUser(null);
    setLoading(false);
    fetch('http://server.wathincompanyltd.com/api/logout', {
      method: 'POST'
    });
  };

  const authInfo = { user, isLoggedIn, signInUser, logout, loading };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
