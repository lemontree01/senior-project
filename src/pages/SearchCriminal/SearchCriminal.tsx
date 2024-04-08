import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Slider,
  Switch,
  Typography,
} from "@mui/material";
import { TextField } from "~/shared/ui/TextField";

import RectangleImageUpload from "~/widgets/RectangleImageUpload/RectangleImageUpload";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import {
  createDateStrForV6InputFromSections,
  validateDateTime,
} from "@mui/x-date-pickers/internals";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MuiTextField from "@mui/material/TextField";
import styles from "~/shared/ui/TextField/TextField.module.scss";
import { environments } from "~/environments";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Criminal {
  firstName: string;
  lastName: string;
  iin: string;
  maritalStatus: string;
  offense: string;
  zipCode: string;
  image: string;
}

const tempCriminals: Criminal[] = [{
  firstName: 'dassad',
  iin: 'dsaads',
  image: 'sdadsd',
  lastName: 'dasdas',
  maritalStatus: 'dssddas',
  offense: 'dadsds',
  zipCode:'ewrewrewrew'
}]

export function SearchCriminal() {
  const navigate = useNavigate();

  const [left_eye, setLeft_eye] = useState(50);
  const [right_eye, setRight_eye] = useState(50);
  const [nose_size, setNose_size] = useState(50);
  const [nose_height, setNose_height] = useState(50);
  const [left_brow, setLeft_brow] = useState(50);
  const [right_brow, setRight_brow] = useState(50);
  const [mouth, setMouth] = useState(50);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [criminals, setCriminals] = useState<Criminal[]>([]);

  const onUpload = async () => {
    try {
      setError(false);
      setIsLoading(true);
      const response = await fetch(`${environments.api}/search-criminals/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          left_eye: +(left_eye / 100).toFixed(2),
          right_eye: +(right_eye / 100).toFixed(2),
          nose_size: +(nose_size / 100).toFixed(2),
          nose_height: +(nose_height / 100).toFixed(2),
          left_brow: +(left_brow / 100).toFixed(2),
          right_brow: +(right_brow / 100).toFixed(2),
          mouth: +(mouth / 100).toFixed(2),
        }),
      });
      const data = (await response.json()) as Criminal[];
      setCriminals(data);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

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
            Search criminals from the database
          </Typography>
          <Box className="flex flex-col">
            <Box className="flex flex-row items-start">
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "45%",
                  justifyContent: "flex-start",
                  gap: 20,
                  flex: 2,
                }}
              >
                <Box
                  style={{
                    fontSize: 20,
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "flex-center",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      width: "40%",
                    }}
                    textAlign={"center"}
                  >
                    Left eye: {(left_eye / 100).toFixed(2)}
                  </Typography>
                  <Slider
                    aria-label="Left Eye"
                    sx={{
                      width: "40%",
                    }}
                    value={left_eye}
                    onChange={(e, num) => {
                      setLeft_eye(num as number);
                      console.log("setting", num);
                    }}
                  />
                </Box>

                <Box
                  style={{
                    fontSize: 20,
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "flex-center",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      width: "40%",
                    }}
                    textAlign={"center"}
                  >
                    Right eye: {(right_eye / 100).toFixed(2)}
                  </Typography>
                  <Slider
                    aria-label="Left Eye"
                    sx={{
                      width: "40%",
                    }}
                    value={right_eye}
                    onChange={(e, num) => {
                      setRight_eye(num as number);
                    }}
                  />
                </Box>
                <Box
                  style={{
                    fontSize: 20,
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "flex-center",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      width: "40%",
                    }}
                    textAlign={"center"}
                  >
                    Nose size: {(nose_size / 100).toFixed(2)}
                  </Typography>
                  <Slider
                    aria-label="Left Eye"
                    sx={{
                      width: "40%",
                    }}
                    value={nose_size}
                    onChange={(e, num) => {
                      setNose_size(num as number);
                      console.log("setting", num);
                    }}
                  />
                </Box>
                <Box
                  style={{
                    fontSize: 20,
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "flex-center",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      width: "40%",
                    }}
                    textAlign={"center"}
                  >
                    Nose height: {(nose_height / 100).toFixed(2)}
                  </Typography>
                  <Slider
                    aria-label="Left Eye"
                    sx={{
                      width: "40%",
                    }}
                    value={nose_height}
                    onChange={(e, num) => {
                      setNose_height(num as number);
                      console.log("setting", num);
                    }}
                  />
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: 20,
                  flex: 2,
                }}
              >
                <Box
                  style={{
                    fontSize: 20,
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "flex-center",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      width: "40%",
                    }}
                    textAlign={"center"}
                  >
                    Right brow: {(right_brow / 100).toFixed(2)}
                  </Typography>
                  <Slider
                    aria-label="Left Eye"
                    sx={{
                      width: "40%",
                    }}
                    value={right_brow}
                    onChange={(e, num) => {
                      setRight_brow(num as number);
                      console.log("setting", num);
                    }}
                  />
                </Box>
                <Box
                  style={{
                    fontSize: 20,
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "flex-center",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      width: "40%",
                    }}
                    textAlign={"center"}
                  >
                    Left brow: {(left_brow / 100).toFixed(2)}
                  </Typography>
                  <Slider
                    aria-label="Left Eye"
                    sx={{
                      width: "40%",
                    }}
                    value={left_brow}
                    onChange={(e, num) => {
                      setLeft_brow(num as number);
                      console.log("setting", num);
                    }}
                  />
                </Box>
                <Box
                  style={{
                    fontSize: 20,
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "flex-center",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      width: "40%",
                    }}
                    textAlign={"center"}
                  >
                    Mouth: {(mouth / 100).toFixed(2)}
                  </Typography>
                  <Slider
                    aria-label="Left Eye"
                    sx={{
                      width: "40%",
                    }}
                    value={mouth}
                    onChange={(e, num) => {
                      setMouth(num as number);
                    }}
                  />
                </Box>
              </Box>
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
            {/* <Button variant="outlined" onClick={() => navigate(-1)}>
              Back
            </Button> */}
            <Button sx={{
              width: 120,
              height: 40
            }}variant='outlined' onClick={onUpload}>
            {isLoading ? <CircularProgress size='20px' sx={{
                fontSize: '12px'
              }}/> : <>Search</>}
            </Button>
          </div>
          {criminals.length ? criminals.map((criminal, i) => <div key={i} className={`flex flex-row my-[10px]`}>
                  <div className='flex flex-col w-[30%]'>
                    <Typography variant="body2">First Name: {criminal.firstName}</Typography>
                    <Typography variant="body2">Last Name: {criminal.lastName}</Typography>
                    <Typography variant="body2">IIN: {criminal.iin}</Typography>
                  </div> 
                  <div className='flex flex-col w-[30%]'>
                    <Typography variant="body2">Marital Status: {criminal.maritalStatus}</Typography>
                    <Typography variant="body2">Offense: {criminal.offense}</Typography>
                    <Typography variant="body2">Zip Code: {criminal.zipCode}</Typography>
                  </div> 
                  <div className='w-[30%] flex flex-row justify-end'>
                    <img src={criminal.image} className='h-[200px]' onError={() => {
                      
                    }}/>
                  </div>
                </div>) : <Typography variant="body2">&#8203;{error ? 'Server error' : 'No criminals found'}</Typography>}
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
