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
  Switch,
  Typography,
} from "@mui/material";
import { TextField } from "~/shared/ui/TextField";
import InputMask from "react-input-mask";

import RectangleImageUpload from "~/widgets/RectangleImageUpload/RectangleImageUpload";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { validateDateTime } from "@mui/x-date-pickers/internals";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MuiTextField from "@mui/material/TextField";
import styles from "~/shared/ui/TextField/TextField.module.scss";
import { environments } from "~/environments";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ICriminal } from "~/shared/lib/types";

export const fileToBlob = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const blob = new Blob([reader.result as ArrayBuffer], {
        type: file.type,
      });
      resolve(blob);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

const blobToString = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsText(blob);
  });
};

interface IEditCriminal {
  currentCriminal: ICriminal | null;
}

export const EditCriminal:React.FC<IEditCriminal> = ({currentCriminal}) => {
  const navigate = useNavigate();

  const [iin, setIin] = useState(currentCriminal?.iin ?? '');
  const [firstName, setFirstName] = useState(currentCriminal?.firstName ?? '');
  const [lastName, setLastName] = useState(currentCriminal?.lastName ?? "");
  const [dob, setDob] = useState<string>(currentCriminal?.dob ?? '');
  const [maritalStatus, setMaritalStatus] = useState(currentCriminal?.maritalStatus ?? '');
  const [offense, setOffense] = useState(currentCriminal?.offense ?? "");
  const [zipCode, setZipCode] = useState(currentCriminal?.zipCode ?? '');
  const [gender, setGender] = useState(currentCriminal?.gender ?? '');
  const [picture, setPicture] = useState(currentCriminal?.image ?? '');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState<
    "error" | "success" | "loading" | "initial"
  >("initial");

  const [isInitialImageShown, setIsInitialImageShown] = useState<boolean>(true);
  console.log('is initial', isInitialImageShown)
  const [nose_len, setnose_len] = useState<string | null>(null);
  const [right_brow_size, setright_brow_size] = useState<string | null>(null);
  const [left_brow_size, setleft_brow_size] = useState<string | null>(null);
  const [left_eye_size, setleft_eye_size] = useState<string | null>(null);
  const [right_eye_size, setright_eye_size] = useState<string | null>(null);
  const [nose_size, setnose_size] = useState<string | null>(null);
  const [lips_size, setlips_size] = useState<string | null>(null);

  function fileToBlobString(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result as string | ArrayBuffer;
        if (typeof result === "string") {
          resolve(result);
        } else {
          // Convert ArrayBuffer to base64 string
          const base64String = btoa(
            new Uint8Array(result).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          resolve(base64String);
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }

  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState('')
  const onDelete = async () => {
    setDeleteError('')
    setIsDeleteLoading(true);
    try {
      const response = await fetch(`${environments.api}/delete_criminal/`, {
        method: 'POST',
        body: JSON.stringify({
          iin
        })
      })

      if(response.status === 200) {
        navigate(-1);
        return;
      } else {
        throw new Error;
      }
    } catch (e) {
      setDeleteError('Couldn\'t delete the criminal');
    } finally {
      setIsDeleteLoading(false);
    }
  }

  const onUpload = async () => {
    setIsUploaded("loading");
    console.log("uploading");
    try {
      let blob = null;
      if (imageFile) {
        const temp = await fileToBlob(imageFile);
        blob = await fileToBlobString(imageFile);
      }
      console.log("blob:", blob, imageFile);
      const newCriminal: ICriminal = {
        firstName,
        lastName,
        iin,
        dob,
        maritalStatus,
        offense,
        zipCode,
        //@ts-ignore
        image: isInitialImageShown ? null : blob,
        gender,
      }
      fetch(`${environments.api}/edit_criminal/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCriminal),
      })
        .then((r) => {
          setIsUploaded("success");
          return r.json();
        })
        .catch((e) => {
          setIsUploaded("error");
          return;
        })
        .then((r) => {
          setnose_len(r?.nose_length);
          setright_brow_size(r?.right_brow_size);
          setleft_brow_size(r?.left_brow_size);
          setleft_eye_size(r?.left_eye_size);
          setright_eye_size(r?.right_eye_size);
          setnose_size(r?.nose_size);
          setlips_size(r?.lips_size);
        })
        .catch((e) => {
          setIsUploaded("error");
          return;
        });
    } catch (e) {
      setIsUploaded("error");
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
                borderRadius: 100,
              }}
            >
              <ArrowBackIcon />
            </Button>
            Edit or delete the criminal
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
              <TextField
                disabled
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
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                width="100%"
                header="Enter Second Name"
                placeholder="Second Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                width="100%"
                header="Date of Birth"
                placeholder="Date of Birth"
                value={dob}
                isDate
                onChange={(e) => setDob(e.target.value)}
              />
              <TextField
                width="100%"
                header="Marital status"
                placeholder="Marital status"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              />
              <TextField
                width="100%"
                header="Offense"
                placeholder="Offense"
                value={offense}
                onChange={(e) => setOffense(e.target.value)}
              />
              <TextField
                onMale={() => setGender("male")}
                onFemale={() => setGender("female")}
                width="100%"
                header="Enter Gender"
                placeholder="Gender"
                isGender
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <TextField
                width="100%"
                header="Zip code"
                placeholder="Zip code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                flex: 1,
                justifyContent: "start",
                paddingLeft: "50px",
                marginTop: "35px",
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  color: "gray",
                }}
              >
                Upload image
              </div>
              <RectangleImageUpload
                isInitialImageShown
                setIsInitialImageShown={setIsInitialImageShown}
                setImageFile={setImageFile}
                imageUrl={picture}
                setImageUrl={setPicture}
              />
                            {false && <div className="flex flex-col gap-5">
                {nose_len !== null && <Typography variant="h6" color="primary.main">
                  The calculated result:
                </Typography>}
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
              </div>}
            </Box>
          </Box>
          <div
            style={{
              marginTop: 20,
              marginBottom: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignSelf: "start",
            }}
          >
            <Button
              sx={{
                width: 120,
                height: 40,
              }}
              variant="outlined"
              onClick={onUpload}
            >
              {isUploaded === "loading" ? (
                <CircularProgress
                  size="20px"
                  sx={{
                    fontSize: "12px",
                  }}
                />
              ) : (
                <>Edit</>
              )}
            </Button>
            <Button onClick={onDelete} sx={{
                width: 120,
                height: 40,
              }}
              variant="outlined">
                {isDeleteLoading ? (
                <CircularProgress
                  size="20px"
                  sx={{
                    fontSize: "12px",
                  }}
                />
              ) : (
                <>Delete</>
              )}
            </Button>
          </div>
          <div
            style={{
              marginTop: 10,
              marginBottom: 50,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignSelf: "start",
            }}
          >
            {isUploaded === "success" && (
              <span className="text-green-400">Successfully edited</span>
            )}
            {isUploaded === "error" && (
              <span className="text-red-400">Server error, failed to edit</span>
            )}
          </div>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
