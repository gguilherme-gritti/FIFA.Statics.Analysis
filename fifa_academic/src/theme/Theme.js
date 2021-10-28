
import { ThemeProvider } from "styled-components";

const theme = {
  palette: {
    primary: "#0c2d6a",
    secondary: "#d6e5ff",
    tertiary: "#AFB9C8",
    black: "#2b2b2b",
    white: "white",
    grey: "#858585",
    orange: "#fc9d03",
    green: "#7FC8A9",
    diminutegreen: "#bcdccf",
    red: "#FA8072",
    redSecondary: "#F55C47",
    blue: "#0F52BA",
    light: {
      grey: "#DDDDDD",
      subgrey: "#EEEEEE",
    },
    transparent: "transparent",
  },
  fonts: {
    mulish: "Mulish",
    comfortaa: "Comfortaa",
    montserrat: "Montserrat",
    helvetica: "Helvetica",
    mohave: "Mohave",
    opensans: "Open Sans",
  },
  spacing: (multiplier) => 8 * multiplier + "px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
