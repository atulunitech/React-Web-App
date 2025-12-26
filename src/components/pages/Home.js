import React, { useEffect } from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      const accessToken = Cookies.get('access_token');
      
      if (accessToken) {
        await login();
        alert('You are already logged in. Redirecting to admin dashboard.');
      }
    };
    
    checkAuthAndRedirect();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    await login();
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to My Web App
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          This is the home page of our application.
        </Typography>
        <Button variant="contained" size="large" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Home;