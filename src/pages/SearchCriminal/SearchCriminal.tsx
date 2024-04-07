import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
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
import { createDateStrForV6InputFromSections, validateDateTime } from "@mui/x-date-pickers/internals";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MuiTextField from "@mui/material/TextField";
import styles from "~/shared/ui/TextField/TextField.module.scss";
import { environments } from "~/environments";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function SearchCriminal() {
  const navigate = useNavigate();

  const [left_eye, setLeft_eye] = useState(50);
  const [right_eye, setRight_eye] = useState(50);
  const [nose_size, setNose_size] = useState(50);
  const [nose_height, setNose_height] = useState(50);
  const [left_brow, setLeft_brow] = useState(50);
  const [right_brow, setRight_brow] = useState(50);
  const [mouth, setMouth] = useState(50);
  console.log(left_eye);
  const onUpload = () => {
    try {
      fetch(`${environments.api}/search-criminals/`, {
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
      })
        .then()
        .catch((e) => {
          return;
        });
    } catch (e) {
      return;
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
            borderRadius: 100
          }}><ArrowBackIcon /></Button>
            Search criminals from the database
          </Typography>
          <Box className="flex flex-col">
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
                  width: "50%",
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
                  width: "50%",
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
                  width: "50%",
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
                  width: "50%",
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
              <Box
                style={{
                  fontSize: 20,
                  marginTop: "20px",
                  width: "50%",
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
                  width: "50%",
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
                  width: "50%",
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
            <Button variant="contained" onClick={onUpload}>
              Upload
            </Button>
          </div>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
