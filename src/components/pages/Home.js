import React from 'react';
import { Typography, Container, Button, Box } from '@mui/material';

const Home = () => {
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