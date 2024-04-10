import { Box, Tooltip, Typography } from "@mui/material";

export const Contacts = () => {
  return (
    <Box
    className='min-h-[calc(100vh-69px)]'
    bgcolor="primary.contrastText"
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 20,
      paddingTop: 100,
    }}
  >
    <Box
    bgcolor="primary.contrastText"
      className="container relative top-[-40px] "
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
      <Box
        id="contacts"
        className="flex-1 flex flex-col items-end justify-around h-full gap-0"
      >
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
