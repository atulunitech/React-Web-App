import React, { useEffect } from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useValidateSSOTokenMutation } from '../../services/authApi';
import { setUser, setLoading } from '../../store/authSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [validateToken] = useValidateSSOTokenMutation();

  const handleLogin = async () => {
    dispatch(setLoading(true));
    
    let accessToken = Cookies.get('access_token');
    if (!accessToken) {
      accessToken = '5723746c-9a78-4dc1-acdd-24437920d794';
      Cookies.set('access_token', accessToken, { expires: 7 });
    }

    try {
      const result = await validateToken(accessToken).unwrap();
      dispatch(setUser(result));
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    // const checkAuthAndRedirect = async () => {
    //   const accessToken = Cookies.get('access_token');
      
    //   if (accessToken) {
    //     await handleLogin();
    //   }
    // };
    
    // checkAuthAndRedirect();
    handleLogin();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

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