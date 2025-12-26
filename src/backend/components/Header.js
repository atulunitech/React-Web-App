import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material';
import { Menu as MenuIcon, Person as PersonIcon, Logout as LogoutIcon } from '@mui/icons-material';
import Cookies from 'js-cookie';

const Header = ({ onMenuClick }) => {
  const authResponse = JSON.parse(localStorage.getItem('authResponse') || '{}');
  console.log('authResponse', authResponse.fullName);
  const userName = authResponse.fullName || authResponse.name || 'User';
  
  const handleLogout = () => {
    Cookies.remove('access_token');
    localStorage.removeItem('authResponse');
    window.location.href = '/';
  };
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
            <PersonIcon />
          </Avatar>
          <Typography variant="body2">
            {userName}
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;