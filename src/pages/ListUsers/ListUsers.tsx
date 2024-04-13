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
// import { filterAndSortCriminals } from '../ListCriminals/helper';
import { ICriminal, IUser } from '~/shared/lib/types';

interface Criminal {
  dob: string;
  firstName: string;
  lastName: string;
  iin: string;
  maritalStatus: string;
  gender: string;
  offense: string;
  zipCode: string;
  picture: string;
}

export function fuzzySearch(query: string, value: string): boolean {
  // Perform fuzzy search logic here
  // For simplicity, let's assume that fuzzy search always returns true
  return value.toLowerCase().includes(query.toLowerCase());
}

export function filterAndSortCriminals(searchQuery: string, criminals: IUser[]): IUser[] {
  // Filter criminals based on fuzzy search on firstName, lastName, and offense
  const filteredCriminals = criminals.filter(criminal => {
    return (
      fuzzySearch(searchQuery, criminal.first_name) ||
      fuzzySearch(searchQuery, criminal.last_name) 
      // fuzzySearch(searchQuery, criminal.offense)
    );
  });

  // Sort filtered criminals based on similarity to the search query
  filteredCriminals.sort((a, b) => {
    // Calculate similarity scores for each criminal
    const similarityA = calculateSimilarity(searchQuery, a);
    const similarityB = calculateSimilarity(searchQuery, b);
    // Sort in descending order of similarity
    return similarityB - similarityA;
  });

  return filteredCriminals;
}

function calculateSimilarity(query: string, criminal: IUser): number {
  let similarityScore = 0;
  // Calculate similarity score based on firstName, lastName, and offense
  if (fuzzySearch(query, criminal.first_name)) {
    similarityScore++;
  }
  if (fuzzySearch(query, criminal.last_name)) {
    similarityScore++;
  }
  return similarityScore;
}

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

export const ListUsers:React.FC<{setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>}> = ({setCurrentUser}) => {
  const [criminals, setCriminals] = useState<IUser[]>([]);
  const [allCriminals, setAllCriminals] = useState<IUser[]>([]);
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
      fetch(`${environments.api}/get_users/`).then(r => r.json()).catch(e => {
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

  // const [deletingIIN, setDeletingIIN] = useState<null | string>(null);

  // const deleteCriminal = async (iin: string) => {
  //   setDeletingIIN(iin);
  //   try {
  //     fetch(`${environments.api}/delete-criminal`);
  //   }
  // }

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
          Search for users
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
                <div key={i} className={`flex flex-row my-[10px] justify-between ${i !== 0 && 'mt-[50px]'}`}>
                  <div className={`flex flex-col w-[30%]`}>
                    <Typography variant="body2">First Name: {criminal.first_name}</Typography>
                    <Typography variant="body2">Last Name: {criminal.last_name}</Typography>
                    <Typography variant="body2">Date of Birth: {criminal.dob}</Typography>
                    <Typography variant="body2">IIN: {criminal.iin}</Typography>
                    <div className='flex flex-row mt-[50px] gap-[20px]'>
                    <Button variant="outlined" onClick={() => {
                      setCurrentUser({
                        badge_number: criminal.badge_number,
                        department: criminal.department,
                        dob: criminal.dob,
                        first_name: criminal.first_name,
                        iin: criminal.iin,
                        last_name: criminal.last_name,
                        password: criminal.password,
                        role: criminal.role,

                      })
                      navigate('/edit-user')
                    }}>Edit</Button>
                    </div>
                  </div> 
                  <div className='flex flex-col w-[30%]'>
                    <Typography variant="body2">Department: {criminal.department}</Typography>
                    <Typography variant="body2">Badge number: {criminal.badge_number}</Typography>
                    <Typography variant="body2">Role: {criminal.role}</Typography>
                    <Typography variant="body2">Password: {criminal.password}</Typography>
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
