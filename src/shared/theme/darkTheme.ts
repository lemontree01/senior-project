import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
      contrastText: "rgb(23, 23, 23)",
    },
    secondary: {
      main: "rgb(137, 137, 137)",
    },
    background: {
      default: "rgb(23, 23, 23)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          borderRadius: 5,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "black",
          primaryColor: "white",
        },
      },
    },
  },
  typography: {
    body1: {
      fontSize: 20,
      color: "white",
    },
    body2: {
      fontSize: 16,
      color: "rgb(137, 137, 137)",
    },
    h1: {
      color: "rgb(228, 228, 228)",
      fontWeight: "semi-bold",
    },
    h5: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
    },
    h6: {
      fontWeight: "normal",
      color: "rgb(137, 137, 137)",
    },
  },
});
