import React from 'react';
import { Typography, Container, Card, CardContent, Box } from '@mui/material';

const RegisteredUser = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Registered Users
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              User Dashboard
            </Typography>
            <Typography variant="body1">
              Welcome to the registered user area. Here you can manage your profile and access user-specific features.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default RegisteredUser;