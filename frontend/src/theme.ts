import { createTheme } from "@mui/material/styles";
import "@fontsource-variable/mulish";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#5ACCCC",
      light: "#CFFAFA",
      dark: "#28B8B8",
    },
    secondary: {
      main: "#53C2C2",
      dark: "#4AA088",
      light: "rgba(207, 250, 250, 0.8)",
    },
    warning: {
      main: "#FABD33",
      dark: "#FAAD00",
    },
    error: {
      main: "#F76434",
      light: "#FFE6DC",
    },
    text: {
      primary: "#2D2D2D",
      secondary: "#333333",
      disabled: "#636161",
    },
    info: {
      main: "#335C6E",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Mulish Variable, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
                @font-face {
                  font-family: 'Mulish Variable';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 200 1000;
                  src: url(@fontsource-variable/mulish/files/mulish-latin-wght-normal.woff2) format('woff2-variations');
                  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
                }

                @font-face {
                  font-family: 'Mulish Variable';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 200 1000;
                  src: url(@fontsource-variable/mulish/files/mulish-latin-ext-wght-normal.woff2) format('woff2-variations');
                  unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;
                }
            `,
    },
  },
});

export default theme;
