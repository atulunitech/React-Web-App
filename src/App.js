import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAppDispatch } from './store/hooks';
import { validateSSOToken, setUser } from './store/authSlice';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/layout/Layout';
import BackendLayout from './backend/components/BackendLayout';
import Home from './components/pages/Home';
import RegisteredUser from './components/pages/RegisteredUser';
import NotFound from './components/pages/NotFound';
import Dashboard from './backend/pages/Dashboard';
import ProductList from './backend/pages/ProductList';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    const authResponse = localStorage.getItem('authResponse');

    // If we have a cached user in localStorage, set it immediately to avoid UI flicker
    if (authResponse) {
      try {
        dispatch(setUser(JSON.parse(authResponse)));
      } catch (e) {
        // ignore parse errors
      }
    }

    // If there's an access token, validate it with the server to restore session
    if (accessToken) {
      dispatch(validateSSOToken(accessToken));
    }
  }, [dispatch]);

  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/users" element={
            <Layout>
              <RegisteredUser />
            </Layout>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <BackendLayout>
                <Dashboard />
              </BackendLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <BackendLayout>
                <Dashboard />
              </BackendLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/products" element={
            <ProtectedRoute>
              <BackendLayout>
                <ProductList />
              </BackendLayout>
            </ProtectedRoute>
          } />
          <Route path="*" element={
            <Layout>
              <NotFound />
            </Layout>
          } />
        </Routes>
      </Router>
  );
}

export default App;
