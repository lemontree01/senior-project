import MockSketch from "~/shared/assets/mock-sketch.png";
import MockResult from "~/shared/assets/mock-result.jpg";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

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

export const Result = () => {
  const navigate = useNavigate();
  return (
    <>
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
            Based on the given details we found...
          </Typography>
          <Typography variant="body2">
            30 people with similar profiles Platform.
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 50,
              justifyContent: "center",
              height: 500,
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
                border: "3px solid gray",
              }}
            >
              <Typography variant="body2">Generated Sketch</Typography>
              <img
                style={{
                  width: "80%",
                  marginTop: 30,
                  borderRadius: 5,
                }}
                src={MockSketch}
              />
            </div>
            <Typography variant="h5"
              style={{
                alignSelf: "center",
              }}
            >
              Similarity 99%
            </Typography>
            <div
              style={{
                height: 500,
                width: 300 * 1.5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px 0",
                borderRadius: 5,
                border: "3px solid gray",
              }}
            >
              <Typography variant="body2">#1 Adam Walker</Typography>
              <img
                style={{
                  width: "80%",
                  marginTop: 30,
                  borderRadius: 5,
                }}
                src={MockResult}
              />
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
            <Button variant="outlined">Previous</Button>
            <Button variant="outlined" onClick={() => navigate("/text-result")}>Edit</Button>
            <Button variant="outlined">Next</Button>
          </div>
          <Button
            variant="contained"
            onClick={() => navigate("/bio")}
            style={{
              alignSelf: "center",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};
