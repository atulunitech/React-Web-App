import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
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
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
