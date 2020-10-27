import React from 'react';
import { Grid, Button, Typography } from "@material-ui/core"
import ButtonArrow from "../components/UI/ButtonArrow";

import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/styles";

import animationData from "../animations/landinganimation/data"

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
    }
  },
  buttonContainer: {
    marginTop: "1em",
  },
  buttonLearnMore: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderRadius: 50,
    borderWidth: 2,
    fontFamily: "Roboto",
    fontSize: "0.9rem",
    fontWeight: "bold",
    height: 45,
    textTransform: "none",
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
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

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
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h4">
              Custom Software Development
            </Typography>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default Home;
