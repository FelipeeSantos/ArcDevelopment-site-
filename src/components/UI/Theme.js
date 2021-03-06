import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue =  "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686"

  export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },
  typography: {
    tab: {
      color: "white",
      fontFamily: "Raleway",
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "none",
    },
    estimate: {
      color: "white",
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none"
    },
    h2: {
      color: `${arcBlue}`,
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h3: {
      color: arcBlue,
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1.5
    },
    h4: {
      color: `${arcBlue}`,
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    subtitle1: {
      color: `${arcGrey}`,
      fontSize: "1.25rem",
      fontWeight: 300
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    buttonLearnMore: {
      borderColor: `${arcBlue}`,
      color: `${arcBlue}`,
      borderRadius: 50,
      borderWidth: 2,
      fontFamily: "Roboto",
      fontWeight: "bold",
      textTransform: "none",
    }
  }
});
