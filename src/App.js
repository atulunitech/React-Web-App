import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <BackendLayout>
            <Dashboard />
          </BackendLayout>
        } />
        <Route path="/admin/dashboard" element={
          <BackendLayout>
            <Dashboard />
          </BackendLayout>
        } />
        <Route path="/admin/products" element={
          <BackendLayout>
            <ProductList />
          </BackendLayout>
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
