import React, { useEffect } from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import apiClient, { API_ENDPOINTS, SSO_LOGIN_URL } from '../../config/api';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      let accessToken = Cookies.get('access_token');
      
      if (!accessToken) {
        accessToken = '6ffb67c8-01f9-47ab-bb99-26b6e84e0ed1';
        Cookies.set('access_token', accessToken, { expires: 7 });
      }
      
      if (accessToken) {
        try {
          const response = await apiClient.post(
            '/auth/validateSSOToken',
            { token: accessToken }
          );
          
          localStorage.setItem('authResponse', JSON.stringify(response.data));
          navigate('/admin');
        } catch (error) {
           window.location.href = SSO_LOGIN_URL;
        }
      } else {
         window.location.href = SSO_LOGIN_URL;
      }
    };
    
    validateToken();
  }, [navigate]);

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to My Web App
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          This is the home page of our application.
        </Typography>
        <Button variant="contained" size="large">
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;