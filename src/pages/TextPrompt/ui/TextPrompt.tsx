import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { environments } from "~/environments";
import { useState } from "react";
import { Criminal } from "~/pages/SearchCriminal/SearchCriminal";

const tempCriminals: Criminal[] = [
  {
    firstName: "Emma ",
    lastName: "Davis",
    iin: "456789012345",
    maritalStatus: "Single",
    offense: "None",
    zipCode: "45678",
    image:
      "https://suspectsearch.pythonanywhere.com/media/images/456789012345.jpeg",
  },
  {
    firstName: "Olivia ",
    lastName: "Miller",
    iin: "567890123456",
    maritalStatus: "Married",
    offense: "None",
    zipCode: "56789",
    image:
      "https://suspectsearch.pythonanywhere.com/media/images/567890123456.jpeg",
  },
  {
    firstName: "David ",
    lastName: "Miller",
    iin: "012345678912",
    maritalStatus: "Single",
    offense: "None",
    zipCode: "01234",
    image:
      "https://suspectsearch.pythonanywhere.com/media/images/012345678912.jpeg",
  },
];

export function TextPrompt() {
  const navigate = useNavigate();
  const [criminals, setCriminals] = useState<Criminal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [nose_len, setnose_len] = useState<string | null>(null);
  const [right_brow_size, setright_brow_size] = useState<string | null>(null);
  const [left_brow_size, setleft_brow_size] = useState<string | null>(null);
  const [left_eye_size, setleft_eye_size] = useState<string | null>(null);
  const [right_eye_size, setright_eye_size] = useState<string | null>(null);
  const [nose_size, setnose_size] = useState<string | null>(null);
  const [lips_size, setlips_size] = useState<string | null>(null);

  const onClick = async () => {
    setIsLoading(true);
    setError("");
    try {
      const r = await fetch(`${environments.localApi}/search-criminals/`, {
        method: "POST",
        body: JSON.stringify({
          text,
        }),
      });
      const data = await r.json();
      setnose_len(data?.nose_height);
      setright_brow_size(data?.right_brow);
      setleft_brow_size(data?.left_brow);
      setleft_eye_size(data?.left_eye);
      setright_eye_size(data?.right_eye);
      setnose_size(data?.nose_size);
      setlips_size(data?.mouth);
      const q = await fetch(`${environments.api}/search-criminals/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const qdata = await q.json();
      setCriminals(qdata);
    } catch (e) {
      setError("Server error");
    } finally {
      console.log("instant");
      setIsLoading(false);
    }
  };



  return (
    <Box
      bgcolor="primary.contrastText"
      className="pt-[30px] w-full min-h-[calc(100vh-69px)] flex flex-row justify-center"
    >
      {!criminals.length ? (
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
            Type a textual description of a criminal
          </Typography>
          <Typography
            style={{
              marginTop: "20px",
            }}
            variant="h6"
          >
            Attempt to describe a convict in details
          </Typography>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            inputProps={{ style: { fontSize: 14 } }}
            placeholder="Enter your text here"
            multiline
            rows={10}
            maxRows={4}
            size="small"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignSelf: "center",
            }}
          >
            <Button
              variant="outlined"
              onClick={onClick}
              sx={{
                width: 120,
                height: 40,
              }}
            >
              {isLoading ? (
                <CircularProgress
                  size="20px"
                  sx={{
                    fontSize: "12px",
                  }}
                />
              ) : (
                "Save"
              )}
            </Button>
            <Button
              sx={{
                width: 120,
                height: 40,
              }}
              variant="contained"
              onClick={() => setText("")}
            >
              Re-enter
            </Button>
            <Button
              sx={{
                width: 120,
                height: 40,
              }}
              variant="contained"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </div>
          <span className="text-red-500">{error && "Server error"}</span>
        </Box>
      ) : (
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
              onClick={() => {
                setText("");
                setCriminals([]);
              }}
              sx={{
                borderRadius: 100,
              }}
            >
              <ArrowBackIcon />
            </Button>
            Result based on your text
          </Typography>
          <div className="flex flex-col gap-5">
    
                {nose_len !== null && (
                  <Typography variant="h6" color="primary.main">
                    The calculated result:
                  </Typography>
                )}
                {nose_len !== null && (
                  <Typography variant="body2">
                    Nose_length: {nose_len}
                  </Typography>
                )}
                {right_brow_size !== null && (
                  <Typography variant="body2">
                    Right brow size: {right_brow_size}
                  </Typography>
                )}
                {left_brow_size !== null && (
                  <Typography variant="body2">
                    Left brow size: {left_brow_size}
                  </Typography>
                )}
                {left_eye_size !== null && (
                  <Typography variant="body2">
                    Left eye size: {left_eye_size}
                  </Typography>
                )}
                {right_eye_size !== null && (
                  <Typography variant="body2">
                    Right eye size: {right_eye_size}
                  </Typography>
                )}
                {nose_size !== null && (
                  <Typography variant="body2">
                    Nose size: {nose_size}
                  </Typography>
                )}
                {lips_size !== null && (
                  <Typography variant="body2">
                    Lips size: {lips_size}
                  </Typography>
                )}
              </div>
          <div className="flex flex-row flex-wrap justify-between">
            {criminals.length ? (
              [...criminals].map((criminal, i) => (
                <div className="w-[33%] my-[15px] h-[250px]">
                  <Tooltip
                    title={
                      <>
                        <Typography>
                          {criminal.lastName} {criminal.firstName}
                        </Typography>
                        <Typography>IIN: {criminal.iin}</Typography>
                        <Typography>
                          Marital status: {criminal.maritalStatus}
                        </Typography>
                        <Typography>Offense: {criminal.offense}</Typography>
                        <Typography>Zip Code: {criminal.zipCode}</Typography>
                      </>
                    }
                  >
                    <img
                      src={criminal.image}
                      className="h-[200px]"
                      onError={() => {}}
                    />
                  </Tooltip>
                </div>
              ))
            ) : (
              <Typography variant="body2">
                &#8203;{error ? "Server error" : "No criminals found"}
              </Typography>
            )}
          </div>
          
          <Button
            sx={{
              width: 120,
              height: 40,
            }}
            variant="contained"
            onClick={() => {
              setText("");
              setCriminals([]);
            }}
          >
            Re-enter
          </Button>
        </Box>
      )}
    </Box>
  );
}
