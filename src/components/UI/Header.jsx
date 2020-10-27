import React, { useState, useEffect } from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem";
import { IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import logo from "../../assets/logo.svg"

import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em"
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    },
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    marginLeft: "25px",
    minWidth: 10,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    height: "45px",
    marginLeft: "50px",
    marginRight: "25px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: 0,
    color: "white",
    marginTop: "50px",
    marginLeft: "612px",
    position: "fixed"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
}));

const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElement, setAnchorElement] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleHeaderTabsChanged = (event, value) => {
    setValue(value)
  };

  const handleWithOpeningTheMenu = (event) => {
    setAnchorElement(event.currentTarget);
    setOpenMenu(true)
  };

  const handleWithClosingTheMenu = (event) => {
    setAnchorElement(null);
    setOpenMenu(false);
  };

  const handleWithMenuItemClick = (event, index) => {
    setAnchorElement(null);
    setOpenMenu(false);
    setSelectedIndex(index)
  }

  const menuItemOptions = [
    {
      description: "Custom Software Development",
      pathName: "/customsoftware",
      activeIndex: 1,
      selectedMenuItemIndex: 0
    },
    {
      description: "Mobile app Development",
      pathName: "/mobileapps",
      activeIndex: 1,
      selectedMenuItemIndex: 1
    },
    {
      description: "Websites Development",
      pathName: "/websites",
      activeIndex: 1,
      selectedMenuItemIndex: 2
    },
  ]

  const routes = [
    { description: "Home", pathName: "/", activeIndex: 0 },
    {
      description: "Services",
      pathName: "/services",
      activeIndex: 1,
      ariaOwns: anchorElement ? "simple-menu" : undefined,
      ariaPopup: anchorElement ? "true" : undefined,
      mouseOver: event => handleWithOpeningTheMenu(event),
    },
    { description: "The Revolution", pathName: "/revolution", activeIndex: 2 },
    { description: "About Us", pathName: "/about", activeIndex: 3 },
    { description: "Contact Us", pathName: "/contact", activeIndex: 4 }
  ]

  useEffect(() => {
    [...menuItemOptions, ...routes].forEach(({ pathName, activeIndex, selectedMenuItemIndex }) => {
      switch (window.location.pathname) {
        case `${pathName}`:
          if (value !== activeIndex) {
            setValue(activeIndex);
            if (selectedMenuItemIndex && selectedMenuItemIndex !== selectedIndex) {
              setSelectedIndex(selectedMenuItemIndex);
            }
          }
          break;
        case "/estimate":
          setValue(5);
          break;
        default:
          break;
      }
    });
  }, [menuItemOptions, routes, selectedIndex, value, setSelectedIndex, setValue ])

  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleHeaderTabsChanged}
      >
        {
          routes.map(route => (
            <Tab
              key={uuidv4()}
              className={classes.tab}
              component={Link}
              to={route.pathName}
              label={route.description}
              aria-owns={route.ariaOwns}
              aria-haspopup={route.ariaPopup}
              onMouseOver={route.mouseOver}
            />
          ))
        }
      </Tabs>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        component={Link}
        to="/estimate"
        onClick={() => setValue(5)}
      >
        Free Estimate
      </Button>

      <Menu
        classes={{paper: classes.menu}}
        id="simple-menu"
        anchorEl={anchorElement}
        open={openMenu}
        onClose={handleWithClosingTheMenu}
        MenuListProps={{ onMouseLeave: handleWithClosingTheMenu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {
          menuItemOptions.map((option, index) => (
            <MenuItem
              key={uuidv4()}
              classes={{ root: classes.menuItem }}
              component={Link}
              to={option.pathName}
              onClick={
                (event) => {handleWithMenuItemClick(event, index);
                  setValue(1);
                  handleWithClosingTheMenu()}
              }
              selected={index === selectedIndex && value === 1}
            >
              {option.description}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{paper: classes.drawer}}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolBarMargin} />
        <List disablePadding>
          {
            routes.map(route => (
              <ListItem
                key={uuidv4()}
                onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}}
                divider
                button
                component={Link}
                to={route.pathName}
                selected={value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText
                  className={ classes.drawerItem }
                  disableTypography
                >
                  { route.description }
                </ListItemText>
              </ListItem>
            ))
          }
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerEstimate,
              selected: classes.drawerItemSelected
            }}
            to="/estimate"
            selected={value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters={true} >
            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              disableRipple
              onClick={() => setValue(0)}
            >
              <img src={logo} alt="Logo" className={classes.logo}/>
            </Button>
            { matches ? drawer : tabs }
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </>
  );
};

export default Header;
