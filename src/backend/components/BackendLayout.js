import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';

const BackendLayout = ({ children }) => {
  const [sideNavOpen, setSideNavOpen] = useState(true);

  const handleMenuClick = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onMenuClick={handleMenuClick} />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <SideNav open={sideNavOpen} onClose={() => setSideNavOpen(false)} />
        <Box sx={{ flex: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default BackendLayout;