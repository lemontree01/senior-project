import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from '@mui/material';
import { TextField } from '~/shared/ui/TextField';

import RectangleImageUpload from '~/widgets/RectangleImageUpload/RectangleImageUpload';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export function AdminPoliceman() {
  const navigate = useNavigate();
  const [picture, setPicture] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
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
          }}><ArrowBackIcon /></Button>
          Upload the new policeman to the database
        </Typography>
        <Box className="flex flex-row">
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              gap: 20,
              flex: 2,
            }}
          >
            <div
              style={{
                fontSize: 20,
                marginTop: '20px',
              }}
            />
            <TextField
              width="100%"
              header="Enter IIN (Individual identification number)"
              placeholder="IIN"
            />
            <TextField
              width="100%"
              header="Enter First Name"
              placeholder="First Name"
            />
            <TextField
              width="100%"
              header="Enter Second Name"
              placeholder="Second Name"
            />
            <TextField width="100%" header="Enter Age" placeholder="Age" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              flex: 1,
              justifyContent: 'start',
              paddingLeft: '50px',
              marginTop: '35px',
            }}
          >
            <div
              style={{
                fontSize: 15,
                color: 'gray',
              }}
            >
              Upload image
            </div>
            <RectangleImageUpload setImageFile={setImageFile} imageUrl={picture} setImageUrl={setPicture}/>
          </Box>
        </Box>
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignSelf: 'start',
          }}
        >
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button variant="contained">Upload</Button>
        </div>
      </Box>
    </Box>
  );
}
