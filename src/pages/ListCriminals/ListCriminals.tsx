import React, { useEffect, useState } from 'react'
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import { TextField } from "~/shared/ui/TextField";

import RectangleImageUpload from "~/widgets/RectangleImageUpload/RectangleImageUpload";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { validateDateTime } from "@mui/x-date-pickers/internals";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MuiTextField from "@mui/material/TextField";
import styles from "~/shared/ui/TextField/TextField.module.scss";
import { environments } from "~/environments";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { filterAndSortCriminals } from './helper';

interface Criminal {
  'dob': string;
  'firstName': string;
  'lastName': string;
  'iin': string;
  'maritalStatus': string;
  'gender': string;
  'offense': string;
  'zipCode': string;
  'picture': string;
}

const tempCriminals: Criminal[] = [{
  "iin": "qwe",
  "firstName": "qwe",
  "lastName": "qwe",
  "dob": "dgdfgfsg",
  "maritalStatus": "fddf",
  "offense": "hhfddshfdfh",
  "zipCode": "dhdsfhs",
  "picture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAC0CAIAAABQTGKBAAAAA3NCSVQICAjb4U/gAAAD6ElEQVR4nO3dQW7aUBRA0brKPMrKWELE/gewA3eAVFVIsShc8405Z9QRdp9dXR4x6TTP8y8AKPwefQIA7IeoAJARFQAyogJARlQAyIgKABlRASAjKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGVEBICMqAGREBYCMqACQ+Rh9Am9hmqbRp8Bu+R/B2RSbCgAZm8rzeEdJywbMBtlUAMiICgAZUQEgIyoAZEQFgIyoAJARFQAyogJARlQAyIgKABlRASAjKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGVEBICMqAGREBYCMqACQERUAMqICQEZUAMiICgAZUQEgIyoAZEQFgIyoAJARFQAyogJARlQAyIgKABlRASAjKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGVEBICMqAGREBYCMqACQERUAMqICQEZUAMh8jD4BHjJN08Cjz/M88Oj/y6wWGA4VmwoAGZvKHjz/jd7YN7aPMKsFhsPjbCoAZEQFgIyoAJARlXWdz+fj8Xj58/F4PJ/PY89nyy6z+vr6mqbJrJa5r27nvnq2mTUdDod/p/39/d2+/qiLuMZxzep2+az2NJwra99XXJnme5/38NjGdtx9Ee/2ulffrBYYzltZ6XL7+AuAzP1RGbpgvYznfKQzSvt3MavbrfTx1yjJTH7i46+fvOTl5HQ6HQ6Hz8/Py918Op3a1x91Edc47mVWf//lm9WC/L7a03CurH1fceX+n6mwBZePpJ9/Edc77iu+8jaP+192P5yXuAr74GcqAGREBYCMqACQ8VuK98DD/rczqwWGw+NsKgBkbCqvzdMstzOrBYZDxaYCQEZUAMiICgAZUQEgIyoAZEQFgIyoAJARFQAyogJARlQAyIgKABlRASAjKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGVEBICMqAGREBYCMqACQERUAMqICQEZUAMiICgAZUQEgIyoAZEQFgIyoAJARFQAyogJARlQAyIgKABlRASAjKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGVEBICMqAGREBYCMqACQERUAMqICQEZUAMiICgCZj9EnAG9tmqaBR5/neeDR2SWbCgAZmwqM9/yNYeyGxI7ZVADIiAoAGVEBICMqAGREBYCMp7/YIs8mPYc5k7OpAJCxqbAt7/Ydb9+oZ2dsKgBkRAWAjKgAkBEVADKiAkDG018wnu+LsBs2FQAykwfVAajYVADIiAoAGVEBICMqAGREBYCMqACQERUAMqICQEZUAMiICgAZUQEgIyoAZEQFgIyoAJARFQAyogJARlQAyIgKABlRASAjKgBk/gAE+XDN++YlAQAAAABJRU5ErkJggg==",
  "gender": "hsdfh"
}, {
  "iin": "qwe",
  "firstName": "maxim",
  "lastName": "qwe",
  "dob": "dgdfgfsg",
  "maritalStatus": "fddf",
  "offense": "hhfddshfdfh",
  "zipCode": "dhdsfhs",
  gender: 'dsadas',
  picture: "ASDdas"
}];

async function blobStringToBlob(blobString: string): Promise<Blob | null> {
  // Extract base64 data from the blob string
  try {
    const base64Data = blobString.split(',')[1];

  // Convert base64 to binary
  const binaryString = atob(base64Data);

  // Convert binary string to ArrayBuffer
  const arrayBuffer = new ArrayBuffer(binaryString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  // Create Blob from ArrayBuffer
  return new Blob([uint8Array], { type: 'image/jpeg' }); // Specify the correct MIME type here
  } catch(e) {
    return null
  }
}

async function loadBlobImage(blobString: string): Promise<string> {
  const blob = await blobStringToBlob(blobString);
  if(!blob) {
    return ''
  }
  // Use URL.createObjectURL to create a URL for the blob
  const blobUrl = URL.createObjectURL(blob);
  return blobUrl;
}

export const ListCriminals = () => {
  const [criminals, setCriminals] = useState<Criminal[]>([]);
  const [allCriminals, setAllCriminals] = useState<Criminal[]>([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');
  const [response, setResponse] = useState<any>();

  const myFunc = async () => {
    const processed = await Promise.all(criminals.map(async (criminal) => {
      const picture = await loadBlobImage(criminal.picture);
      return {
        ...criminal,
        picture,
      }
    }))
    return processed
  }

  useEffect(() => {
    myFunc().then(r => {
      setCriminals(r);
      setAllCriminals(r);
    })
  }, [response]);

  useEffect(() => {
    setCriminals(filterAndSortCriminals(search, allCriminals))
  }, [search]);

  useEffect(() => {
    try {
      fetch(`${environments.api}/get-criminals/`).then(r => r.json()).catch(e => {
        return;
      }).then(r => {
        setCriminals(r ?? []);
        setResponse('adsasd');
      })
    } catch(e) {

    }
  }, [])

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
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Typography variant="h5">
          <Button
            onClick={() => navigate(-1)}
            sx={{
              borderRadius: 100,
            }}
          >
            <ArrowBackIcon />
          </Button>
          Search for criminals
        </Typography>
        <Box className="flex flex-row">
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 20,
              flex: 2,
            }}
          >
            <div
              style={{
                fontSize: 20,
                marginTop: "20px",
              }}
            />
           <TextField disabled={!allCriminals.length} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}/>
           <div style={{
            display: 'flex',
            flexDirection: 'column',
           }}>
              {criminals.length ? criminals.map((criminal, i) => (
                <div key={i} className='flex flex-row my-[10px]'>
                  <div className='flex flex-col w-[30%]'>
                    <Typography variant="body2">First Name: {criminal.firstName}</Typography>
                    <Typography variant="body2">Last Name: {criminal.lastName}</Typography>
                    <Typography variant="body2">Date of Birth: {criminal.dob}</Typography>
                    <Typography variant="body2">IIN: {criminal.iin}</Typography>
                  </div> 
                  <div className='flex flex-col w-[30%]'>
                    <Typography variant="body2">Gender: {criminal.gender}</Typography>
                    <Typography variant="body2">Marital Status: {criminal.maritalStatus}</Typography>
                    <Typography variant="body2">Offense: {criminal.offense}</Typography>
                    <Typography variant="body2">Zip Code: {criminal.zipCode}</Typography>
                  </div> 
                  <div>
                    <img src={criminal.picture} />
                  </div>
                </div>
              )) : <Typography variant="body2">&#8203;{search && 'No criminals found'}</Typography>}
           </div>
          </Box>
        </Box>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignSelf: "start",
          }}
        >
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </Box>
    </Box>
  </LocalizationProvider>
  )
}
