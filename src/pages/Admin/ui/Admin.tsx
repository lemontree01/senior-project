import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, FormControlLabel, FormGroup, Switch, Typography,
} from '@mui/material';
import { TextField } from '~/shared/ui/TextField';

import RectangleImageUpload from '~/widgets/RectangleImageUpload/RectangleImageUpload';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { validateDateTime } from '@mui/x-date-pickers/internals';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import MuiTextField from '@mui/material/TextField'
import styles from '~/shared/ui/TextField/TextField.module.scss';
import { environments } from '~/environments';

export function Admin() {
  const navigate = useNavigate();

  const [iin, setIin] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState<string>('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [offense, setOffense] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [picture, setPicture] = useState('')

  const onUpload = () => {
    console.log('uploading')
    try {
      fetch(`${environments.api}/import-criminals/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          iin,
          firstName,
          lastName,
          dob,
          maritalStatus,
          offense,
          zipCode,
          picture
        })
      }).then().catch(e => {
        return;
      })
    } catch(e) {
      return;
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              value={iin}
              onChange={(e) => setIin(e.target.value)} 
            />
            <TextField
              width="100%"
              header="Enter First Name"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <TextField
              width="100%"
              header="Enter Second Name"
              placeholder="Second Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <TextField
              width="100%"
              header="Date of Birth"
              placeholder="Date of Birth"
              value={dob}
              onChange={e => setDob(e.target.value)}
            />
          <TextField
              width="100%"
              header="Marital status"
              placeholder="Marital status"
              value={maritalStatus}
              onChange={e => setMaritalStatus(e.target.value)}
            />
          <TextField
              width="100%"
              header="Offense"
              placeholder="Offense"
              value={offense}
              onChange={e => setOffense(e.target.value)}
            />
          <TextField
              width="100%"
              header="Zip code"
              placeholder="Zip code"
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
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
            <RectangleImageUpload imageUrl={picture} setImageUrl={setPicture}/>
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
          <Button variant="contained"               onClick={onUpload}>Upload</Button>
        </div>
      </Box>
    </Box>
    </LocalizationProvider>
  );
}
