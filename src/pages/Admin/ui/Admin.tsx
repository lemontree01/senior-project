import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, FormControlLabel, FormGroup, Switch, Typography,
} from '@mui/material';
import { TextField } from '~/shared/ui/TextField';

import RectangleImageUpload from '~/widgets/RectangleImageUpload/RectangleImageUpload';

export function Admin() {
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
        <Typography variant="h5">
          Upload the new criminal to the database
        </Typography>
        <Box className="flex flex-row">

          <Box style={{
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
            <TextField
              width="100%"
              header="Enter Age"
              placeholder="Age"
            />
          </Box>
          <Box sx={{
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
            <RectangleImageUpload />
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
