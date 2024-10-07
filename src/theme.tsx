import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      color: "#1ae8e8",
      fontFamily: "Roboto Condensed",
      fontSize: "13rem",
      fontWeight: "400",
    },
    h3: {
      fontFamily: "Roboto Slab",
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
