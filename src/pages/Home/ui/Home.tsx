import { Box, Divider, Tooltip, Typography } from "@mui/material";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Text } from "~/shared/ui/Text/Text";
import { Theme } from "~/app/App";
import { SignUp } from "~/pages/SignUp";

export const Home: React.FC<{
  theme: Theme;
}> = ({ theme }) => {
  const navigate = useNavigate();
  return (
    <Box
      bgcolor="primary.contrastText"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        paddingTop: 100,
      }}
    >
      <div
        className="container mb-[100px]"
        style={{
          display: "flex",
          marginTop: 50,
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            textAlign: "center",
          }}
        >
          <Typography variant="h1">
            Web-Based Criminal Sketch Generation and Comparison Platform for Law
            Enforcement
          </Typography>
          <div>
            <Typography
              variant="h6"
              sx={{
                marginTop: "20px",
              }}
            >
              For the{" "}
              <span
                style={{
                  color: "#1976D2",
                }}
              >
                Senior Project
              </span>
            </Typography>
          </div>

          <Typography
            style={{
              marginTop: "20px",
            }}
            variant="h6"
          >
            We introduce a more efficient and precise method for criminal
            detection. We intend to transform the field of law enforcement
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
              marginTop: "20px",
            }}
          >
            <Button
              sx={{
                width: "100px",
              }}
              variant="outlined"
              onClick={() => navigate("/text")}
            >
              Start
            </Button>
            <Button variant="contained" onClick={() => navigate("/text")}>
              Learn more
            </Button>
          </div>
          <br />
          <Divider />
        </div>
      </div>
      <Divider />
      <Box
        className="container"
        style={{
          marginTop: "0px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "200px",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          gap: 50,
        }}
      >
        <Typography variant="h5">Test the functionality</Typography>
        <Typography variant="h6">
          text or voice description of the criminal
        </Typography>
      </Box>

      <Box
        className="relative top-[0px] flex flex-row self-center w-[35%] justify-center items-center gap-[200px] p-[30px]"
        style={{
          borderTop:
            theme === Theme.DARK
              ? "1px solid rgb(51, 51, 51)"
              : "1px solid rgb(224, 224, 224)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Box
            sx={{
              border:
                theme === Theme.DARK
                  ? "3px dashed white"
                  : "3px dashed rgb(23, 23, 23)",
              borderRadius: "50%",
              height: 100,
              width: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all .3s ease-in-out",
              opacity: "50%",
              "&:hover": {
                opacity: "100%",
              },
            }}
            onClick={() => navigate("/audio")}
          >
            <KeyboardVoiceIcon
              sx={{
                color: "primary.main",
                fontSize: 60,
              }}
            />
          </Box>
          <Typography
            style={{
              color:
                theme === Theme.DARK
                  ? "white !important"
                  : "rgb(23, 23, 23) !important",
              opacity: "50%",
              fontSize: 18
            }}
          >
            Voice input
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Box
            sx={{
              border:
                theme === Theme.DARK
                  ? "3px dashed white"
                  : "3px dashed rgb(23, 23, 23)",
              borderRadius: "50%",
              height: 100,
              width: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all .3s ease-in-out",
              opacity: "50%",
              "&:hover": {
                opacity: "100%",
              },
            }}
            onClick={() => navigate("/text")}
          >
            <DescriptionIcon
              sx={{
                fontSize: 60,
                color: "primary.main",
              }}
            />
          </Box>
          <Typography
            style={{
              color:
                theme === Theme.DARK
                  ? "white !important"
                  : "rgb(23, 23, 23) !important",
              opacity: "50%",
              fontSize: 18
            }}
          >
            Text input
          </Typography>
        </div>
      </Box>
      <Divider />
      <Box
        className="container"
        style={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          height: "200px",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          gap: 50,
          // width: "70%",
        }}
      >
        <Typography variant="h5">Additional Information</Typography>
        <Typography variant="h6" textAlign={"center"}>
          We are committed to maintaining a secure, confidential, and efficient
          platform for all users. Your role in maintaining public safety and
          justice is crucial, and we are here to support that mission.
        </Typography>
      </Box>
      <Box
        className="container"
        style={{
          marginTop: "70px",
          marginBottom: "70px",
          display: "flex",
          flexDirection: "row",
          height: "200px",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          gap: 50,
          //width: "70%",
        }}
      >
        {/* <Box
          sx={{
            border:
              theme === Theme.DARK
                ? "1px solid rgb(51, 51, 51)"
                : "1px solid rgb(224, 224, 224)",
            width: "200px",
            height: "50px",
          }}
        ></Box> */}
        <Box
          sx={{
            height: "200px",
            border:
              theme === Theme.DARK
                ? "1px solid rgb(51, 51, 51)"
                : "1px solid rgb(224, 224, 224)",
            width: "600px",
            display: "flex",
            flexDirection: "column",
            padding: "20px 30px",
            justifyContent: "center",
          }}
        >
          <Typography color="primary">For civilians:</Typography>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <ul>
              <li
                style={{
                  listStyleType: "none",
                }}
              >
                <Typography variant="body2">
                  Witnessed a law violation
                </Typography>
              </li>
            </ul>
            <ul>
              <li
                style={{
                  listStyleType: "none",
                }}
              >
                <Typography variant="body2">
                  Visit the nearest police station to use our platform
                </Typography>
              </li>
            </ul>
            <ul>
              <li
                style={{
                  listStyleType: "none",
                }}
              >
                <Typography variant="body2">
                  Receive your authentication account on site
                </Typography>
              </li>
            </ul>
          </div>
          <Button
            variant="contained"
            style={{
              alignSelf: "flex-end",
            }}
          >
            Proceed
          </Button>
        </Box>
        <Box
          sx={{
            height: "200px",
            border:
              theme === Theme.DARK
                ? "1px solid rgb(51, 51, 51)"
                : "1px solid rgb(224, 224, 224)",
            width: "600px",
            display: "flex",
            flexDirection: "column",
            padding: "20px 30px",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color="primary.main">
            For Law Enforcement Personnel:
          </Typography>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <ul>
              <li
                style={{
                  listStyleType: "none",
                }}
              >
                <Typography variant="body2">
                  Log in or sign up with your work email
                </Typography>
              </li>
            </ul>
            <ul>
              <li
                style={{
                  listStyleType: "none",
                }}
              >
                <Typography variant="body2">
                  Manage reports and track incidents securely.
                </Typography>
              </li>
            </ul>
          </div>
          <Button
            variant="contained"
            style={{
              alignSelf: "flex-end",
            }}
          >
            Proceed
          </Button>
        </Box>
      </Box>
      <Divider />
      <Box
        className="container"
        style={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          height: "200px",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          gap: 50,
          marginBottom: "70px"
        }}
      >
        <Typography variant="h5">Our Success Stories</Typography>
        <Typography variant="h6" textAlign={"center"}>
          We are committed to maintaining a secure, confidential, and efficient
          platform for all users. Your role in maintaining public safety and
          justice is crucial, and we are here to support that mission.
        </Typography>
      </Box>
      <Divider />

      <SignUp />
      <Divider />
      <Box
        className="container relative top-[-40px]"
        style={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "row",
          height: "200px",
          justifyContent: "start",
          alignSelf: "center",
        }}
      >
        <Box className="flex-1 flex flex-col justify-center h-full">
          <Box>
            <Typography
              variant="h6"
              color="primary.main"
              className="flex-1"
              textAlign="left"
            >
              CSCI 409
            </Typography>
            <Typography variant="h6" className="flex-1" textAlign="left">
              Senior Project
            </Typography>
          </Box>
        </Box>
        <Box id="contacts" className="flex-1 flex flex-col items-end justify-around h-full gap-0">
          <Tooltip title="maxim.tsoy@nu.edu.kz">
            <Typography
              variant="h6"
              className="flex-1 cursor-pointer"
              textAlign="left"
              onClick={() => {
                //@ts-ignore
                window.location = "mailto:maxim.tsoy@nu.edu.kz";
              }}
            >
              Maxim Tsoy
            </Typography>
          </Tooltip>
          <Tooltip title="bibarys.gilazh@nu.edu.kz">
            <Typography
              variant="h6"
              className="flex-1 cursor-pointer"
              textAlign="left"
              onClick={() => {
                //@ts-ignore
                window.location = "mailto:bibarys.gilazh@nu.edu.kz";
              }}
            >
              Bibarys Gilazh
            </Typography>
          </Tooltip>
          <Tooltip title="tamerlan.abaideldinov@nu.edu.kz">
            <Typography
              variant="h6"
              className="flex-1 cursor-pointer"
              textAlign="left"
              onClick={() => {
                //@ts-ignore
                window.location = "mailto:tamerlan.abaideldinov@nu.edu.kz";
              }}
            >
              Tamerlan Abaideldinov
            </Typography>
          </Tooltip>
          <Tooltip title="batyrkhan.abukhanov@nu.edu.kz">
            <Typography
              variant="h6"
              className="flex-1 cursor-pointer"
              textAlign="left"
              onClick={() => {
                //@ts-ignore
                window.location = "mailto:batyrkhan.abukhanov@nu.edu.kz";
              }}
            >
              Batyrkhan Abukhanov
            </Typography>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
