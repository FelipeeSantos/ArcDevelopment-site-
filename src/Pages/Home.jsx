import React from 'react';
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core"

import ButtonArrow from "../components/UI/ButtonArrow";

import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/styles";

import animationData from "../animations/landinganimation/data"
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg"
import websiteIcon from "../assets/websiteIcon.svg"
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";

const useStyles = makeStyles(theme => ({
  animation: {
    marginLeft: "10%",
    marginTop: "2em",
    maxWidth: "50em",
    minWidth: "21em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    }
  },
  buttonContainer: {
    marginTop: "1em",
  },
  buttonLearnMore: {
    ...theme.typography.buttonLearnMore,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    }
  },
  heroTextContainer: {
    marginLeft: "1em",
    minWidth: "21.5em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    },
  },
  specialSpanText: {
    color: theme.palette.common.orange,
    fontFamily: "Pacifico",
  },
  buttonLearnMore1: {
    ...theme.typography.buttonLearnMore,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    }
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    },
  },
  servicesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      padding: 25,
    },
  },
  revolutionCard: {
    position: "absolute",
    borderRadius: 15,
    boxShadow: theme.shadows[10],
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
      padding: "8em 0",
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  },
  backgroundFreeEstimate: {
    backgroundAttachment: "fixed",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit"
    }
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid className={classes.mainContainer} container direction="column">

      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology<br />to the Midwest
            </Typography>
            <Grid className={classes.buttonContainer} container justify="center" spacing={6}>
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button className={classes.buttonLearnMore} variant="outlined">
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow height={15} width={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          className={classes.servicesContainer}
          container
          direction="row"
          justify={ matchesSM ? "center" : undefined }
        >
          <Grid
            item
            style={
              {
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }
            }
          >
            <Typography variant="h4" style={{ marginBottom: 5 }}>
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to
              <span className={classes.specialSpanText}> celebration.</span>
            </Typography>
            <Button
              className={classes.buttonLearnMore1}
              variant="outlined"
              style={{ marginTop: 10 }}
            >
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow
                height={10}
                width={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} src={customSoftwareIcon} alt="Custom software icon"/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          className={classes.servicesContainer}
          container
          direction="row"
          justify={ matchesSM ? "center" : "flex-end" }
        >
          <Grid
            item
            style={
              {
                textAlign: matchesSM ? "center" : undefined,
              }
            }
          >
            <Typography variant="h4" style={{ marginBottom: 5 }}>
              iOS/Android App Development
            </Typography>
            <Typography variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              { matchesSM ? null : <br/> }
              with either mobile platform.
            </Typography>
            <Button
              className={classes.buttonLearnMore1}
              variant="outlined"
              style={{ marginTop: 10 }}
            >
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow
                height={10}
                width={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{marginRight: matchesSM ? 0 : "5em"}}
            >
            <img className={classes.icon} src={mobileAppsIcon} alt="Mobile App icon"/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          className={classes.servicesContainer}
          container
          direction="row"
          justify={ matchesSM ? "center" : undefined }
        >
          <Grid
            item
            style={
              {
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }
            }
          >
            <Typography variant="h4" style={{ marginBottom: 5 }}>
              Website Development
            </Typography>
            <Typography variant="subtitle1">
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              className={classes.buttonLearnMore1}
              variant="outlined"
              style={{ marginTop: 10 }}
            >
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow
                height={10}
                width={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid style={{ alignItems: "center" }} item>
            <img className={classes.icon} src={websiteIcon} alt="Website icon"/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid style={{ height: "100em", marginTop: "12em" }} container alignItems="center" justify="center">
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: "center" }}>
                <Grid item>
                  <Typography variant="h3">
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom={true} variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                  </Typography>
                  <Button className={classes.buttonLearnMore} variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn more</span>
                    <ButtonArrow height={15} width={15} fill={theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      <Grid container alignItems="center" direction="row" style={{ height: "80em" }}>
        <Grid item
              container
              style={{ position: "absolute" }}
              direction={matchesSM ? "column" : "row"}
              spacing={matchesSM ? 10 : 0}
        >

          <Grid item sm style={{ marginLeft: matchesSM ? "2em" : "5em" }}>
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: "white" }}>About Us</Typography>
              <Typography variant="subtitle2">Let's get personal.</Typography>
              <Grid item>
                <Button
                  className={classes.buttonLearnMore1}
                  variant="outlined"
                  style={{ marginTop: 10, color: "white", borderColor: "white" }}
                >
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow
                    height={10}
                    width={10}
                    fill="white"
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm style={{ marginRight: matchesSM ? "2em" : "5em", textAlign: "right" }}>
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: "white" }}>Contact Us</Typography>
              <Typography variant="subtitle2">Say hello! <span role="img" aria-label="Emoji waving hand">👋</span></Typography>
              <Grid item>
                <Button
                  className={classes.buttonLearnMore1}
                  variant="outlined"
                  style={{ marginTop: 10, color: "white", borderColor: "white" }}
                >
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow
                    height={10}
                    width={10}
                    fill="white"
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <div className={classes.infoBackground} />
      </Grid>

      <Grid
        className={classes.backgroundFreeEstimate}
        container
        justify={matchesSM ? "center" : "space-between"}
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
      >

        <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit" }}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br />
                Revolutionary Results
              </Typography>
              <Typography variant="subtitle2"
                          style={{ fontSize: "1.5rem", marginTop: matchesSM ? 40 : 0 }}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid container item justify={ matchesSM ? "center" : "undefined" }>
                <Button
                  className={classes.buttonLearnMore1}
                  variant="outlined"
                  style={{ marginTop: 10 }}
                >
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow
                    height={10}
                    width={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item >
          <Button
            className={classes.estimateButton}
            variant="contained"
            style={{ fontSize: "1.5rem", height: 80, marginRight: matchesSM ? 0 : "5em" , width: 205, marginTop: matchesSM ? 40 : 0 }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default Home;
