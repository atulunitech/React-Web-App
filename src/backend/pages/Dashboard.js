import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { useAppSelector } from '../../store/hooks';

const Dashboard = () => {
  const authState = useAppSelector((state) => state.auth);
  
  useEffect(() => {
    console.log('Redux Store - Auth State:', authState);
    console.log('User Data:', authState.user);
    console.log('Is Authenticated:', authState.isAuthenticated);
  }, [authState]);
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Users
              </Typography>
              <Typography variant="h4" color="primary">
                1,234
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Products
              </Typography>
              <Typography variant="h4" color="primary">
                567
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Orders
              </Typography>
              <Typography variant="h4" color="primary">
                890
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;