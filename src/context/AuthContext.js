import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import apiClient, { SSO_LOGIN_URL } from '../config/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validateToken = async (token) => {
    try {
      const response = await apiClient.post('/auth/validateSSOToken', { token });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const login = async () => {
    let accessToken = Cookies.get('access_token');
    
    if (!accessToken) {
      // alert('No access token found. Redirecting to login.');
      // Set a demo token for testing - replace with actual token from SSO
      accessToken = '5723746c-9a78-4dc1-acdd-24437920d794';
      Cookies.set('access_token', accessToken, { expires: 7 });
    }

    try {
      const userData = await validateToken(accessToken);
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('authResponse', JSON.stringify(userData));
      return userData;
    } catch (error) {
      logout();
      // window.location.href = SSO_LOGIN_URL;
    }
  };

  const logout = () => {
    Cookies.remove('access_token');
    localStorage.removeItem('authResponse');
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const initAuth = async () => {
      const accessToken = Cookies.get('access_token');
      
      if (accessToken) {
        try {
          const userData = await validateToken(accessToken);
          setUser(userData);
          setIsAuthenticated(true);
          localStorage.setItem('authResponse', JSON.stringify(userData));
        } catch (error) {
          logout();
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};