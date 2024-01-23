import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    // mono: {
    //   fontFamily: "Monospace, monospace",
    //   h1: {
    //     fontSize: 24,
    //     fontWeight: 600,
    //   },
    //   h2: {
    //     fontSize: 20,
    //     fontWeight: 600,
    //   },
    //   h3: {
    //     fontSize: 18,
    //     fontWeight: 600,
    //   },
    //   h4: {
    //     fontSize: 16,
    //     fontWeight: 600,
    //   },
    //   h5: {
    //     fontSize: 14,
    //     fontWeight: 600,
    //   },
    // },
    // workSans: {
    fontFamily: "Work Sans, sans-serif",
    h1: {
      fontSize: 28,
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
    },
    h5: {
      fontSize: 16,
      fontWeight: 600,
    },
    base: {
      fontSize: 16,
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
      fontWeight: 600,
    },
  },
  //},

  palette: {
    primary: {
      purple: "#a259ff",
      blue: "#377df7",
      red: " #ff7262",
      main: "#2b2b2b",
      secondary: "#3b3b3b",
      text: "#ffffff",
      caption: "#858584",
    },
  },
  gradients: {
    gradient1: "linear-gradient(to right, #a259ff, #ff7262)",
    gradient2: "linear-gradient(to right, #a259ff, #377df7)",
  },
});

export default theme;
