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
  LinearProgress,
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
  picture: string;
}

const tempCriminals: Criminal[] = [{
  "iin": "asdadsfw",
  "firstName": "sfsafasfa",
  "lastName": "fasasfafs",
  "dob": "afsafssff",
  "maritalStatus": "asffssff",
  "offense": "safasfasfa",
  "zipCode": "asfsf",
  'picture': 'dsads',
  "gender": "sfafsfasafs"
}, {
  "iin": "qwe",
  "firstName": "test",
  "lastName": "qwe",
  "dob": "dgdfgfsg",
  "maritalStatus": "fddf",
  "offense": "hhfddshfdfh",
  "zipCode": "dhdsfhs",
  gender: 'dsadas',
  picture: "ASDdas"
}];

// async function blobStringToBlob(blobString: string): Promise<Blob | null> {
//   // Extract base64 data from the blob string
//   try {
//     const base64Data = blobString.split(',')[1];

//   // Convert base64 to binary
//   const binaryString = atob(base64Data);

//   // Convert binary string to ArrayBuffer
//   const arrayBuffer = new ArrayBuffer(binaryString.length);
//   const uint8Array = new Uint8Array(arrayBuffer);
//   for (let i = 0; i < binaryString.length; i++) {
//     uint8Array[i] = binaryString.charCodeAt(i);
//   }

//   // Create Blob from ArrayBuffer
//   return new Blob([uint8Array], { type: 'image/jpeg' }); // Specify the correct MIME type here
//   } catch(e) {
//     return null
//   }
// }

// async function loadBlobImage(blobString: string): Promise<string> {
//   const blob = await blobStringToBlob(blobString);
//   if(!blob) {
//     return ''
//   }
//   // Use URL.createObjectURL to create a URL for the blob
//   const blobUrl = URL.createObjectURL(blob);
//   return blobUrl;
// }

export const ListCriminals = () => {
  const [criminals, setCriminals] = useState<Criminal[]>([]);
  const [allCriminals, setAllCriminals] = useState<Criminal[]>([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');
  const [response, setResponse] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<null | string>(null)

  // const myFunc = async () => {
  //   const processed = await Promise.all(criminals.map(async (criminal) => {
  //     const picture = await loadBlobImage(criminal.picture);
  //     return {
  //       ...criminal,
  //       picture,
  //     }
  //   }))
  //   return processed
  // }

  // useEffect(() => {
  //   myFunc().then(r => {
  //     setCriminals(r);
  //     setAllCriminals(r);
  //   })
  // }, [response]);

  useEffect(() => {
    setCriminals(filterAndSortCriminals(search, allCriminals))
  }, [search]);

  useEffect(() => {
    setIsLoading(true)
    try {
      fetch(`${environments.api}/get-criminals/`).then(r => r.json()).catch(e => {
        setIsError('Server error')
        return;
      }).then(r => {
        setCriminals(r ?? []);
        setAllCriminals(r ?? []);
        setResponse('adsasd');
      })
    } catch(e) {
        setIsError('Server error')
      } finally {
      setIsLoading(false);
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
        {isError && <span className='text-red-500 font-bold'>Server Error, can't fetch data</span>}
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
            {isLoading && <LinearProgress />}
            <div
              style={{
                fontSize: 20,
                marginTop: "20px",
              }}
            />
           <TextField style={{
            width: '100%'
           }} disabled={!allCriminals.length} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}/>
           <div style={{
            display: 'flex',
            flexDirection: 'column',
           }}>
              {criminals.length ? criminals.map((criminal, i) => (
                <div key={i} className={`flex flex-row my-[10px] justify-between`}>
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
                  <div className='w-[30%] flex flex-row justify-end'>
                    
                    <img src={
                      //@ts-ignore
                      criminal.image} className='h-[200px]' onError={() => {
                      
                    }}/>
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
            marginBottom: '50px',
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
