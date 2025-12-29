import React, { useEffect } from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { validateSSOToken } from '../../store/authSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.auth);

  const handleLogin = async () => {
    let accessToken = Cookies.get('access_token');
    if (!accessToken) {
      accessToken = '80d61ee3-ac9f-4e72-9cf8-7a00cf6cc62d';
      Cookies.set('access_token', accessToken, { expires: 7 });
    }

    dispatch(validateSSOToken(accessToken));
  };

  useEffect(() => {
    // const checkAuthAndRedirect = async () => {
    //   const accessToken = Cookies.get('access_token');
      
    //   if (accessToken) {
    //     await handleLogin();
    //   }
    // };
    
    // checkAuthAndRedirect();
    // handleLogin();
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

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