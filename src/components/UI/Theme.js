import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue =  "#0B72B9";
const arcOrange = "#FFBA60";

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
    }
  }
});
