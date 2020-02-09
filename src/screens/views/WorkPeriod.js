import React from "react";
import WorkPeriodList from "./WorkPeriodList";
import { Button, Typography, Paper } from "@material-ui/core";
import { AnimatedSwitch, spring } from "react-router-transition";
import { Route, useHistory, useLocation } from "react-router-dom";
import NewWorkPeriod from "./NewWorkPeriod";

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.offset}px)`
  };
}

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 19
  });
}

const pageTransitions = {
  atEnter: {
    offset: 200,
    opacity: 0
  },
  atLeave: {
    offset: glide(-100),
    opacity: glide(0)
  },
  atActive: {
    offset: glide(0),
    opacity: glide(1)
  }
};

const WorkPeriod = props => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div
      style={{
        width: "98%",
        height: "100%",
        display: "flex",
        padding: 15,
        marginRight: 20,
        overflow: "hidden"
      }}
    >
      <div style={{ width: "20%" }}>
        <div style={{ marginBottom: 15 }}>
          <Button
            disabled={location.pathname === "/home/workperiod/new-file"}
            onClick={() => {
              history.push("/home/workperiod/new-file");
            }}
            variant="outlined"
          >
            <Typography variant="h6">New Work Period</Typography>
          </Button>
        </div>
        <div>
          <Button disabled variant="outlined">
            <Typography variant="h6">End Work Period</Typography>
          </Button>
        </div>
      </div>
      <Paper
        style={{
          width: "80%",
          height: "85vh",
          backgroundColor: "#F5F5F5",
          // borderRadius: 5
        }}
      >
        <div>
          <AnimatedSwitch
            className="switch-wrapper"
            {...pageTransitions}
            mapStyles={mapStyles}
          >
            <Route
              path="/home/workperiod/list-file"
              component={WorkPeriodList}
            />
            <Route path="/home/workperiod/new-file" component={NewWorkPeriod} />
          </AnimatedSwitch>
        </div>
      </Paper>
    </div>
  );
};

export default WorkPeriod;
