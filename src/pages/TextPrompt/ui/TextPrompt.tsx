import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import {
  Box, TextField, Typography, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function TextPrompt() {
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
          Type a textual description of a criminal
        </Typography>
        <Typography
          style={{
            marginTop: '20px',
          }}
          variant="h6"
        >
          Attempt to describe a convict in details
        </Typography>
        <TextField
          inputProps={{ style: { fontSize: 14 } }}
          placeholder="Enter your text here"
          multiline
          rows={10}
          maxRows={4}
          size="small"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignSelf: 'center',
          }}
        >
          <Button variant="outlined" onClick={() => navigate('/text-result')}>
            Save
          </Button>
          <Button variant="contained">Re-enter</Button>
          <Button variant="contained">Back</Button>
        </div>
      </Box>
    </Box>
  );
}
