import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export function MainAdmin() {
  const navigate = useNavigate();
  return (
    <Box
      bgcolor="primary.contrastText"
      className="pt-[30px] w-full min-h-[calc(100vh-69px)] flex flex-row justify-center"
    >
      <Box
        bgcolor="primary.contrastText container"
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <Typography variant="h5">Welcome to the Admin Dashboard</Typography>
        <Typography variant="h6">Choose where to navigate:</Typography>
        <Link
          className="cursor-pointer"
          onClick={() => navigate('/admin-criminal')}
        >
          Insert Criminal
        </Link>
        <Link
          className="cursor-pointer"
          onClick={() => navigate('/admin-policeman')}
        >
          Insert Policeman
        </Link>
      </Box>
    </Box>
  );
}
