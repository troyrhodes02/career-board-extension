import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function App() {
  return (
    <Box
      sx={{
        width: 400,
        minHeight: 300,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4" component="h1">
        Career Board Extension
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Welcome to your personal job tracking board! 👋
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
  );
}

