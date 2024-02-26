import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { Box, Modal, TextField, Typography, Button } from "@mui/material";
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
  borderColor: "primary.main",
  borderWidth: "1px",
  boxShadow: 24,
  p: 4,
};

export const TextResult = () => {
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
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Sketch is generated
          </Typography>
          <Typography variant="h6" id="modal-modal-description" sx={{ mt: 2 }}>
            Submit generated image?
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button variant={"outlined"} onClick={() => navigate("/result")}>
              Yes
            </Button>
            <Button onClick={handleClose}>
              No
            </Button>
          </div>
        </Box>
      </Modal>

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
            Generate New Sketch Menu
          </Typography>
          <Typography variant="h6">
            Welcome to the main menu of our Web-Based Criminal Sketch Generation
            and Comparison Platform. Here, you have access to two powerful
            functions:
          </Typography>
          <Button variant="contained" className='w-[10%]'>Back</Button>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 50,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{

                height: 500,
                width: 300 * 1.5,
                background: "secondary.main",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px 0",
                borderColor: "primary.main",
                borderWidth: "2px",
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" color="primary.main">Generated image</Typography>
              <img
                style={{
                  width: "80%",
                  marginTop: 30,
                  borderRadius: 5,
                }}
                src={MockSketch}
              />
            </Box>
            <Box
              sx={{
                height: 500,
                width: 300 * 1.5,
                borderColor: "primary.main",
                borderWidth: "2px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px 30px",
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" color="primary.main">Taking into account </Typography>
              <Typography variant="h6" color="primary.main">the input given below:</Typography>
              <br />
              <Typography variant="body2">
                The suspect was a tall and athletic male, appearing to be in his
                late 30s. He had a distinct sharp jawline and high cheekbones,
                giving his face a rather angular appearance. His eyes were
                narrow and piercing, possibly blue or gray, and he had thick,
                dark eyebrows. His hair was short, dark, and slightly curly. He
                had a prominent, straight nose and his lips were thin. He had a
                light beard, more of a stubble really, that was neatly trimmed.{" "}
              </Typography>
            </Box>
          </Box>
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
            <Button onClick={() => navigate(-1)}>Add details</Button>
          </div>
        </Box>
      </Box>
    </>
  );
};
