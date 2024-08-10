import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check localStorage for stored authentication state
    const storedAuthState = localStorage.getItem('isAuthenticated');
    const storedUsername = localStorage.getItem('username');

    if (storedAuthState === 'true' && storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    }
  }, []);

  const login = (user) => {
    setIsAuthenticated(true);
    setUsername(user);

    // Store authentication state in localStorage
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');

    // Remove authentication state from localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
