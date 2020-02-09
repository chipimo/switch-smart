import React from "react";
import { AnimatedSwitch, spring } from "react-router-transition";
import { Route } from "react-router-dom";
import SelectionPan from "./SelectionPan";
import WorkPeriod from "./WorkPeriod";
import POS from "./POS";

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

function Index() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh"
      }}
    >
      <div>
        <AnimatedSwitch
          {...switchConfig}
          mapStyles={mapStyles}
          className="switch-wrapper"
        >
          <Route path="/home/selection" component={SelectionPan} />
          <Route path="/home/workperiod" component={WorkPeriod} />
          <Route path="/home/pos" component={POS} />
        </AnimatedSwitch>
      </div>
    </div>
  );
}

export default Index;
