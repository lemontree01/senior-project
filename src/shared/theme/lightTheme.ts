import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(23, 23, 23)",
      contrastText: "#fff",
    },
    secondary: {
      main: 'rgb(137, 137, 137)',
    },
    background: {
      default: '#fff'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          borderRadius: 5
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white",
          primaryColor: "black",
        },
      },
    },
  },
  typography: {
    body1: {
      fontSize: 20,
      color: "black",
    },
    h1: {
      fontWeight: "semi-bold",
    },
    body2: {
      fontSize: 16,
      color: "rgb(137, 137, 137)",
    },
    h5: {
      fontSize: 25,
      fontWeight: "bold",
      color: "black",
    },
    h6: {
      fontWeight: "normal",
      color: "rgb(137, 137, 137)",
    },
  },
});
