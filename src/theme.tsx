import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto Condensed",
    h1: {
      color: "#1ae8e8",
      fontSize: "13rem",
      fontWeight: "400",
    },
    h2: {
      fontSize: "5rem",
      fontWeight: "500",
    },
    h3: {
      fontFamily: "Roboto Slab",
    },
    h4: {
      fontSize: "2.5rem",
      fontWeight: "450",
    },
    button: {
      fontSize: "1rem",
      letterSpacing: 1,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#101112",
          color: "#f5f5f5",
        },
      },
    },
  },
});
