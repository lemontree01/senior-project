import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { Box, Modal, TextField, Typography, Button } from "@mui/material";
import { Text } from "~/shared/ui/Text/Text";
import MockResult from "~/shared/assets/mock-result.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const Bio = () => {
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
            Submit the result?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure it's Adam Walker?
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Button variant={"outlined"} onClick={() => navigate("/home")}>
              Yes
            </Button>

            <Button variant={"contained"} onClick={() => setOpen(false)}>
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
          <Typography variant="h5">Adam Walker</Typography>

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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px 0",
                borderRadius: 5,
              }}
            >
              <img
                style={{
                  width: "80%",
                  marginTop: 30,
                  borderRadius: 5,
                }}
                src={MockResult}
              />
            </div>
            <Box
              sx={{
                height: 500,
                width: 300 * 3,
                border: "2px solid #3466E3",
                borderColor: "primary.main",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px 30px",
                borderRadius: 5,
              }}
            >
              <Typography variant="body2">
                Adam Walker, Age 43, formerly of Carlisle, was charged on Friday
                September 29, 2023, with one count of felony 2, Theft by
                Unlawful Taking. The Criminal Investigation Division of the
                District Attorney’s Office alleges that Walker took monies from
                his father’s estate that were intended for another family
                member. Walker was the executor of the estate at the time of the
                theft. The Commonwealth is required to show that the loss to the
                victim exceeded $100,000 for the felony 2 grading and
                investigators intend to show that loss will exceed $250,000.
                Walker was arraigned before Magisterial District Judge Daniel
                Freedman, 09-3-03. Walker was given $10,000 unsecured bail and
                ordered to appear at a preliminary hearing. Note: The above
                facts are only allegations at this time. Adam Walker is presumed
                innocent unless and until proven guilty in a court of law
              </Typography>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignSelf: "center",
            }}
          >
            <Button variant={"outlined"} onClick={() => setOpen(true)}>
              Confirm
            </Button>
            <Button variant="contained" onClick={() => navigate("/result")}>Back</Button>
          </div>
        </Box>
      </Box>
    </>
  );
};
