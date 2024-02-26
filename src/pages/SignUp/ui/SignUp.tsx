import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { TextField } from "~/shared/ui/TextField";
import { Box, Typography, Button } from "@mui/material";

export function SignUp() {
  return (
    <Box bgcolor="primary.contrastText" className="pt-[30px] w-full min-h-[calc(100vh-69px)] flex flex-row justify-center">
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
          Welcome, let's create an account
        </Typography>
        <Typography
            style={{
              marginTop: "20px",
            }}
            variant="h6"
          >
          Register for an account to begin using our Web-Based Criminal Sketch
          Generation and Comparison Platform. After creating your account,
          remember to verify it via email to complete the setup process.
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: 20,
            }}
          >
            <TextField
              width="100%"
              header="First Name"
              placeholder="Your first name"
            />
            <TextField
              width="100%"
              header="Last Name"
              placeholder="Your last name"
            />
          </div>
          <TextField
            width="100%"
            header="Work Email"
            placeholder="Your work email"
          />
          <TextField
            width="100%"
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
            alignSelf: "flex-end",
          }}
        >
          <Button variant="outlined">Continue</Button>
        </div>
      </Box>
    </Box>
  );
}
