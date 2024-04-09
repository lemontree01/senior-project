import { Box, Typography, Button, Divider } from "@mui/material";
import { TextField } from "~/shared/ui/TextField";
import { Text } from "~/shared/ui/Text/Text";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { User } from "~/app/App";
import { useState } from "react";

interface ISignIn {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const SignIn: React.FC<ISignIn> = (props) => {
  const { setUser, user } = props;

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Typography variant="h5">Welcome to the login page</Typography>
        <Typography
          style={{
            marginTop: "20px",
          }}
          variant="h6"
        >
          If you're new here, start by creating an account to access our
          Web-Based Criminal Sketch Generation and Comparison Platform.
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignSelf: "center",
            gap: 20,
          }}
        >
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            width="50%"
            header="Work Email"
            placeholder="Your work email"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            width="50%"
            header="Password"
            placeholder="Your password"
            type="password"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "flex-end",
            alignSelf: "flex-start",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              setUser({
                name: username,
                password,
              });
              navigate("/home");
            }}
          >
            Continue
          </Button>
        </div>
        <Divider />
        <Typography variant="h6" color="primary.main">
          Important
        </Typography>
        <Typography variant="body2">
          Before you proceed with using this platform, it is crucial that you
          read and understand the following terms and conditions. By clicking
          "Continue," you acknowledge that you have read, understood, and agree
          to be bound by these terms
        </Typography>
        <Typography variant="body2">
          1. This platform is intended exclusively for use by law enforcement
          officials and authorized personnel. By agreeing to these terms, you
          confirm that you are an authorized user acting within the scope of
          your law enforcement duties
        </Typography>
        <Typography variant="body2">
          2. This tool is designed to assist in the generation and comparison of
          criminal sketches. It is not intended to replace professional judgment
          or investigative practices but to complement them.
        </Typography>
      </Box>
    </Box>
  );
};
