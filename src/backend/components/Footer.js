import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'grey.200', p: 2, mt: 'auto' }}>
      <Typography variant="body2" align="center" color="text.secondary">
        © 2024 Admin Panel. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;