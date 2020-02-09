import React from "react";
import { Typography, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import VerticalTabs from "./PosItemsList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  botton: {
    width: 150,
    height: 60,
    marginRight: 5,
    border: "none",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "#9A43A8",
    "&:hover": {
      backgroundColor: "#BB81C5"
    }
  }
}));

function POS() {
  const classes = useStyles();

  return (
    <div style={{ width: "100%", height: "90vh", display: "flex" }}>
      <div
        style={{
          width: "10%",
          height: "100%",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "transparent",
          borderRightColor: "#8C8A9E"
        }}
      >
        <div style={{ width: "98.5%", padding: 1, marginTop: 68 }}>
          <Button style={{ backgroundColor: "#fff" }} variant="outlined">
            <Typography>Select Customer</Typography>
          </Button>
        </div>
        <div style={{ width: "98.5%", padding: 1, marginTop: 10 }}>
          <Button style={{ backgroundColor: "#fff" }} variant="outlined">
            <Typography>Add Ticket Note</Typography>
          </Button>
        </div>
        <div style={{ width: "98.5%", padding: 1, marginTop: 10 }}>
          <Button style={{ backgroundColor: "#fff" }} variant="outlined">
            <Typography>Sales History</Typography>
          </Button>
        </div>

        {/* <div
          style={{
            height: 110,
            backgroundColor: "#F5F5F5",
            width: 145,
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div style={{ paddingTop: 45, paddingLeft: 20 }}>
            <Typography>POS VIEW</Typography>
          </div>
          <div
            style={{
              width: 6,
              height: 109,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "transparent",
              borderTopColor: "#8C8A9E",
              borderBottomColor: "#8C8A9E"
            }}
          ></div>
        </div> */}

        <div style={{ width: "98.5%", padding: 1, marginTop: 10 }}>
          <Button style={{ backgroundColor: "#fff" }} variant="outlined">
            <Typography>Tax Invoice</Typography>
          </Button>
        </div>
        <div style={{ width: "98.5%", padding: 1, marginTop: 10 }}>
          <Button
            style={{ width: "100%", backgroundColor: "#fff" }}
            variant="outlined"
          >
            <Typography>Quotation</Typography>
          </Button>
        </div>
        <div style={{ width: "98.5%", padding: 1, marginTop: 10 }}>
          <Button
            style={{ width: "100%", backgroundColor: "#fff" }}
            variant="outlined"
          >
            <Typography>Returns</Typography>
          </Button>
        </div>
      </div>
      <div
        style={{
          width: "89.5%",
          display: "flex",
          overflow: "hidden"
        }}
      >
        <div style={{ width: "0.5%" }} />
        <div
          style={{
            width: "99.5%",
            height: "87vh",
            backgroundColor: "#F5F5F5",
            borderRadius: 10,
            display: "flex",
            padding: 5,
            justifyContent: "space-between"
          }}
        >
          <Paper square style={{ width: "39%" }}>
            <div
              style={{ padding: 5, width: "98%", backgroundColor: "#E7E7EB" }}
            >
              <Typography>New Ticket</Typography>
            </div>
            <div style={{ height: "65vh" }}></div>
            <div>
              <div style={{ marginLeft: 5 }}>
                <button className={classes.botton}>
                  <Typography style={{ color: "#fff" }} variant="h6">
                    Mutiple Pay
                  </Typography>
                </button>
                <button className={classes.botton}>
                  <Typography style={{ color: "#fff" }} variant="h6">
                    Cash
                  </Typography>
                </button>
                <button className={classes.botton}>
                  <Typography style={{ color: "#fff" }} variant="h6">
                    Credit Card
                  </Typography>
                </button>
              </div>
              <div style={{ marginTop: 5 }}>
                <button>
                  <Typography>Close</Typography>
                </button>
              </div>
            </div>
          </Paper>
          <Paper style={{ width: "60%" }}>
            <VerticalTabs />
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default POS;
