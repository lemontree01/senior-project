import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        <Typography variant="h5"><Button
          onClick={() => navigate(-1)}
          sx={{
            borderRadius: 100
          }}><ArrowBackIcon /></Button>Welcome to the Admin Dashboard</Typography>
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
        <Link
          className="cursor-pointer"
          onClick={() => navigate('/search-criminal')}
        >
          Search Criminal
        </Link>
      </Box>
    </Box>
  );
}
