import { Button, Divider, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { pages } from "~/shared/pages";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { Theme, User } from "~/app/App";

interface IHeader {
  setAppTheme: (...args: any[]) => any;
  appTheme: Theme;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const Header: React.FC<IHeader> = ({
  setAppTheme,
  appTheme,
  setUser,
  user,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        width: "100vw",
        background: "primary.contrastText",
        zIndex: "10000",
      }}
    >
      <AppBar position="static" className="w-full h-[70px]">
        <Toolbar>
          <Box className="w-[100%] p-[20px] flex flex-row justify-between items-center mx-auto">
            <Typography
              variant="h5"
              sx={{ my: 2, cursor: "pointer" }}
              onClick={() => navigate("/home")}
            >
              CSCI 409 Senior Project
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                marginLeft: 5,
                marginRight: "auto",
              }}
            >
              {pages.filter(el => user.role !== 'admin' ? el.name !== 'Admin Dashboard' : true).map((page) => (
                <MuiLink
                  key={page.name}
                  onClick={() => navigate(page.route)}
                  sx={{
                    my: 2,
                    display: "block",
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                  underline="none"
                  color="secondary"
                >
                  {page.name}
                </MuiLink>
              ))}
              <MuiLink
                onClick={() => navigate("/contacts")}
                sx={{
                  my: 2,
                  display: "block",
                  fontSize: 14,
                  cursor: "pointer",
                }}
                underline="none"
                color="secondary"
              >
                Contacts
              </MuiLink>
            </Box>
            <Box className="flex flex-row gap-[10px] justify-end">
              {user.name && (
                <Typography className="self-center mr-[10px]" variant="h6">
                  Welcome, {user.name}
                </Typography>
              )}
              <IconButton
                aria-label="delete"
                onClick={() =>
                  setAppTheme((prev: Theme) =>
                    prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
                  )
                }
              >
                {appTheme === Theme.DARK ? (
                  <LightModeIcon />
                ) : (
                  <NightlightRoundIcon />
                )}
              </IconButton>
              {user.name ? (
                <>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      setUser({
                        name: null,
                        password: null,
                      })
                    }
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outlined" onClick={() => navigate("/login")}>
                    Login
                  </Button>
                  {/* <Button
                    variant="contained"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button> */}
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
