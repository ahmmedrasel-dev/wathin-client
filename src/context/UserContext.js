import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();



const UserContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const storedToken = localStorage.getItem('token');
  const userId = localStorage.getItem('user_id');

  useEffect(() => {
    try {
      if (isLoggedIn) {
        fetch(`https://server.wathincompanyltd.com/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => {
            setUser(data);
            setIsLoggedIn(true);
            setLoading(false)
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
    try {
      const response = await fetch('https://server.wathincompanyltd.com/api/login', {
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
      } else if (response.status === 401) {
        const { message } = await response.json();
        throw new Error(message);
      } else {
        throw new Error('An error occurred while logging in');
      }
    } catch (error) {
      throw error;
    }
  };


  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    setToken(null);
    setIsLoggedIn(false);
    setUser(null);
    setLoading(false);
    fetch('https://server.wathincompanyltd.com/api/logout', {
      method: 'POST'
    });
  };

  const authInfo = { user, isLoggedIn, signInUser, logout, loading, setIsLoggedIn, setLoading };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
