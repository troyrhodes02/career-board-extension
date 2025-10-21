import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function Options() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Options Page
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          This page will manage user settings in future versions.
        </Typography>
      </Box>
    </Container>
  );
}