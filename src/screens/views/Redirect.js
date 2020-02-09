import React from "react";
import { Redirect } from "react-router-dom";

function RedirectToHome() {
  return (
    <div>
      <Redirect to="/home/selection" />
    </div>
  );
}

export default RedirectToHome;
