import React, { useState, createContext, useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['auth']);
  const [isAuthenticated, setIsAuthenticated] = useState(cookies['auth']);

  useEffect(() => {
    setIsAuthenticated(cookies['auth'])
  }, []);

  // Add logic here to check if the user is authenticated
  // This could be checking for a token in localStorage, etc.

  const login = () => {
    // Perform login operation and update state
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout operation and update state
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);