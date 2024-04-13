import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { Button } from "~/shared/ui/Button";
import { Box, Modal, TextField, Typography } from "@mui/material";
import { Text } from "~/shared/ui/Text/Text";
import MockSketch from "~/shared/assets/mock-sketch.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AudioResult = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Sketch is generated
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Submit generated image?
          </Typography>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '20px'
          }}>
          <Button variant={"outlined"} onClick={() => navigate('/result')}>
            Yes
          </Button>
          <Button variant={"normal"} onClick={handleClose}>
            No
          </Button>
          </div>
          
        </Box>
      </Modal>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div
          style={{
            fontSize: 30,
            marginTop: "20px",
            fontWeight: "bold",
          }}
        >
          Generate New Sketch Menu
        </div>
        <Text variant="italic">
          Welcome to the main menu of our SuspectSearch: AI-Powered Criminal Identification System. Here, you have access to two powerful
          functions:
        </Text>
        <Button>Back</Button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 50,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: 500,
              width: 300 * 1.5,
              background: "#1976D2",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px 0",
              borderRadius: 5,
            }}
          >
            <Text color="background">Generated image</Text>

            <img
              style={{
                width: "80%",
                marginTop: 30,
                borderRadius: 5,
              }}
              src={MockSketch}
            />
          </div>
          <div
            style={{
              height: 500,
              width: 300 * 1.5,
              border: "3px solid #1976D2",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px 30px",
              borderRadius: 5,
            }}
          >
            <Text color="main">Taking into account </Text>
            <Text>the voice input given below:</Text>
            <br />
            <Text size="s">
              The suspect was a tall and athletic male, appearing to be in his
              late 30s. He had a distinct sharp jawline and high cheekbones,
              giving his face a rather angular appearance. His eyes were narrow
              and piercing, possibly blue or gray, and he had thick, dark
              eyebrows. His hair was short, dark, and slightly curly. He had a
              prominent, straight nose and his lips were thin. He had a light
              beard, more of a stubble really, that was neatly trimmed.{" "}
            </Text>
            <KeyboardVoiceIcon sx={{
              alignSelf: "flex-start",
              fontSize: 30,
              color:"#1976D2",
              marginTop: 20
            }}/>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignSelf: "center",
          }}
        >
          <Button variant={"outlined"} onClick={handleOpen}>
            Confirm
          </Button>
          <Button onClick={() => navigate("/home")}>Not Confirm</Button>
          <Button onClick={() => navigate("/audio")}>Add details</Button>
        </div>
      </div>
    </>
  );
};
