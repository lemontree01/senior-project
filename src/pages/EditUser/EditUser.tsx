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

import RectangleImageUpload from "~/widgets/RectangleImageUpload/RectangleImageUpload";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { environments } from "~/environments";
import { fileToBlob } from "~/pages/Admin/ui/Admin";
import { IUser } from "~/shared/lib/types";
export const EditUser: React.FC<{
  user: IUser | null;
}> = ({ user }) => {
  const navigate = useNavigate();
  console.log("this", user);
  const [iin, setIin] = useState(user?.iin ?? "");
  const [firstName, setFirstName] = useState(user?.first_name ?? "");
  const [lastName, setLastName] = useState(user?.last_name ?? "");
  const [dob, setDob] = useState<string>(user?.dob ?? "");
  // const [maritalStatus, setMaritalStatus] = useState("");
  // const [offense, setOffense] = useState("");
  // const [zipCode, setZipCode] = useState("");
  // const [gender, setGender] = useState("");
  // const [picture, setPicture] = useState("noImage");
  // const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState<
    "error" | "success" | "loading" | "initial"
  >("initial");

  // const [nose_len, setnose_len] = useState("");
  // const [right_brow_size, setright_brow_size] = useState("");
  // const [left_brow_size, setleft_brow_size] = useState("");
  // const [left_eye_size, setleft_eye_size] = useState("");
  // const [right_eye_size, setright_eye_size] = useState("");
  // const [nose_size, setnose_size] = useState("");
  // const [lips_size, setlips_size] = useState("");

  const [department, setDepartment] = useState(user?.department ?? "");
  const [badge_number, setBadgeNumber] = useState(user?.badge_number ?? "");
  const [role, setRole] = useState(user?.role ?? "");
  const [password, setPassword] = useState(user?.password ?? "");

  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const onDelete = async () => {
    setDeleteError("");
    setIsDeleteLoading(true);
    try {
      const response = await fetch(`${environments.api}/delete_users/`, {
        method: "POST",
        body: JSON.stringify({
          iin,
        }),
      });

      if (response.status === 200) {
        navigate(-1);
        return;
      } else {
        throw new Error();
      }
    } catch (e) {
      setDeleteError("Couldn't delete the criminal");
    } finally {
      setIsDeleteLoading(false);
    }
  };
  console.log(firstName);
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

  const onUpload = async () => {
    setIsUploaded("loading");
    console.log("uploading", {
      first_name: firstName,
      last_name: lastName,
      iin: iin,
      dob,
      department,
      badge_number,
      role,
    });
    try {
      fetch(`${environments.api}/edit_users/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          iin: iin,
          dob,
          department,
          badge_number,
          role,
          password,
        }),
      })
        .then((r) => {
          setIsUploaded("success");
          return r.json();
        })
        .catch((e) => {
          setIsUploaded("error");
          return;
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
          Edit or delete the user
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
              header="Department"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <TextField
              width="100%"
              header="Badge number"
              placeholder="Badge number"
              value={badge_number}
              onChange={(e) => setBadgeNumber(e.target.value)}
            />
            <TextField
              onMale={() => setRole("policeman")}
              onFemale={() => setRole("admin")}
              width="100%"
              header="Enter Role"
              placeholder="Role"
              isRole
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <TextField
              width="100%"
              header="User's password"
              placeholder="User's password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
          <Button
            onClick={onDelete}
            sx={{
              width: 120,
              height: 40,
            }}
            variant="outlined"
          >
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
            marginTop: 20,
            marginBottom: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignSelf: "start",
          }}
        >
          {isUploaded === "success" && (
            <span className="text-green-400">Successfully loaded</span>
          )}
          {isUploaded === "error" && (
            <span className="text-red-400">Server error, failed to load</span>
          )}
        </div>
      </Box>
    </Box>
  );
};
