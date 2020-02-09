import React from "react";
import { AnimatedSwitch, spring } from "react-router-transition";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Views from "./views";
import SignIn from "./views/auth";
import PasswordRecover from "./views/auth/PasswordRecover";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import MessageIcon from "@material-ui/icons/Message";

import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { connect } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Slide from "@material-ui/core/Slide";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import RedirectToHome from "./views/Redirect";
import firebase from "firebase";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  purple: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[300],
    marginTop: 3
  },
  userButton: {
    height: 40,
    marginLeft: 5,
    backgroundColor: "transparent",
    border: "none"
  }
}));

function zoom(val) {
  return spring(val, {
    stiffness: 135,
    damping: 15
  });
}

const switchConfig = {
  atEnter: {
    opacity: 0,
    offset: -50
  },
  atLeave: {
    opacity: 0,
    offset: zoom(50)
  },
  atActive: {
    opacity: 1,
    offset: zoom(0)
  }
};

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.offset}px)`
  };
}

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

const App = props => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMsg, setOpenMsg] = React.useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // let data = {
  //   name: 'Los Angeles',
  //   state: 'CA',
  //   country: 'USA'
  // };

  // // Add a new document in collection "cities" with ID 'LA'
  // let setDoc = db.collection('cities').doc('LA').set(data);

  return (
    <Paper
      square
      style={{ width: "100%", height: "100vh", backgroundColor: "#E7E9FA" }}
    >
      {location.pathname === "/auth" ? (
        <div></div>
      ) : (
        <div
          square
          style={{
            width: "100%",
            height: 45,
            paddingLeft: 10,
            backgroundColor: "#ffffff",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#C6C6C6",
            display: "flex",
            paddingTop: 7,
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", marginTop: 10 }}>
            <div>
              <Typography color="inherit">Switch Smart</Typography>
              {/* <img src={}/> */}
            </div>
          </div>

          <div style={{ marginRight: 20, display: "flex" }}>
            <div style={{ marginLeft: 10, marginTop: 5 }}>
              <Button
                size="small"
                onClick={() => {
                  history.push(props.NavTo.nav_to);
                }}
                aria-label={`back to`}
                startIcon={<HomeIcon />}
              >
                Main menu
              </Button>
            </div>

            <div style={{ marginLeft: 10, marginTop: 5 }}>
              <Button
                size="small"
                onClick={() => {
                  // history.push(props.NavTo.nav_to);
                }}
                aria-label={`settings`}
                startIcon={<SettingsIcon />}
              >
                Settings
              </Button>
            </div>

            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    You dont have any messages
                  </Typography>
                </React.Fragment>
              }
            >
              <div style={{ marginLeft: 10, marginTop: 5, marginRight: 10 }}>
                <Button
                  size="small"
                  onClick={() => {
                    setOpenMsg(true);
                  }}
                  aria-label={`back to`}
                  startIcon={<MessageIcon />}
                >
                  Messages
                </Button>
              </div>
            </HtmlTooltip>

            <div
              style={{
                height: 35,
                width: 2,
                backgroundColor: "#DCDCE1",
                marginRight: 10
              }}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Tooltip with HTML</Typography>
                  <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                  <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
                </React.Fragment>
              }
            >
              <div style={{ display: "flex" }}>
                <Avatar
                  aria-haspopup="true"
                  onClick={handleClick}
                  alt="Remy Sharp"
                  className={classes.purple}
                >
                  H
                </Avatar>
                <button className={classes.userButton}>
                  <div style={{ display: "flex" }}>
                    <Typography
                      style={{ color: "#7D71C9" }}
                      variant="subtitle1"
                    >
                      Full name of user
                    </Typography>
                    <div>
                      <ArrowDropDownIcon style={{ color: "#7D71C9" }} />
                    </div>
                  </div>
                </button>
              </div>
            </HtmlTooltip>

            {/* user menu */}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      )}
      {/* <Paper
        square
        style={{ width: "100%", height: 40, backgroundColor: "#EFEFEF" }}
      ></Paper> */}

      <Route
        render={({ location }) => (
          <div>
            <AnimatedSwitch
              {...switchConfig}
              runOnMount={location.pathname === "/"}
              mapStyles={mapStyles}
              className="switch-wrapper"
            >
              <Route path="/" exact component={RedirectToHome} />
              <Route path="/auth" component={SignIn} />
              <Route path="/home" component={Views} />
              <Route path="/PasswordRecover" component={PasswordRecover} />
            </AnimatedSwitch>
          </div>
        )}
      />
      <Slide
        style={{
          position: "fixed",
          right: 20,
          bottom: 0
        }}
        direction="up"
        in={openMsg}
        mountOnEnter
        unmountOnExit
      >
        <Paper
          style={{
            width: 400,
            height: 450,
            backgroundColor: "rgba(0,0,0,0.8)"
          }}
        >
          <Paper style={{ height: 20, width: "100%" }}>
            <Avatar
              aria-haspopup="true"
              onClick={handleClick}
              alt="Remy Sharp"
              className={classes.small}
            >
              H
            </Avatar>
            <button
              onClick={() => {
                setOpenMsg(false);
              }}
            >
              Close
            </button>
          </Paper>
        </Paper>
      </Slide>
      <div
        style={{
          width: "100%",
          height: 30,
          position: "fixed",
          bottom: 0,
          backgroundColor: "#F3F3F3",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "transparent",
          borderTopColor: "#C6C6C6"
        }}
      >
        footer
      </div>
    </Paper>
  );
};

function mapStateToProps(state) {
  return {
    NavTo: state.NavTo
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
