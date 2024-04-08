import "~/app/style/index.scss";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "~/widgets/Header";
import { AppRoutes } from "./AppRoutes";
import { Box, Divider, ThemeProvider, Tooltip, Typography, createTheme } from "@mui/material";
import { lightTheme } from "~/shared/theme/lightTheme";
import { darkTheme } from "~/shared/theme/darkTheme";
import { useEffect, useState } from "react";

export enum Theme {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export function App() {
  const [appTheme, setAppTheme] = useState<Theme>(Theme.DARK);

  return (
    <ThemeProvider theme={appTheme === Theme.DARK ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Header setAppTheme={setAppTheme} appTheme={appTheme} />
        <Divider sx={{ bgcolor: "primary.contrastText" }} />
        <div className='pt-[68px]'>
          <AppRoutes theme={appTheme}/>
        </div>
        {/* <Box id="contacts" className="flex-1 flex flex-col items-end justify-around h-full gap-0" bgcolor="primary.contrastText">
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
        </Box> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}
